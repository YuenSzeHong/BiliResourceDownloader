import { downloadDir } from "@tauri-apps/api/path";
import { platform } from "@tauri-apps/plugin-os";

const isMobileDevice = () => {
  const plat = platform();
  return plat === "android" || plat === "ios";
};

const getDownloadDir = async (): Promise<string> => {
  const path = !isMobileDevice()
    ? await downloadDir()
    : "/storage/emulated/0/Download";
  return path;
};

const resolveContentUri = (uri: string): string => {
  // content://com.miui.gallery.open/raw/%2Fstorage%2Femulated%2F0%2FPictures%2FQQ%2FImage_51506021824607.jpg
  const path = uri.split("/").pop() || "";
  return decodeURIComponent(path);
};

export { isMobileDevice, getDownloadDir, resolveContentUri };
