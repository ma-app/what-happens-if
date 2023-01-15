import bridge from "@vkontakte/vk-bridge";

// открытие рекламного ролика
export function nativeAds(getPlatform) {
  // const res = ["ios", "mobile-web"].includes(getPlatform)
  //   ? null
  //   :
  bridge
    .send("VKWebAppShowNativeAds", {
      ad_format: "preloader",
    })
    .then((res) => {
      console.log("NativeAds success", res);
    })
    .catch((err) => {
      console.log("NativeAds error", err);
    });
}

/**
 * Открывает рекламный баннер на весь экран
 * @returns {Promise<boolean>}
 */
export async function showNativeAd() {
  try {
    const data = await bridge.send("VKWebAppShowNativeAds", {
      ad_format: "preloader",
    });

    return data.result !== undefined ? data.result : false;
  } catch (e) {
    return false;
  }
}
