import Header from "@/components/Header.tsx"
import FirstView from "@/components/FirstView.tsx";
import Footer from "@/components/Footer.tsx";
import works from "@/data/works.json"

export default function App() {

  const skillClasses = 'ml-2 bg-gray-200 p-1 rounded-sm text-balance inline-block'

  return (
    <>
      <Header/>
      <main>

        <FirstView/>

        <div id='mission' className="mt-48 min-h-[1220px] h-screen">
          <div className='bg-[#316FA5] text-[#FFFFF4] pt-6 text-center md:h-screen mb-6 py-12'>
            <div className='h-1/3'>
              <div  className="text-6xl w-11/12 md:w-4/5 mx-auto border-b-2 border-solid py-4">Mission</div>
              <div className="my-6 px-4 md:px-48 py-12 text-2xl">
                エンジニアと若い人が気持ちよく働ける社会をつくり、<br/>
                <br/>
                住んでいて楽しい日本にする。
              </div>
            </div>

            <div className='h-1/3'>
              <div className="text-6xl w-11/12 md:w-4/5 mx-auto border-b-2 border-solid py-4 ">Vision</div>
              <div className="my-6 px-4 md:px-48 py-12 text-2xl">
                世界で一番、住みたい国へ。
              </div>
            </div>

            <div className='h-1/3'>
              <div className="text-6xl w-11/12 md:w-4/5 mx-auto border-b-2 border-solid py-4">Value</div>
              <ul>
                <li className="my-6 px-4 md:px-48 py-6 text-2xl">
                  開発していて楽しいプロダクトをつくる
                </li>
                <li className="my-6 px-4 md:px-48 py-6 text-2xl">
                  本当に必要なプロダクトをつくる。
                </li>
                <li className="my-6 px-4 md:px-48 py-6 text-2xl">
                  関わった人が誇りに思えるプロダクトをつくる。
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="content mt-48 min-h-screen h-full">
          <div>
            <div id='introduce' className="text-6xl w-11/12 md:w-4/5 mx-auto text-color2">Introduce</div>
            <div className="my-6 px-4 md:px-48 py-12">
              1994年東京生まれ。現在も東京でフリーランスとして活動中のWebエンジニア<br/>
              <br/>
              子供の頃からゲームが好きで大学生までゲーム三昧の生活を送っていたが、22歳の頃にPCゲームに熱中しもっとPCに詳しくなりたいという思いからエンジニアを志す。<br/>
              2017年10月、SESや受託開発を行うWEBシステム会社へ入社し、プログラミング未経験からWebエンジニアとしてのキャリアをスタート。<br/>
              現在は、会社員として受託開発会社のマネージャーをしながら、副業でPHPプログラマーやフロントエンドエンジニアとして活動中<br/>
            </div>
          </div>

          <div>
            <div id='histories' className="text-6xl w-11/12 md:w-4/5 mx-auto text-color2">Histories</div>
            <div className="my-6 px-4 md:px-48 py-12">
              <ol className="relative border-s border-gray-200 dark:border-gray-700 left-4">
                {
                  [
                    {
                      'summary': '株式会社sinka',
                      'description': 'WEBシステムプロダクトマネージャー',
                      'date': '2021年4月　〜　現在'
                    },
                    {'summary': 'フリーランス', 'description': 'システムエンジニア', 'date': '2020年6月　〜　2021年3月'},
                    {
                      'summary': '株式会社Bizwind',
                      'description': 'システムエンジニア / プログラマー',
                      'date': '2017年10月　〜　2020年5月'
                    },
                    {
                      'summary': 'セブン&アイフードシステムズ',
                      'description': '飲食店スタッフ（キッチン、接客）',
                      'date': '2009年10月　〜　2017年9月'
                    },
                  ].map((history) => {
                    return (
                      <>
                        <li className="mb-10 ms-6">
                          <span
                            className="absolute flex items-center justify-center w-6 h-6 bg-black rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 translate-y-0.5"
                          >
                          </span>
                          <h3
                            className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white"
                          >
                            {history.summary}
                          </h3>
                          <div
                            className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                          >
                            {history.date}
                          </div>
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            {history.description}
                          </p>
                        </li>
                      </>
                    )
                  })
                }
              </ol>
            </div>
          </div>

          <div>
            <div id='skills' className="text-6xl w-11/12 md:w-4/5 mx-auto text-color2">Skills</div>
            <div className="my-6 px-4 md:px-48 py-12 hyphens-manual break-normal">
              <dl className='mb-2 w-full overflow-ellipsis'>
                <dt>Business Skills:</dt>
                <dd>
                  {
                    [
                      'サーバーサイドエンジニア',
                      'フロントエンドエンジニア',
                      'プロダクトマネージャー',
                      'セールスエンジニア',
                      'エンジニアチームリーダー',
                      'エンジニア採用',
                    ].map((skill) => {
                      return (
                        <>
                          <li className={skillClasses}>{skill}</li>
                        </>
                      )
                    })
                  }
                </dd>
              </dl>

              <dl className='mb-2 w-full overflow-ellipsis'>
                <dt>Process Skills:</dt>
                <dd>
                  {
                    [
                      '要件定義',
                      'ソースコードレビュー',
                      'API設計',
                      'テーブル設計',
                    ].map((skill) => {
                      return (
                        <>
                          <li className={skillClasses}>{skill}</li>
                        </>
                      )
                    })
                  }
                </dd>
              </dl>

              <dl className='mt-6 mb-2 w-full overflow-visible break-words'>
                <dt>Main Skills:</dt>
                <dd>
                  {
                    [
                      'Laravel',
                      'php',
                      'PHPUnit',
                      'MySQL',
                      'TypeScript',
                      'React',
                      'Vite',
                      'Github Actions',
                      'EC2',
                      'Fargate',
                      'Light Sail',
                    ].map((skill) => {
                      return (
                        <>
                          <li className={skillClasses}>{skill}</li>
                        </>
                      )
                    })
                  }
                </dd>
              </dl>

              <dl className='mt-6 w-full overflow-ellipsis'>
                <dt>Sub Skills:</dt>
                <dd>
                  {
                    [
                      'ECCube',
                      'WordPress',
                      'CakePHP',
                      'Java',
                      'Spring Boot',
                      'Ruby on Rails',
                      'Vue',
                      'jQuery',
                      'cloud formation'
                    ].map((skill) => {
                      return (
                        <>
                          <li className={skillClasses}>{skill}</li>
                        </>
                      )
                    })
                  }
                </dd>
              </dl>
            </div>
          </div>

          <div>
            <div id='works' className="text-6xl w-11/12 md:w-4/5 mx-auto text-color2">Works</div>
            <div className="my-6 px-4 md:px-48 py-12">
              <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 xl:grid-cols-2 gap-8 overflow-x-hidden">
                {
                  works.map((work) => {
                    return (
                      <>
                        <div
                          className="p-6 border-2 border-[#316FA5] rounded-lg w-full min-w-72 h-[520px] md:h-[500px] mx-auto relative"
                        >
                          <h5
                            className="mb-2 text-xl font-bold tracking-tight border-[#316FA5] border-b"
                          >
                            {work.summary}
                          </h5>
                          <p
                            className="mb-3 text-sm whitespace-pre-wrap overflow-y-scroll h-[23rem] border-[#316FA5] border-b"
                          >
                            {work.description}
                          </p>
                          <div className='absolute text-right'>
                            {
                              work.skills.map((skill) => {
                                return (
                                  <>
                                    <li className={skillClasses}>{skill}</li>
                                  </>
                                )
                              })
                            }
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
              <div className='mt-2 text-right underline underline-offset-4 decoration-2 decoration-double decoration-[#316FA5]'>
                その他にもいくつものプロジェクトへの参画実績あり
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
