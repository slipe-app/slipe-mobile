import { YStack, View, Text } from "tamagui";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { SearchHeader } from "../components/common/searchScreen/header";
import Hints from "@components/common/searchScreen/searchContent/hints";
import { FlashList } from "@shopify/flash-list";
import { categories } from "@constants/categories";
import Category from "../components/common/searchScreen/category";
import useSearchStore from "@stores/searchScreen";
import { useEffect, useCallback } from "react";
import useFetchDataByQuery from "@hooks/useFetchDataByQuery";
import Post from "@components/ui/post";
import SearchSlider from "@components/common/searchScreen/slider";
import useFetchCategoryStatistics from "@hooks/useFetchCategoryStatistics";
import { useTranslation } from "react-i18next";

const AnimatedFlashList = Animated.createAnimatedComponent(FlashList);

export function SearchScreen() {
	const { t } = useTranslation();
	const scrollY = useSharedValue(0);
	const {setScrollY, isFocused, isSearch, query, headerHeight, setIsSearch, setStatistics, type, setIsFocused} = useSearchStore();

	const { data, setPage, setData } = useFetchDataByQuery(isSearch ? query : "", type);
	const { statistics, isLoading, error } = useFetchCategoryStatistics();

	const onScroll = useAnimatedScrollHandler(event => {
		scrollY.value = event.contentOffset.y;
	});

	const renderItem = useCallback(
		({ item }) => {
			if (isSearch) {
				return <Post post={item} setPosts={setData} />;
			}
			return (
				<View style={{ flex: 1, margin: 8 }}>
					<Category category={item} />
				</View>
			);
		},
		[isSearch]
	);

	const handleEndReached = useCallback(() => {
		setPage(prev => prev + 1);
	}, []);

	useEffect(() => {
		setScrollY(scrollY);
		return () => {
			setIsFocused(false);
		};
	}, []);

	useEffect(() => {
		if (isFocused) {
			setIsSearch(false);
		}
	}, [isFocused]);

	useEffect(() => {
		setStatistics(statistics?.filter(statistic => statistic?.category !== "story"));
	}, [statistics]);

	return (
		<YStack f={1} backgroundColor='$black'>
			<SearchHeader />
			<AnimatedFlashList
				keyboardShouldPersistTaps='handled'
				data={isSearch ? data : categories}
				extraData={isSearch}
				onEndReached={isSearch ? handleEndReached : null}
				renderItem={renderItem}
				keyExtractor={(item, index) => (isSearch ? `post-${item?.id}` : `category-${index}`)}
				numColumns={2}
				initialNumToRender={10}
				maxToRenderPerBatch={isSearch ? 12 : 6}
				ListHeaderComponent={
					<YStack pt='$6' gap='$10' pb='$3'>
						{!isSearch && <SearchSlider />}
						<Text lh='$8' fw='$3' fz='$8' color='$color' mh='$3'>
							{t(`search.${isSearch ? "resultsTitle" : "categoriesTitle"}`)}
						</Text>
					</YStack>
				}
				estimatedItemSize={isSearch ? 250 : 131}
				contentContainerStyle={{
					paddingTop: headerHeight,
					paddingHorizontal: 8,
				}}
				columnWrapperStyle={{
					marginBottom: 24,
				}}
				scrollEventThrottle={16}
				onScroll={onScroll}
			/>
			<Hints />
		</YStack>
	);
}

export default SearchScreen;
