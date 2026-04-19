import { friendLinks } from "@/data/dynasties";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-red-900 to-red-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* 友情链接区域 */}
        <div className="mb-10">
          <h3 className="text-xl font-bold mb-6 text-center text-amber-200">友情链接</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {friendLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-red-800/50 hover:bg-red-700/70 rounded-lg transition-all hover:scale-105 border border-red-700/30 text-center text-sm"
              >
                <span className="block font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 分割线 */}
        <div className="border-t border-red-700/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 版权信息 */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold mb-1">© {currentYear} 传道AI · 版权所有</p>
              <p className="text-sm text-red-200">工业和信息化部 粤ICP备18041392号-7</p>
            </div>

            {/* 联系方式 */}
            <div className="text-center md:text-right text-sm text-red-200">
              <p>邮箱：support@zorezoro.com</p>
              <p>地址：深圳市龙华区龙华大道130栋</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
