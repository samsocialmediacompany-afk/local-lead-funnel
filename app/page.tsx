import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";

const contactEmail = "samsocialmediacompany@gmail.com";
const lineOfficialId = "855uphdb";
const lineOfficialUrl = "https://lin.ee/sR8MLrmc";
const facebookUrl =
  "https://www.facebook.com/profile.php?id=100067078134057&locale=zh_TW";
const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
  "https://www.instagram.com/qweasda852069/";
const ctaLabel = "加入 LINE 免費診斷";

function SocialIcon({ name }: { name: "facebook" | "instagram" | "line" | "mail" }) {
  if (name === "mail") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "line") {
    return <span aria-hidden="true" className="text-sm font-black leading-none">LINE</span>;
  }

  if (name === "instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-0" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H8v3h2.5v8h3Z" />
    </svg>
  );
}

const painPoints = [
  "廣告有花錢，但預約名單很少",
  "有人私訊，但後續追蹤很亂",
  "粉專有經營，卻不知道怎麼導成交",
  "名單散在 LINE、表單、紙本或 Excel",
  "老闆不知道廣告到底有沒有賺錢",
  "客戶問完就消失，沒有完整追蹤流程"
];

const solutions = [
  "一頁式成交網站",
  "預約表單",
  "LINE 加好友導流",
  "Google Sheet 名單追蹤",
  "廣告文案",
  "成交狀態追蹤",
  "每週成效回報"
];

const industries = [
  "健身房 / 私人教練",
  "運動按摩 / 物理治療",
  "美甲 / 美睫 / 美容 SPA",
  "皮拉提斯 / 瑜珈",
  "補習班 / 課程顧問",
  "水電 / 抓漏 / 修繕服務"
];

const plans = [
  {
    name: "入門建置版",
    price: "NT$9,800",
    note: "適合先把預約入口補齊的店家",
    items: ["一頁式網站", "預約表單", "LINE 按鈕", "基礎文案", "手機版優化"]
  },
  {
    name: "標準引流版",
    price: "NT$19,800/月",
    note: "適合想穩定收名單並追蹤成效",
    featured: true,
    items: ["建置內容", "廣告文案", "名單追蹤表", "每週優化", "成效回報"]
  },
  {
    name: "成交優化版",
    price: "NT$29,800/月",
    note: "適合已有流量，想提升成交效率",
    items: ["多版本頁面", "A/B 測試", "成交追蹤", "素材方向", "月報分析"]
  }
];

const steps = [
  "免費診斷",
  "確認服務與產業",
  "建置預約頁",
  "串接表單與 LINE",
  "上線測試",
  "廣告導流",
  "每週優化"
];

const cases = [
  {
    title: "健身房體驗課頁",
    metric: "主打體驗課預約",
    body: "整理課程賣點、教練信任感與表單流程，讓廣告流量有清楚下一步。"
  },
  {
    title: "運動按摩預約頁",
    metric: "主打疼痛問題諮詢",
    body: "用症狀情境與服務流程降低陌生客疑慮，導向 LINE 與預約表單。"
  },
  {
    title: "美業預約頁",
    metric: "主打首次體驗優惠",
    body: "把作品、服務項目與優惠方案整合在一頁，方便手機用戶快速送出需求。"
  }
];

const faqs = [
  {
    question: "我沒有網站也可以嗎？",
    answer:
      "可以。服務會從一頁式成交頁開始建置，包含內容架構、手機版版面、預約表單與 LINE 導流。"
  },
  {
    question: "可以只做建置不代操廣告嗎？",
    answer:
      "可以。入門建置版適合只需要預約頁與基礎導流入口的店家，後續也能再升級追蹤與優化。"
  },
  {
    question: "廣告費包含在方案裡嗎？",
    answer:
      "不包含。方案費用是建置、文案、追蹤與優化服務，實際廣告投放費會由店家帳戶另外支付。"
  },
  {
    question: "多久可以上線？",
    answer:
      "資料齊全後，入門建置通常約 5 到 7 個工作天可上線；需要多版本測試或追蹤表設計則會依範圍調整。"
  },
  {
    question: "可以套用不同產業嗎？",
    answer:
      "可以。架構會依不同產業調整賣點、信任元素、預約欄位與追蹤狀態，不只是套同一份模板。"
  }
];

function SectionIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-cta-600">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-navy-950/80 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-black sm:text-base">
            Local Lead Funnel
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-white/80 md:flex">
            <a href="#solutions" className="transition hover:text-white">
              服務內容
            </a>
            <a href="#plans" className="transition hover:text-white">
              方案
            </a>
            <a href="#cases" className="transition hover:text-white">
              案例
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>
          <a
            href={lineOfficialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-md bg-cta-500 px-3 py-3 text-sm font-bold text-navy-950 transition hover:bg-cta-400 sm:px-4"
          >
            {ctaLabel}
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative isolate min-h-[92svh] overflow-hidden bg-navy-950 pt-24 text-white"
      >
        <Image
          src="/images/local-funnel-hero.png"
          alt="亞洲本地店家與行銷顧問討論預約名單追蹤"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-950/88 to-navy-900/30" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="mx-auto flex min-h-[calc(92svh_-_6rem)] max-w-7xl items-center px-4 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              一頁式成交頁 × 預約表單 × LINE 導流 × 名單追蹤
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              幫本地店家打造能帶來預約名單的成交頁
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              從一頁式網站、預約表單、LINE 導流、客戶追蹤表到廣告文案，幫你把流量變成可追蹤的名單與成交機會。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={lineOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-cta-500 px-7 py-4 text-center text-base font-black text-navy-950 shadow-lg shadow-cta-500/30 transition hover:bg-cta-400"
              >
                {ctaLabel}
              </a>
              <a
                href="#plans"
                className="self-center text-center text-sm font-bold text-white/80 underline decoration-white/30 underline-offset-4 transition hover:text-white sm:self-auto sm:px-2 sm:py-4"
              >
                查看服務方案
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
              {["預約入口", "名單追蹤", "成效回報"].map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/15 bg-white/10 px-3 py-3 text-sm font-bold backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="常見卡關"
            title="不是沒有流量，是缺一套能追蹤到成交的流程"
            description="本地店家的成交常常發生在 LINE、電話與現場，但廣告與表單沒有串好，就很難知道哪一步漏掉。"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-cta-500" />
                <p className="text-base font-bold leading-7 text-navy-950">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="bg-navy-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cta-400">
              Solution
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              把廣告、預約、追蹤與成交狀態接在同一條線上
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              這不是單純做一個網站，而是幫店家建立「看得懂、追得到、能優化」的預約成交系統。
            </p>
            <a
              href={lineOfficialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full justify-center rounded-md bg-cta-500 px-6 py-4 text-base font-black text-navy-950 transition hover:bg-cta-400 sm:w-auto"
            >
              {ctaLabel}
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution}
                className="rounded-lg border border-white/10 bg-white/[0.08] p-5"
              >
                <span className="text-sm font-bold text-cta-400">包含</span>
                <p className="mt-2 text-lg font-bold">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="適合產業"
            title="服務型店家都需要更清楚的預約入口"
            description="尤其適合需要陌生客諮詢、體驗課、到店預約或專人回覆的本地服務。"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-lg border border-white bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-black text-navy-950">{industry}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  依照服務單價、預約門檻與成交週期，設計不同的頁面賣點與追蹤欄位。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="服務方案"
            title="從建立預約入口到每週優化，依照成長階段選擇"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-lg border p-6 shadow-sm ${
                  plan.featured
                    ? "border-cta-500 bg-navy-950 text-white shadow-soft"
                    : "border-slate-200 bg-white text-navy-950"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black">{plan.name}</h3>
                    <p
                      className={`mt-2 text-sm leading-6 ${
                        plan.featured ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      {plan.note}
                    </p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-cta-500 px-3 py-1 text-xs font-black text-navy-950">
                      推薦
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 text-3xl font-black">{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cta-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={lineOfficialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex w-full justify-center rounded-md px-5 py-3 text-sm font-black transition ${
                    plan.featured
                      ? "bg-cta-500 text-navy-950 hover:bg-cta-400"
                      : "bg-navy-950 text-white hover:bg-navy-800"
                  }`}
                >
                  {ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="合作流程"
            title="從診斷到上線，每一步都讓名單更好追"
            description="先釐清目前最大的流失點，再建立頁面與追蹤方式，最後用每週數據調整文案與流程。"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-white/10 bg-white/[0.08] p-5"
              >
                <span className="text-sm font-black text-cta-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-base font-black leading-6">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="案例展示"
            title="先用範例場景看成交頁能怎麼服務不同店家"
            description="以下為 placeholder，之後可替換成真實截圖、數據與客戶見證。"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cases.map((caseItem) => (
              <article
                key={caseItem.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-cta-600">
                  {caseItem.metric}
                </p>
                <h3 className="mt-3 text-xl font-black text-navy-950">
                  {caseItem.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {caseItem.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="diagnosis-form"
        className="scroll-mt-20 bg-navy-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cta-600">
              Free Diagnosis
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-navy-950 sm:text-4xl">
              預約一次免費診斷，找出你的名單流失點
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              填寫店家目前狀況，我們會用「流量入口、預約頁、LINE 追蹤、成交狀態」四個面向協助你初步判斷。
            </p>
            <div className="mt-8 rounded-lg bg-navy-950 p-5 text-white">
              <p className="text-sm font-bold text-cta-400">診斷會看什麼？</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                <li>目前客戶從哪裡來，在哪一步最容易中斷</li>
                <li>預約表單與 LINE 是否能承接廣告流量</li>
                <li>名單是否能回報到成交與每週優化</li>
              </ul>
            </div>
          </div>

          <LeadForm lineUrl={lineOfficialUrl} />
        </div>
      </section>

      <section id="faq" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            eyebrow="FAQ"
            title="常見問題"
            description="先回答合作前最常被問到的幾個問題。"
          />

          <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-5">
                <summary className="cursor-pointer list-none text-base font-black text-navy-950">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-cta-600 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-xl font-black">Local Lead Funnel｜預約成交系統</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
              幫本地服務型店家建立一頁式成交網站、預約表單、LINE 導流與名單追蹤流程。
            </p>
          </div>
          <div>
            <p className="text-sm font-black text-cta-400">聯絡方式</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`mailto:${contactEmail}`}
                aria-label={`寄信給 ${contactEmail}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-3 text-sm text-white/80 transition hover:border-white/35 hover:text-white"
              >
                <SocialIcon name="mail" />
                Email
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="開啟 Facebook 粉專"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-3 text-sm text-white/80 transition hover:border-white/35 hover:text-white"
              >
                <SocialIcon name="facebook" />
                Facebook
              </a>
              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="開啟 Instagram"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/15 px-3 text-sm text-white/80 transition hover:border-white/35 hover:text-white"
                >
                  <SocialIcon name="instagram" />
                  Instagram
                </a>
              ) : (
                <span
                  aria-label="Instagram 品牌帳號尚待建立"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 px-3 text-sm text-white/45"
                >
                  <SocialIcon name="instagram" />
                  Instagram（待建立）
                </span>
              )}
            </div>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-3 block break-all text-sm text-white/60 transition hover:text-white"
            >
              {contactEmail}
            </a>
            <a
              href={lineOfficialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full justify-center rounded-md bg-cta-500 px-5 py-3 text-sm font-black text-navy-950 transition hover:bg-cta-400 sm:w-auto"
            >
              {ctaLabel}
            </a>
            <p className="mt-3 text-sm text-white/60">
              LINE ID: @{lineOfficialId}
            </p>
          </div>
          <div>
            <p className="text-sm font-black text-cta-400">服務項目</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>一頁式成交網站</li>
              <li>預約表單與 LINE 導流</li>
              <li>廣告文案與名單追蹤</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
