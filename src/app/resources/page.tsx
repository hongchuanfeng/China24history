"use client";

import { useState } from "react";
import Link from "next/link";

interface PdfFile {
  name: string;
  url: string;
  bookName: string;
  volume: string;
  sortOrder: number;
}

const bookOrderMap: { [key: string]: number } = {
  "史记": 1,
  "汉书": 2,
  "后汉书": 3,
  "三国志": 4,
  "晋书": 5,
  "宋书": 6,
  "南齐书": 7,
  "梁书": 8,
  "陈书": 9,
  "魏书": 10,
  "北齐书": 11,
  "周书": 12,
  "隋书": 13,
  "南史": 14,
  "北史": 15,
  "旧唐书": 16,
  "新唐书": 17,
  "旧五代史": 18,
  "新五代史": 19,
  "宋史": 20,
  "辽史": 21,
  "金史": 22,
  "元史": 23,
  "明史": 24,
};

const pdfFiles: PdfFile[] = [
  { name: "《二十四史全译 史记 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 史记 第一册》主编：许嘉璐.pdf", bookName: "史记", volume: "第一册", sortOrder: 1 },
  { name: "《二十四史全译 史记 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 史记 第二册》主编：许嘉璐.pdf", bookName: "史记", volume: "第二册", sortOrder: 1 },
  { name: "《二十四史全译 汉书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 汉书 第一册》主编：许嘉璐.pdf", bookName: "汉书", volume: "第一册", sortOrder: 2 },
  { name: "《二十四史全译 汉书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 汉书 第二册》主编：许嘉璐.pdf", bookName: "汉书", volume: "第二册", sortOrder: 2 },
  { name: "《二十四史全译 汉书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 汉书 第三册》主编：许嘉璐.pdf", bookName: "汉书", volume: "第三册", sortOrder: 2 },
  { name: "《二十四史全译 后汉书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 后汉书 第一册》主编：许嘉璐.pdf", bookName: "后汉书", volume: "第一册", sortOrder: 3 },
  { name: "《二十四史全译 后汉书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 后汉书 第二册》主编：许嘉璐.pdf", bookName: "后汉书", volume: "第二册", sortOrder: 3 },
  { name: "《二十四史全译 后汉书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 后汉书 第三册》主编：许嘉璐.pdf", bookName: "后汉书", volume: "第三册", sortOrder: 3 },
  { name: "《二十四史全译 三国志 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 三国志 第一册》主编：许嘉璐.pdf", bookName: "三国志", volume: "第一册", sortOrder: 4 },
  { name: "《二十四史全译 三国志 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 三国志 第二册》主编：许嘉璐.pdf", bookName: "三国志", volume: "第二册", sortOrder: 4 },
  { name: "《二十四史全译 晋书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 晋书 第一册》主编：许嘉璐.pdf", bookName: "晋书", volume: "第一册", sortOrder: 5 },
  { name: "《二十四史全译 晋书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 晋书 第二册》主编：许嘉璐.pdf", bookName: "晋书", volume: "第二册", sortOrder: 5 },
  { name: "《二十四史全译 晋书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 晋书 第三册》主编：许嘉璐.pdf", bookName: "晋书", volume: "第三册", sortOrder: 5 },
  { name: "《二十四史全译 晋书 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 晋书 第四册》主编：许嘉璐.pdf", bookName: "晋书", volume: "第四册", sortOrder: 5 },
  { name: "《二十四史全译 宋书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋书 第一册》主编：许嘉璐.pdf", bookName: "宋书", volume: "第一册", sortOrder: 6 },
  { name: "《二十四史全译 宋书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋书 第二册》主编：许嘉璐.pdf", bookName: "宋书", volume: "第二册", sortOrder: 6 },
  { name: "《二十四史全译 宋书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋书 第三册》主编：许嘉璐.pdf", bookName: "宋书", volume: "第三册", sortOrder: 6 },
  { name: "《二十四史全译 南齐书 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 南齐书 全一册》主编：许嘉璐.pdf", bookName: "南齐书", volume: "全一册", sortOrder: 7 },
  { name: "《二十四史全译 梁书 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 梁书 全一册》主编：许嘉璐.pdf", bookName: "梁书", volume: "全一册", sortOrder: 8 },
  { name: "《二十四史全译 陈书 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 陈书 全一册》主编：许嘉璐.pdf", bookName: "陈书", volume: "全一册", sortOrder: 9 },
  { name: "《二十四史全译 魏书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 魏书 第一册》主编：许嘉璐.pdf", bookName: "魏书", volume: "第一册", sortOrder: 10 },
  { name: "《二十四史全译 魏书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 魏书 第二册》主编：许嘉璐.pdf", bookName: "魏书", volume: "第二册", sortOrder: 10 },
  { name: "《二十四史全译 魏书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 魏书 第三册》主编：许嘉璐.pdf", bookName: "魏书", volume: "第三册", sortOrder: 10 },
  { name: "《二十四史全译 魏书 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 魏书 第四册》主编：许嘉璐.pdf", bookName: "魏书", volume: "第四册", sortOrder: 10 },
  { name: "《二十四史全译 北齐书 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 北齐书 全一册》主编：许嘉璐.pdf", bookName: "北齐书", volume: "全一册", sortOrder: 11 },
  { name: "《二十四史全译 周书 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 周书 全一册》主编：许嘉璐.pdf", bookName: "周书", volume: "全一册", sortOrder: 12 },
  { name: "《二十四史全译 隋书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 隋书 第一册》主编：许嘉璐.pdf", bookName: "隋书", volume: "第一册", sortOrder: 13 },
  { name: "《二十四史全译 隋书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 隋书 第二册》主编：许嘉璐.pdf", bookName: "隋书", volume: "第二册", sortOrder: 13 },
  { name: "《二十四史全译 南史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 南史 第一册》主编：许嘉璐.pdf", bookName: "南史", volume: "第一册", sortOrder: 14 },
  { name: "《二十四史全译 南史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 南史 第二册》主编：许嘉璐.pdf", bookName: "南史", volume: "第二册", sortOrder: 14 },
  { name: "《二十四史全译 北史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 北史 第一册》主编：许嘉璐.pdf", bookName: "北史", volume: "第一册", sortOrder: 15 },
  { name: "《二十四史全译 北史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 北史 第二册》主编：许嘉璐.pdf", bookName: "北史", volume: "第二册", sortOrder: 15 },
  { name: "《二十四史全译 北史 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 北史 第三册》主编：许嘉璐.pdf", bookName: "北史", volume: "第三册", sortOrder: 15 },
  { name: "《二十四史全译 北史 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 北史 第四册》主编：许嘉璐.pdf", bookName: "北史", volume: "第四册", sortOrder: 15 },
  { name: "《二十四史全译 旧唐书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第一册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第一册", sortOrder: 16 },
  { name: "《二十四史全译 旧唐书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第二册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第二册", sortOrder: 16 },
  { name: "《二十四史全译 旧唐书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第三册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第三册", sortOrder: 16 },
  { name: "《二十四史全译 旧唐书 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第四册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第四册", sortOrder: 16 },
  { name: "《二十四史全译 旧唐书 第五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第五册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第五册", sortOrder: 16 },
  { name: "《二十四史全译 旧唐书 第六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧唐书 第六册》主编：许嘉璐.pdf", bookName: "旧唐书", volume: "第六册", sortOrder: 16 },
  { name: "《二十四史全译 新唐书 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第一册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第一册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第二册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第二册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第三册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第三册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第四册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第四册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第五册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第五册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第六册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第六册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第七册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第七册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第七册", sortOrder: 17 },
  { name: "《二十四史全译 新唐书 第八册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新唐书 第八册》主编：许嘉璐.pdf", bookName: "新唐书", volume: "第八册", sortOrder: 17 },
  { name: "《二十四史全译 旧五代史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧五代史 第一册》主编：许嘉璐.pdf", bookName: "旧五代史", volume: "第一册", sortOrder: 18 },
  { name: "《二十四史全译 旧五代史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 旧五代史 第二册》主编：许嘉璐.pdf", bookName: "旧五代史", volume: "第二册", sortOrder: 18 },
  { name: "《二十四史全译 新五代史 全一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 新五代史 全一册》主编：许嘉璐.pdf", bookName: "新五代史", volume: "全一册", sortOrder: 19 },
  { name: "《二十四史全译 宋史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第一册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第一册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第二册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第二册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第三册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第三册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第四册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第四册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第五册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第五册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第六册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第六册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第七册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第七册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第七册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第八册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第八册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第八册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第九册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第九册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第九册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十一册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十一册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十二册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十二册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十三册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十三册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十四册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十四册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十五册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十五册", sortOrder: 20 },
  { name: "《二十四史全译 宋史 第十六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 宋史 第十六册》主编：许嘉璐.pdf", bookName: "宋史", volume: "第十六册", sortOrder: 20 },
  { name: "《二十四史全译 辽史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 辽史 第一册》主编：许嘉璐.pdf", bookName: "辽史", volume: "第一册", sortOrder: 21 },
  { name: "《二十四史全译 辽史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 辽史 第二册》主编：许嘉璐.pdf", bookName: "辽史", volume: "第二册", sortOrder: 21 },
  { name: "《二十四史全译 金史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 金史 第一册》主编：许嘉璐.pdf", bookName: "金史", volume: "第一册", sortOrder: 22 },
  { name: "《二十四史全译 金史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 金史 第二册》主编：许嘉璐.pdf", bookName: "金史", volume: "第二册", sortOrder: 22 },
  { name: "《二十四史全译 金史 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 金史 第三册》主编：许嘉璐.pdf", bookName: "金史", volume: "第三册", sortOrder: 22 },
  { name: "《二十四史全译 元史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第一册》主编：许嘉璐.pdf", bookName: "元史", volume: "第一册", sortOrder: 23 },
  { name: "《二十四史全译 元史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第二册》主编：许嘉璐.pdf", bookName: "元史", volume: "第二册", sortOrder: 23 },
  { name: "《二十四史全译 元史 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第三册》主编：许嘉璐.pdf", bookName: "元史", volume: "第三册", sortOrder: 23 },
  { name: "《二十四史全译 元史 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第四册》主编：许嘉璐.pdf", bookName: "元史", volume: "第四册", sortOrder: 23 },
  { name: "《二十四史全译 元史 第五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第五册》主编：许嘉璐.pdf", bookName: "元史", volume: "第五册", sortOrder: 23 },
  { name: "《二十四史全译 元史 第六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 元史 第六册》主编：许嘉璐.pdf", bookName: "元史", volume: "第六册", sortOrder: 23 },
  { name: "《二十四史全译 明史 第一册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第一册》主编：许嘉璐.pdf", bookName: "明史", volume: "第一册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第二册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第二册》主编：许嘉璐.pdf", bookName: "明史", volume: "第二册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第三册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第三册》主编：许嘉璐.pdf", bookName: "明史", volume: "第三册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第四册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第四册》主编：许嘉璐.pdf", bookName: "明史", volume: "第四册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第五册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第五册》主编：许嘉璐.pdf", bookName: "明史", volume: "第五册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第六册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第六册》主编：许嘉璐.pdf", bookName: "明史", volume: "第六册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第七册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第七册》主编：许嘉璐.pdf", bookName: "明史", volume: "第七册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第八册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第八册》主编：许嘉璐.pdf", bookName: "明史", volume: "第八册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第九册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第九册》主编：许嘉璐.pdf", bookName: "明史", volume: "第九册", sortOrder: 24 },
  { name: "《二十四史全译 明史 第十册》主编：许嘉璐.pdf", url: "/pdf/《二十四史全译 明史 第十册》主编：许嘉璐.pdf", bookName: "明史", volume: "第十册", sortOrder: 24 },
].sort((a, b) => {
  if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
  const volumeA = a.volume.replace(/[^0-9]/g, "") || "0";
  const volumeB = b.volume.replace(/[^0-9]/g, "") || "0";
  return parseInt(volumeA) - parseInt(volumeB);
});

