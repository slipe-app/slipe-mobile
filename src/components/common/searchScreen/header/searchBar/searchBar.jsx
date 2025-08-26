import { XStack, useTheme } from "tamagui";
import Icon from "@components/ui/icon";
import { Input } from "tamagui";
import { useTranslation } from "react-i18next";
import useSearchStore from "@stores/searchScreen";
import { useCallback } from "react";
import { useRef } from "react";
import SearchBarButton from "./searchBar.button";

export default function SearchBar() {
  const inputRef = useRef();
  const theme = useTheme();
  const color = theme.secondaryText.get();
  const { t } = useTranslation();
  const { query, setQuery, setIsFocused, setIsSearch } =
    useSearchStore();

  const onCancelPressed = useCallback((type) => {
    setIsFocused(type === "cancel" ? false : true);
    if (type === "cancel") {
      setQuery("");
      if (inputRef?.current) {
        inputRef.current.value = "";
      }
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <XStack width="$full" gap="$6">
      <XStack
        gap="$5"
        width="$full"
        flex={1}
        br="$full"
        onPressIn={() => onCancelPressed("focus")}
        h="$13"
        flexDirection="row"
        backgroundColor="$backgroundTransparent"
        ph="$5"
        pr="$0"
        alignItems="center"
      >
        <Icon size={24} icon="magnifyingglass" color={color} />
        <Input
          ref={inputRef}
          onSubmitEditing={() => {
            setIsSearch(true);
          }}
          value={query}
          onChangeText={setQuery}
          fz="$3"
          f={1}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={t("search.input")}
          placeholderTextColor={color}
          p="$0"
          borderWidth="$0"
          fw="$2"
          h="$13"
        />
      </XStack>
      <SearchBarButton onCancelPressed={onCancelPressed} />
    </XStack>
  );
}
