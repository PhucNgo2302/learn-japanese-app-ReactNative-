import React from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import { useThemeContext } from "@/features/settings/settings-theme/theme-context";
import {
  LanguageKeys,
  LanguageName,
  ShortLanguage,
} from "@/shared/constants/language";
import { useAppDispatch } from "@/shared/model/hooks";
import { updateLessons } from "@/pages/education/learning/model/slice";
import SettingItem from "@/entities/profile/setting-item/setting-item";

import { useActionSheet } from '@expo/react-native-action-sheet';


const SettingsLanguage: React.FC = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const { themeString } = useThemeContext();

  const dispatch = useAppDispatch();

  const { t, i18n } = useTranslation();

  const setLanguage = async (lang: LanguageKeys) => {
    await AsyncStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);

    dispatch(updateLessons({ lang }));
  };


  const onPress = () => {
    const options = [
      t('alert.cancel'),
      LanguageName.en,
      LanguageName.vn,
    ];
    const cancelButtonIndex = 0;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      userInterfaceStyle: themeString as "dark" | "light"
    }, (buttonIndex?: number) => {
      switch (buttonIndex) {
        case 1:
          setLanguage(ShortLanguage.EN);
          break;
        case 2:
          setLanguage(ShortLanguage.VN);
        default:
          break;
      }
    });
  }


  return (
    <SettingItem
      text={t("settings.language")}
      subText={LanguageName[i18n.language as LanguageKeys]}
      onClick={onPress}
    />
  );
};

export default SettingsLanguage;