export default function ResourcesPage() {
  const [selectedPdf, setSelectedPdf] = useState<PdfFile | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const groupedBooks = pdfFiles.reduce((acc, pdf) => {
    if (!acc[pdf.bookName]) {
      acc[pdf.bookName] = {
        order: pdf.sortOrder,
        volumes: [],
      };
    }
    acc[pdf.bookName].volumes.push(pdf);
    return acc;
  }, {} as Record<string, { order: number; volumes: PdfFile[] }>);

  const sortedBooks = Object.entries(groupedBooks).sort((a, b) => a[1].order - b[1].order);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white">
      {/* 英雄区域 */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-red-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          {/* 返回按钮 */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>

          {/* 标题 */}
          <div className="text-center">
            <div className="inline-block seal text-3xl md:text-4xl px-8 py-3 mb-4">
              二十四史全译
            </div>
            <p className="text-lg text-amber-50 max-w-3xl mx-auto leading-relaxed">
              《二十四史》是中国历代编撰的史书总称，包含上起传说中的黄帝，下至明朝崇祯十七年的历史记载，共三千二百余卷，约四千万字。本页面收录《二十四史全译》PDF文件，按二十四史顺序排列。
            </p>
          </div>
        </div>
      </section>

      {/* 主要内容 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {!selectedPdf ? (
            <>
              {/* 文件列表 */}
              <div className="space-y-8">
                {sortedBooks.map(([bookName, { order, volumes }], idx) => (
                  <div key={bookName} className="bg-white rounded-xl shadow-lg p-6 border border-red-100">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-3">
                      <span className="seal text-lg px-3 py-1">{order}</span>
                      {bookName}
                      <span className="text-sm text-gray-500 font-normal">（共{volumes.length}册）</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {volumes.map((pdf) => (
                        <button
                          key={pdf.name}
                          onClick={() => setSelectedPdf(pdf)}
                          className="text-left px-4 py-3 bg-gradient-to-r from-amber-50 to-white border border-amber-200 rounded-lg hover:from-amber-100 hover:to-amber-50 hover:border-amber-300 transition-all group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-red-700 transition-colors">
                            {pdf.volume}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* PDF 查看器 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-red-100">
                {/* 头部 */}
                <div className="bg-gradient-to-r from-red-800 to-red-700 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedPdf(null)}
                      className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      返回列表
                    </button>
                    <h2 className="text-lg font-bold">{selectedPdf.name}</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                      title="全屏查看"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      全屏
                    </button>
                    <a
                      href={selectedPdf.url}
                      download={selectedPdf.name}
                      className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      下载
                    </a>
                  </div>
                </div>

                {/* PDF 嵌入 */}
                <div className="h-[calc(100vh-300px)] min-h-[500px]">
                  <iframe
                    src={`${selectedPdf.url}#toolbar=0`}
                    className="w-full h-full"
                    title={selectedPdf.name}
                  />
                </div>
              </div>

              {/* 同册其他文件 */}
              <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-red-100">
                <h3 className="text-lg font-bold text-red-800 mb-4">
                  同书其他册
                </h3>
                <div className="flex flex-wrap gap-3">
                  {groupedBooks[selectedPdf.bookName]?.volumes
                    .filter((v) => v.name !== selectedPdf.name)
                    .map((pdf) => (
                      <button
                        key={pdf.name}
                        onClick={() => setSelectedPdf(pdf)}
                        className="px-4 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg text-sm text-gray-700 hover:text-red-700 transition-colors"
                      >
                        {pdf.volume}
                      </button>
                    ))}
                </div>
              </div>

              {/* 全屏 PDF 弹窗 */}
              {isFullscreen && selectedPdf && (
                <div 
                  className="fixed inset-0 z-50 bg-black/95 flex flex-col"
                  style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                >
                  {/* 全屏头部 */}
                  <div className="bg-gradient-to-r from-red-800 to-red-700 text-white p-4 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setIsFullscreen(false)}
                        className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        关闭
                      </button>
                      <h2 className="text-lg font-bold">{selectedPdf.name}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={selectedPdf.url}
                        download={selectedPdf.name}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        下载
                      </a>
                    </div>
                  </div>

                  {/* 全屏 PDF */}
                  <iframe
                    src={`${selectedPdf.url}#toolbar=0`}
                    className="w-full h-full flex-1"
                    title={selectedPdf.name}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
