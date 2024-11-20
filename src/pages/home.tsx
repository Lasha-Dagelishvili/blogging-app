import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto py-8 px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {[1, 2].map((_post, idx) => (
            <article key={idx} className="bg-gray-800 rounded-lg p-6">
              <div className="w-full h-48 bg-gray-700 rounded-lg flex justify-center items-center">
                <span>{t("image_placeholder")}</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">{t("post_title")}</h2>
              <p className="text-gray-400 text-sm mt-1">
                {t("author")} &middot; {t("date")} &middot; {t("read_time")}
              </p>
              <p className="mt-4 text-gray-300">
                {t("post_excerpt")}
              </p>
              <div className="mt-4 flex space-x-2">
                {["Blockchain", "Technology", "Future"].map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {t(tag)}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t("popular_tags")}</h3>
            <div className="flex flex-wrap gap-2">
              {["Blockchain", "Cryptocurrency", "Technology", "Programming", "AI", "Machine Learning"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {t(tag)}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{t("featured_authors")}</h3>
            <ul className="space-y-4">
              {[
                { name: "Alice Johnson", role: "Blockchain Enthusiast" },
                { name: "Bob Smith", role: "Crypto Analyst" },
                { name: "Carol Williams", role: "Tech Journalist" },
              ].map((author, idx) => (
                <li key={idx} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white font-bold">{author.name}</p>
                    <p className="text-gray-400 text-sm">{t(author.role)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomePage;
