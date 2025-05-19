import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-[#e0f7fa] to-[#f1f8e9]">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center sm:text-left sm:items-start">
        <Image
          className="dark:invert"
          src="/cicd.svg"
          alt="CI/CD logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-[#333]">
          🚀 Hello, I’m learning CI/CD!
        </h1>
        <p className="text-lg max-w-xl text-black-600 dark:text-black-300">
          This project is part of my journey to build and automate a full-stack app.
          I'm deploying it on an EC2 instance with NGINX, SSL, and GitHub Actions.
        </p>
        <ol className="list-decimal list-inside text-base text-gray-800 dark:text-gray-200">
          <li>✅ Version control with Git & GitHub</li>
          <li>✅ CI/CD automation via GitHub Actions</li>
          <li>✅ Deployed on AWS EC2</li>
          <li>✅ SSL with Certbot & NGINX</li>
          <li>🔄 Continuous updates!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-black text-white hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
            href="https://github.com/jasonsantoleo/CI-CD"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔧 View Project on GitHub
          </a>
          <a
            className="rounded-full border border-gray-400 dark:border-white/[.2]  transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            📘 Next.js Docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-sm text-gray-600 dark:text-gray-400">
        Built with ❤️ using Next.js & Deployed on AWS EC2
      </footer>
    </div>
  );
}
