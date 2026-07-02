// i18n.js - English/Japanese language toggle.
// English lives in the HTML (source of truth). This file holds the Japanese
// translations, keyed by data-i18n / data-i18n-html attributes, and swaps text
// in place with no page reload. Edit the JA / JA_HTML objects below to refine wording.

(function () {
  'use strict';

  // ---- Japanese: plain text (replaces element.textContent) ----
  const JA = {
    // nav + footer (every page)
    'nav.about': '私について',
    'nav.projects': 'プロジェクト',
    'nav.contact': 'お問い合わせ',
    'footer.home': 'ホーム',

    // landing
    'hero.lead': '実際に使われるWebアプリ、モバイルアプリ、自動化ツールを作っています。コンフィギュレーター、ダッシュボード、オフライン対応の現場ツールなど。',
    'btn.viewprojects': 'プロジェクトを見る',
    'btn.sayhi': '連絡する',
    'cta.projects.h': 'プロジェクト →',
    'cta.projects.p': '仕事での開発から個人プロジェクトまで。コンフィギュレーター、自動化、ゲームなど。',
    'cta.about.h': '私について →',
    'cta.about.p': 'コンピュータサイエンスと日本語、チームワーク、問題解決、そして成長。',
    'cta.contact.h': 'お問い合わせ →',
    'cta.contact.p': 'お仕事、コラボ、気軽な挨拶でも。',

    // about
    'about.h1': '私について',
    'about.subtitle': 'コードの外で夢中になっていること。',
    'about.facts.title': '基本情報',
    'about.hobbies.title': '趣味',
    'about.hobbies.sub': '学校や仕事、コーディング以外で楽しんでいること。',
    'hobby.jp.t': '日本語学習',
    'hobby.jp.d': '毎日の読解と上級文法の練習。2025年冬のJLPT N2に申し込みました。',
    'hobby.climb.t': 'ロッククライミング',
    'hobby.climb.d': '主にボルダリング。壁の上での問題解決は頭をリフレッシュさせてくれます。コミュニティの雰囲気や新しい出会いも大好きです。',
    'hobby.break.t': 'ブレイクダンス',
    'hobby.break.d': 'アマチュアで、2018年以来バトルはしていません。とても情熱を注いでいる創造的な表現の場です。',
    'hobby.bball.t': 'バスケットボール',
    'hobby.bball.d': 'シュート練習は頭を整理して考えるのに役立ちます。5対5の試合はいつでも歓迎です。',
    'hobby.games.t': 'ビデオゲーム',
    'hobby.games.d': '対戦型シューターが得意分野です。主に遠く離れた友達と過ごすための手段です。',
    'hobby.travel.t': '旅行',
    'hobby.travel.d': '新しい場所を巡ったり、大きな山に登ったり。',

    // contact
    'contact.h1': 'お問い合わせ',
    'contact.lead': 'お仕事、コラボ、気軽な挨拶でも。直接ご連絡ください:',
    'contact.email.label': 'メール',

    // projects: headers + notes
    'projects.h1': 'プロジェクト',
    'projects.lead': '仕事での開発と個人プロジェクト。下で切り替えられます。',
    'panel.pro.note': 'Uptimizeで手がけた仕事です。クライアント名や機密情報は伏せ、実際に作ったものと解決した課題に焦点を当てています。',
    'panel.personal.note': '楽しみと学びのために作っているもの。ゲーム、ツール、情熱を注いだプロジェクトなど。',

    // badges + buttons
    'badge.professional': '仕事',
    'badge.personal': '個人',
    'btn.readmore': 'もっと読む',
    'btn.showless': '閉じる',
    'btn.inprogress': '進行中',

    // project titles + summaries
    'proj.cpq.t': '産業機器コンフィギュレーター (CPQ)',
    'proj.cpq.s': '設定可能な産業用機器向けのWebベースの見積もり(CPQ)ツール。エンジニアが製品タイプを選び、電気仕様と寸法を入力すると、部品表、原価の合計、3Dプレビュー、ダウンロード可能な見積書が、バックエンドなしですべてブラウザ内で得られます。',
    'proj.invoice.t': '買掛金請求書自動化プラットフォーム',
    'proj.invoice.s': '仕入先の請求書を取り込み、ERPから対応する発注書を取得し、多段階のマッチングエンジンを実行して不一致を検出し、経理担当者がダッシュボードから直接確認・計上できる買掛金プラットフォーム。',
    'proj.mobile.t': '現場調査モバイルアプリ',
    'proj.mobile.s': '現場の技術者が機器を調査するためのiOS・Android対応のクロスプラットフォームアプリ。機械を撮影し、各部品に番号付きのピンを置き、ピンごとにガイド付きの仕様フォームを記入し、オフラインで保存して、電波が届いたら同期します。',
    'proj.ocr.t': 'AI調査票デジタル化',
    'proj.ocr.s': '手書きの現場調査票を、ビジョン対応のLLMで構造化された検索可能なデータに変換し、その結果をERPの部品カタログと照合してマッチ候補を提示するフルスタックWebアプリ。上記モバイルアプリの同期バックエンドも兼ねています。',
    'proj.blackjack.t': 'マルチプレイヤー・ブラックジャック',
    'proj.blackjack.s': 'ほぼゼロから作った対戦型ブラックジャック。2人のリアルタイム対戦、独自のシュー/シャッフルと配当ルール、そして永続的なハイスコアを備えています。',
    'proj.bboy.t': 'ブレイクダンス大会Webアプリ',
    'proj.bboy.s': 'イベント主催者向けのツール。バトルの運営をスムーズにしてブレイクダンスのコミュニティに恩返しするために作った情熱的なプロジェクトです。',
    'proj.farm.t': 'ファーミングシミュレーター',
    'proj.farm.s': '作物、コミュニティ、そして農場を形づくる選択がテーマの、Reactで作った農業ゲーム。'
  };

  // ---- Japanese: rich HTML (replaces element.innerHTML) ----
  const JA_HTML = {
    'hero.h1': '<span class="grad">イアン</span>ってどんな人？',
    'tab.professional': '仕事 <span class="tab-count">4</span>',
    'tab.personal': '個人 <span class="tab-count">3</span>',

    'fact.hometown': '<strong>出身:</strong> イリノイ州ロンバード',
    'fact.movement': '<strong>体を動かすこと:</strong> ロッククライミング、ブレイクダンス、バスケなど',
    'fact.games': '<strong>ゲーム:</strong> Deadlock',
    'fact.joys': '<strong>その他の楽しみ:</strong> 旅行、美味しい食べ物、新しい場所の探索',

    'details.cpq':
      '<p>難しかったのは、価格計算と設計ロジックがすべて巨大で実績のあるスプレッドシートに詰まっていたことです。その計算式をそのままJavaScriptの計算エンジンに移植し、エンジニアが期待する通りの精度と丸め方を保ちながら、入力に応じてリアルタイムに再計算されるようにしました。</p>' +
      '<p class="detail-sub">主な機能</p>' +
      '<ul>' +
      '<li>複数通貨に対応し、最大数千個までのロットサイズを設定できるリアルタイムなBOM・原価計算エンジン。</li>' +
      '<li>設定パネルのすぐ横に表示されるインタラクティブな3D製品ビジュアライゼーション(Three.js)。</li>' +
      '<li>各作業工程の実際の順序を、所要時間とコストの見積もりとともに表示する製造工程ルーティング画面。</li>' +
      '<li>図面・BOM表・原価内訳を含む完全な仕様書を、サーバー通信なしで生成するクライアントサイドPDF生成(jsPDF)。</li>' +
      '<li>DockerコンテナのNginx上に静的バンドルとして配信し、クラウドデプロイ用スクリプトも用意。</li>' +
      '</ul>' +
      '<p class="detail-sub">技術スタック</p>' +
      '<p class="detail-stack">React + Vite のSPA、3DはThree.js、ドキュメント生成はjsPDF、配信はDocker + Nginx。</p>',

    'details.invoice':
      '<p>実際の請求書はとても雑然としています。面白かったのは、経理担当者が読むのと同じようにシステムに請求書を読ませ、計上する前に1円単位で発注書と全明細を突き合わせることでした。</p>' +
      '<p class="detail-sub">マッチングエンジン</p>' +
      '<ul>' +
      '<li>ローコードの取り込みパイプライン(Node-RED)が、マッチング前に請求書を正規化し関連する発注書を取得。</li>' +
      '<li>3段階の明細前処理: まとめられた明細を分割し、計算が合えば仕入先の品番をERPの正規の品目IDに置き換え、追加料金やセットアップ費を適切な製品明細に折り込む。</li>' +
      '<li>単位を考慮した比較。個数以外の単位(長さ・重量)では数量と単価のチェックを省き、実際の請求方法に合わせて合計金額で判定。</li>' +
      '<li>マッチ状況に応じた複数の計上経路(完全一致、明細付きの差異、部分一致、運賃・サービスの金額計上)を、ERPが1円単位の正確な合計を要求する前提で設計。</li>' +
      '<li>仕入先ごとに許容誤差を設定でき、想定内の差異を誤検知しないように。</li>' +
      '</ul>' +
      '<p class="detail-sub">ダッシュボード</p>' +
      '<ul>' +
      '<li>KPIカード、トレンドのスパークライン、クリックできる滞留期間の区分、仕入先別の内訳、支払い遅延の追跡。前週比・前月比・前年比の比較やCSV出力にも対応。</li>' +
      '</ul>' +
      '<p class="detail-sub">技術スタック</p>' +
      '<p class="detail-stack">Node.js + Express のREST API、MongoDB、Reactダッシュボード、Azure ADによるMicrosoft SSO、3コンテナ構成のDockerデプロイ(API、フロントエンド/Nginx、データベース)。</p>',

    'details.mobile':
      '<p>技術者は電波の届かない場所で作業するため、アプリは通信ゼロでも問題なく動き、後からきれいに同期できる必要がありました。しかも2人が同じ機械を調査した場合でもです。この同期と競合の処理こそが本当の技術的な課題でした。</p>' +
      '<p class="detail-sub">オフライン対応と同期</p>' +
      '<ul>' +
      '<li>オフラインファースト設計。端末内のSQLiteを唯一の信頼できる情報源とし、ライブ接続に依存しない。</li>' +
      '<li>ライトスルー方式のアウトボックスが、クライアント生成のUUIDをキーにすべての変更をキューに入れるため、同期は冪等で、欠落も二重適用も起こらない。</li>' +
      '<li>フィールド単位でマージする複数端末の競合解決。2台が異なる値を入れたフィールドだけ人が選び、それ以外は自動マージして再送信し、勝った値を確定させる。</li>' +
      '<li>追記専用のスキーマ移行(15以上のマイグレーション)で、端末内DBがアプリのバージョン間でもきれいに更新される。</li>' +
      '</ul>' +
      '<p class="detail-sub">記録ツール</p>' +
      '<ul>' +
      '<li>写真をピンチズームでき、各ピンを個別にリサイズできる独自の注釈画面。</li>' +
      '<li>技術者がタップで部品を配置し、実寸でドラッグできる2D部品図。すべてJSONにシリアライズされ、端から端まで同期される。</li>' +
      '<li>通信・認証・形状定義を差し替え可能なシームとして実装し、呼び出し側を書き換えずに本番実装を組み込める。</li>' +
      '</ul>' +
      '<p class="detail-sub">技術スタック</p>' +
      '<p class="detail-stack">React Native + Expo、TypeScript、端末内SQLite、EASによるクラウドビルド。</p>',

    'details.ocr':
      '<p>入力は紙に書かれた手書きで、書き方は人によってまるで違います。目標は、そこから整理された構造化データを取り出し、実際のカタログ部品と突き合わせ、信頼する前に必ず人が確認できるようにすることでした。</p>' +
      '<p class="detail-sub">OCRとマッチング</p>' +
      '<ul>' +
      '<li>2プロバイダー構成のOCRエンジン。共通のプロンプトと同一のJSONスキーマの裏で2つのビジョンモデルを動かし、比較用エンドポイントで両者を並列実行して精度の比較検証とコスト管理を行う。</li>' +
      '<li>重み付けスコアのマッチングエンジンが、抽出した仕様に対してカタログ部品を点数方式(品番の完全一致、ミリ単位の許容差を持つ寸法、ワット数、種類、電圧、端子)でランク付けし、最有力候補を上位に表示。</li>' +
      '<li>サーバーサイドのPDF分割が、OCR前に複数ページのアップロードを1ページずつに分け、バッチをモデルの上限内に収める。</li>' +
      '<li>「#Nと同じ」といった調査票の省略表記を、抽出時に相互参照を解決して処理。</li>' +
      '<li>初回起動時にスプレッドシートからカタログを自動インポートするため、手動設定は不要。</li>' +
      '</ul>' +
      '<p class="detail-sub">技術スタック</p>' +
      '<p class="detail-stack">Node.js + Express のサーバー、ReactのレビューUI、1つのインターフェースの裏で動く2つのビジョンLLMプロバイダー、MongoDB、Docker + Nginx。モバイルアプリを支えるREST同期エンドポイントも提供。</p>',

    'details.blackjack':
      '<p>ゲームエンジン(デッキ、ディーラーAI、手札の評価)、WebSocketによるリアルタイム通信、シンプルな認証とハイスコア保存を実装。ブラックジャックのルールの正確さと、エッジケースに対する決定論的なテストを重視しました。</p>',

    'details.bboy':
      '<p>リレーショナルスキーマ(クルー、バトル、ラウンド、ジャッジの採点)を設計し、上位クルーのシード、グループの均衡化、同点の解消、勝ち上がりの計算を行うアルゴリズムを実装。クエリは主催者向けのシンプルなダッシュボード用に最適化しています。</p>',

    'details.farm':
      '<p>UI操作のためのReactコンポーネントを作成し、動的な天候システムを実装。天候が作物に与える影響のモデル化と、イベントの発生タイミングの調整に注力し、バランスが取れて没入感のあるゲーム体験を目指しました。</p>'
  };

  // ---- typewriter words per language (read by typewriter.js) ----
  const WORDS = {
    en: [
      'Front End Developer', 'Web Developer', 'Breaker', 'Hooper', 'Rock Climber',
      'Problem Solver', 'Role Player', 'Washed PC Gamer', 'Japanese Speaker', 'Hard Worker'
    ],
    ja: [
      'フロントエンド開発者', 'Web開発者', 'ブレイクダンサー', 'バスケ好き', 'ロッククライマー',
      '問題解決が得意', 'チームプレイヤー', '引退気味のPCゲーマー', '日本語話者', '努力家'
    ]
  };

  // English-label fallbacks for JS-driven button text.
  const EN_LABELS = { 'btn.readmore': 'Read more', 'btn.showless': 'Show less' };

  // Caches of the original English content so we can switch back without it living in the dict.
  const enText = new WeakMap();
  const enHtml = new WeakMap();

  const I18N = {
    lang: 'en',
    t: function (key) {
      if (this.lang === 'ja' && JA[key] != null) return JA[key];
      return EN_LABELS[key] != null ? EN_LABELS[key] : key;
    },
    words: WORDS,
    apply: applyLang,
    toggle: function () { applyLang(this.lang === 'ja' ? 'en' : 'ja'); }
  };
  window.I18N = I18N;

  function applyLang(lang) {
    I18N.lang = lang;
    document.documentElement.lang = lang;

    // Plain-text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!enText.has(el)) enText.set(el, el.textContent);

      // Read-more buttons carry dynamic state; respect open/closed.
      if (el.hasAttribute('data-toggle')) {
        const open = el.classList.contains('open');
        el.textContent = lang === 'ja'
          ? (open ? JA['btn.showless'] : JA['btn.readmore'])
          : (open ? 'Show less' : 'Read more');
        return;
      }

      el.textContent = (lang === 'ja' && JA[key] != null) ? JA[key] : enText.get(el);
    });

    // Rich HTML nodes
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!enHtml.has(el)) enHtml.set(el, el.innerHTML);
      el.innerHTML = (lang === 'ja' && JA_HTML[key] != null) ? JA_HTML[key] : enHtml.get(el);
    });

    updateToggleLabels();
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function updateToggleLabels() {
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.textContent = I18N.lang === 'ja' ? 'EN' : '日本語';
      btn.setAttribute('aria-label',
        I18N.lang === 'ja' ? 'Switch to English' : '日本語に切り替え');
    });
  }

  function init() {
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.addEventListener('click', () => I18N.toggle());
    });
    let saved = 'en';
    try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { /* ignore */ }
    applyLang(saved === 'ja' ? 'ja' : 'en');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
