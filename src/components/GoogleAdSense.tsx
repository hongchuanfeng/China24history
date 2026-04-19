"use client";

import { useEffect } from "react";

export default function GoogleAdSense() {
  useEffect(() => {
    // 防止重复添加脚本
    if (typeof window === "undefined" || document.head.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
      return;
    }

    // 创建并添加 Google AdSense 脚本
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7274710287377352";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}
