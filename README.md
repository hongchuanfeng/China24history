# 中国24史 - 传道AI

一个基于 Next.js 开发的中国历史朝代介绍网站，按时间轴方式展示中国24史。

**网站地址**: https://china.zorezoro.com/

## 功能特性

- **时间轴展示**: 按时间顺序展示从夏朝到清朝的各个朝代
- **朝代详情**: 每个朝代包含重大事件、著名皇帝、将领和名臣介绍
- **响应式设计**: 完美适配 PC 端和移动端
- **SEO 优化**: 完整的 meta 标签、sitemap、robots.txt
- **Google Analytics**: 集成网站统计分析（需配置）

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **字体**: Geist (Google Fonts)

## 项目结构

```
china24history/
├── src/
│   ├── app/
│   │   ├── about/          # 关于我们
│   │   ├── contact/        # 联系我们
│   │   ├── copyright/      # 版权声明
│   │   ├── disclaimer/     # 免责声明
│   │   ├── dynasty/[id]/   # 朝代详情页
│   │   ├── privacy/        # 隐私政策
│   │   ├── terms/          # 服务条款
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页
│   ├── components/
│   │   ├── DynastyCard.tsx # 朝代卡片组件
│   │   ├── Footer.tsx      # 页脚组件
│   │   ├── GoogleAnalytics.tsx # GA组件
│   │   └── Navbar.tsx      # 导航栏组件
│   └── data/
│       └── dynasties.ts    # 24史历史数据
├── .env.example            # 环境变量示例
├── next.config.ts          # Next.js配置
├── package.json
└── README.md
```

## 本地开发

1. 克隆项目
2. 安装依赖：
   ```bash
   npm install
   ```
3. 复制环境变量配置：
   ```bash
   cp .env.example .env.local
   ```
4. 编辑 `.env.local`，填入 Google Analytics ID（可选）：
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
5. 启动开发服务器：
   ```bash
   npm run dev
   ```
6. 打开浏览器访问：http://localhost:3000

## 构建与部署

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

### 部署到 Vercel
1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量（如需使用 Google Analytics）
4. 自动部署

## 环境变量

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 测量ID | 否 |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console 验证码 | 否 |

## SEO 配置

网站已包含以下 SEO 优化：

- ✅ 自定义 meta 标签（title, description, keywords）
- ✅ Open Graph 标签
- ✅ Twitter Card 标签
- ✅ Robots.txt
- ✅ Sitemap.xml
- ✅ 语义化 HTML 结构
- ✅ 响应式设计

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 版权信息

© 2025 传道AI · 版权所有

工业和信息化部 粤ICP备18041392号-7

## 联系方式

- **邮箱**: support@zorezoro.com
- **地址**: 深圳市龙华区龙华大道130栋
