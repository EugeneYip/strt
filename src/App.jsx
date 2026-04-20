import React, { useMemo, useState } from "react";

const theme = {
  bg: "#FCFAF2",
  card: "#F7F3E8",
  ink: "#1E2732",
  subInk: "#485665",
  teal: "#2E5C6E",
  plum: "#622954",
  gold: "#B28C4A",
  olive: "#748067",
  line: "#D9D0BE",
  soft: "#EFE7D7",
  danger: "#8A3B2F",
  ok: "#3E6B52",
};

const SOURCE_MARKDOWN = `# STRT 6200 Final Exam
### Professor Michael J. Enright｜Strategic Decision-Making

---

## 第 0 部｜Enright 實際打分的六個動作

教授在 Last Day Slide 23 明示評分 rubric 只有四句：*"Read the questions. Use the right tools for the job. Don't include extraneous material. Use your time wisely."* 翻譯成 exam mechanics：

| 動作 | 檢驗標準 |
|---|---|
| 1. 迅速辨認 case 在哪幾個 levels 上 binding | 不寫全五層，只寫 binding 者 |
| 2. 調出對的 analytical tool | 不是背哪個 tool 存在，而是選對 |
| 3. 拿 case 具體 evidence 推出 conclusion | 引用 reading 原文，不是記憶預載 |
| 4. 標註 confidence level | BARD 或 POE 語氣校準 |
| 5. 把 conclusion 連到 actionable strategy | "What should they do?" |
| 6. 預期 implementation 會撞上人性障礙 | "How will this actually work?" |

所有答題動作都要能對應至少一件。

---

## 第 1 部｜Enright 分析脊椎

### 1.1 完整分析鏈 (Last Day Slide 15, Tier 1)

Search → Sort → Analyze → Hypothesize → Test → Conclude (BARD or POE) → Formulate Strategy → Implement

### 1.2 BARD vs POE 語氣校準 (Last Day 提及，法律式解讀為合理推論)

| 語氣標籤 | 使用時機 | 句型範例 |
|---|---|---|
| **BARD 語氣** (beyond reasonable doubt) | 強 evidence，幾無合理替代解釋 | "The evidence clearly indicates..."、"Given [specific facts], the conclusion is..." |
| **POE 語氣** (preponderance of evidence) | 證據相對傾向但有限 | "On balance, the reading suggests..."、"The more likely outcome is..." |

**紀律:**
- 每題至少一個明確 conclusion
- 拒絕下結論 = 零分
- 強 evidence 卻用 hedging = 也會被扣
- 無 evidence 卻用 BARD = 過度自信扣分
- 教授要 calibrated confidence
- **不在答案中展開 BARD/POE 法律定義** (ChatGPT 與我方共識) — 只作為 confidence marker 使用

### 1.3 三層 Zoom 分析法 (Last Day Slide 13, Tier 1)

| 距離 | 焦點 |
|---|---|
| **6 inches away** | 細節組織進 framework (數字、quotes、事件) |
| **3 meters away** | 每塊分析的 major conclusion (puzzle pieces) |
| **10 meters away** | 整個 puzzle：How is value created? How are competitors exceeded? How do we get paid? |

### 1.4 The 4 Commandments (Last Day Slide 16, 大寫強調, Tier 1)

1. **UNDERSTAND THE INDUSTRY AND WHAT IT DOES!!!**
2. **DRAW THE PICTURES!!**
3. **TURN ONE COMPLICATED THING INTO MANY SIMPLE THINGS!!**
4. **Build the puzzle, then solve the puzzle**

Execution mantra: *"Show up, ask the right questions, don't stop until they are answered, put the pieces together, remember people are people."*

### 1.5 Strategy Philosophy (Last Day Slide 3, Tier 1)

Doing strategy well is often：
- ¼ Showing up
- ¼ Knowing what questions to ask
- ¼ Not stopping until the questions are completely answered
- ¼ Knowing how to make strategy work in the organization

三個 ¼ 不關於「知道甚麼」，而是「如何動起來」。

---

## 第 2 部｜Underlying Economics

### 2.1 七維度掃描 (Last Day Slide 18, Tier 1)

| 維度 | 核心問題 | 結構含意 |
|---|---|---|
| **Scale Economies** | Output 增加時 average cost 下降？ | 大 scale → few players → oligopoly / monopoly |
| **Scope Economies** | 做多個 related business 降 total cost？ | 整合型公司優勢 → 多角化合理 |
| **Learning Economies** | 累積生產量增加時成本下降？ | 先進者持久 cost advantage → entry deterrence |
| **Network Economies** | User base 增加時 value 提升？ | Winner-take-all、self-reinforcing |
| **Nexus Economies** | Must-pass 關鍵節點？ | 控制者準壟斷、被迫穿過者 commodity |
| **Standards** | Technical / interface standards 誰控制？ | 標準持有者 quasi-monopolist |
| **Fixed vs Sunk vs Variable Cost** | 三種成本各占多少？ | 決定 competitive 行為與 exit barriers |

### 2.2 Fixed / Sunk / Variable 三種成本 (Tier 1)

| 成本類型 | 定義 | 決策含意 |
|---|---|---|
| **Variable Cost** | 隨 output 變動 | Price > VC 時值得多賣 |
| **Fixed Cost** | 短期固定，長期可避免 | 影響 scale economies 與 break-even |
| **Sunk Cost** | 已投入且**無法回收** | 不影響未來決策，但造成 **exit barrier** |

**三種結構含意:**
- High fixed + low variable → 削價誘因 → fierce price competition (HK mobile telecom, Ch.4 example)
- High sunk → 退不出去 → subsidized / hypercompetition (airlines)
- Low fixed + high variable → perfect competition tendency (餐飲、零售小店)

### 2.3 Industry Economics 六問 (Tier 1)

分析任何 business-facing case 前先問：

1. 這個 industry 實際在做甚麼 (form + function + direct competition)？
2. Cost structure — capital / labor / knowledge / marketing intensive？Fixed / sunk / variable 比例？
3. Scale / scope / learning 在哪裡成立？
4. Network / nexus / standards / installed-base effects 是否存在？
5. 這套 economics 推向哪一種 competition type？
6. Value 在哪裡被 capture，由誰 capture？

### 2.4 核心因果鏈 (Tier 1)

\`\`\`
Underlying economics 
  → Industry structure (concentration, barriers)
    → Type of competition (5 types)
      → Competitive variables (price vs non-price)
        → Ferocity of competition (9 drivers)
          → Industry profit potential
            → Firm performance (modified by SPARK + bargaining)
\`\`\`

### 2.5 Profitability Ranking 教學意義 (Implementation lecture, Tier 1 ranking; Tier 2 詳細機制)

教授 ranking：**1 Water meters → 2 Pharmaceuticals → 3 Automobiles → 4 Semiconductors → 5 PCs → 6 Airlines**

**水表最高 (Tier 2 機制):** Buyer configuration split (specification ≠ procurement ≠ payment)；成本占建築總成本 trivial；municipality 偏好 reliable 版本避免 under-measurement；結果 high WTP + low price sensitivity + concentrated supply。

**航空最低 (Tier 1 ranking):** Low differentiation → perfect competition tendency；high fixed + high sunk (飛機) → exit barriers；customers price sensitive；commodity + 無法退出 → 長期 breakeven。

**教學核心:** 利潤不來自 glamour 或 technological sophistication，來自**結構**。

### 2.6 高分作答模板

> "The industry's profit potential is driven by [specific underlying economics]. Because [scale / fixed cost / network / etc.], the industry structure tends toward [type of competition]. Competition is primarily on [price or non-price variable], making ferocity [high/moderate/low]. This translates to [high/low] industry profitability. However, specific firms' actual profits depend on their ability to [SPARK advantages / cluster positioning] relative to competitors."

---

## 第 3 部｜Industry Level 深入

### 3.1 Industry Definition (Ch.4 verbatim, Tier 1)

> *"An industry consists of products or services that have similar form and function that are in direct competition with each other, and the firms that supply them."*

- 三要素：Form、Function、Direct competition
- **策略性定義**，非 SIC / NAICS 統計分類
- 邊界隨時間 merge 或 fragment
- 是 profit analysis 的地基

### 3.2 Five Types of Competition (Lecture Notes Ch.4 slide 13, Tier 1)

從最差到最好 profitability：

Subsidized Competition ← Perfect Competition ← Hypercompetition ← Oligopoly → Monopoly

| 類型 | 核心特徵 |
|---|---|
| **Monopoly** | 單一 firm，無競爭，regulation 未限制時最賺 |
| **Oligopoly** | 少數 firms，recognition of interdependence |
| **Hypercompetition** (D'Aveni) | 多 firms + 來自 related industries 的潛在新進者，差異化只能短期 |
| **Perfect Competition** | 多 firms 無差異化，只 price 競爭 |
| **Subsidized Competition** | 虧損 firms 被維持存活 |

### 3.3 Table 4.3 重組為診斷工具 (Tier 1)

| 若該條件強 → | 產業趨向 | 利潤含意 |
|---|---|---|
| Barriers to entry 高 | Monopoly / tight oligopoly | 高 |
| 產品 differentiation 大 | Oligopoly (distinguishable) | 中到高 |
| 品牌存在 | Oligopoly (sustained advantage) | 高 |
| Scale / learning / scope 經濟大 | Oligopoly / monopoly | 高 |
| 與 customers / channels / suppliers preferential | Oligopoly (sustained) | 高 |
| Information asymmetry 大 | Oligopoly (sustained) | 高 |
| 運輸成本高 | 地理性 oligopoly / 地方 monopoly | 高 |
| Collusion 可能 | Oligopoly → cartel-like | 高 |
| Exit barriers 高 + 需求萎縮 | Subsidized / 持續 ferocious | 極低 |

### 3.4 Competition 三維分析 (Tier 1)

**維度 1：Type** (上述五類)

**維度 2：Competitive Variables** (Last Day Slide 18)
- Price
- Quality / Performance
- Brand
- Service
- Speed / Time-to-market
- Access (distribution, channels)
- Ecosystem / Platform

**關鍵洞察:** 同屬 oligopoly，在哪個 variable 競爭決定 profit。HK property (location + features) 高獲利 vs. HK mobile telecom (price due to overcapacity) 低獲利。

**維度 3：Ferocity 九個驅動因素** (Lecture Notes Ch.4 slide 21, Tier 1)

1. Industry concentration 低
2. Collusion 可能性低
3. Industry growth 低或負
4. Product homogeneity 高
5. Differentiation 低
6. Capacity utilization 低
7. Corporate stakes 高
8. Exit barriers 高
9. Entry barriers 低

這九個不是背誦 list，是診斷工具 — 拿到 case 問自己：哪幾格勾起來？

### 3.5 Industry Level Drivers 完整 Template (Tier 1)

1. **Industry Characteristics** — Relevant segments, activities, resources, knowledge; technologies and processes; geographic scope
2. **Competition** — Ferocity, nature, identity, strategies, capabilities of competitors
3. **Cooperation** — Scope for cooperation; alliances; joint development; lobbying
4. **Strategic Groupings** — Groups of firms with similar strategies; intra-group vs. between-group
5. **Lead Firms** — 六類型 (見 3.6)
6. **Micro Policies & Institutions**

### 3.6 Lead Firm 六類型 (Ch.4 原文, Tier 1)

| 類型 | 行為 | Enright 案例 |
|---|---|---|
| **Standard Setter** | 設定產業標準 | IBM System 360、IBM PC |
| **Statesman** | 產業長者 | HSBC (HK banking) |
| **Enforcer** | 執行規則 | Saudi Aramco (OPEC) |
| **Predator** | 積極削弱對手 | Microsoft (browser wars) |
| **Frame-breaker** | 重新定義產業 | Dell、Southwest Airlines |
| **Outlier** | 自成一格 | Ben & Jerry's、Body Shop |

**高分洞察:** Nokia 早期是 standard setter (Nordic → Europe → World)；Apple 進入後變成 frame-breaker 重新定義 "standard" 為 software platform，Nokia 的 standard 優勢瞬間失效 — 這是 Nokia 衰退的 industry-level 深層解釋。

### 3.7 Competitor Envelope Analysis™ (Ch.4 Table 4.5, Lecture Notes Ch.4 Slide 27, Tier 1)

Enright 註冊商標工具。不是分析當前 competitors，是分析他們變 smart 後多難纏。

**七個核心問題:**
1. What if competitors were to optimize their activities?
2. What if competitors were to fully leverage their resources and knowledge?
3. What if competitors overcame strategic shortcomings?
4. What if competitors add to their resources or knowledge?
5. What if competitors were taken over by savvy, deep-pocketed firms?
6. What would we do if we managed the competitors?
7. How tough might competitors be in the future if they are smart?

**兩個額外動作 (Ch.4 verbatim):**
- 識別 **related industries 的潛在新進者** (Sega / Sony / Nintendo 沒料到 Microsoft X-box)
- 識別 **unmet demand segments** (Dell、IKEA、Southwest Airlines 都是抓到 unmet need 而贏)

**考試高分位置:** 任何題目問 "future competitive position" 或 "sustainability of advantage"，都應優先 deploy CEA。

### 3.8 Coopetition (Ch.4 verbatim, Tier 1)

Ray Noorda (Novell 創辦人) coined；Brandenburger + Nalebuff 的書發揚。**同一組 players 可能在 activity A 合作，activity B 競爭。**

案例 (Ch.4 原文):
- Pratt & Whitney / Rolls-Royce：low thrust 合作、medium/high thrust 對抗
- Pratt + Rolls 聯盟 vs. GE + SAFRAN 聯盟
- Rolls / SAFRAN 在 Concorde 合作
- Pratt / GE 在軍用機競爭、在 NASA 合作

**考試應用:** 看到 "both competitor and partner" 情境 (RTZ + Chinalco)，要能**在 activity level 拆解**，不只 firm level 判斷。

---

## 第 4 部｜Firm Level 完整框架

### [補丁 1] 4.0 Performance 是 Relative Concept (Ch.2, Tier 1)

**任何 performance 聲稱都必須指明比較對象。Performance 永遠是相對概念，比較對象有四類：**

1. **Competitors** — 產業內對手
2. **Benchmarks** — 同類型企業或國際最佳實踐
3. **History** — 公司自己過去的表現
4. **Expectations** — 投資人、分析師、目標預期

考場上若題目問 "firm performs well/poorly"，答題**第一句必須指明**：relative to competitors? benchmarks? own history? expectations? 答「不好」而沒指明 comparator = 失分。

### 4.1 SPARK (Ch.3 Figure 3.6, Tier 1)

**Strategy = Scope + Positioning + Activities + Resources + Knowledge**

| 元素 | 回答甚麼問題 |
|---|---|
| **Scope** | Where we compete |
| **Positioning** | How we compete (marketplace + cost + vs competitors) |
| **Activities** | What we do |
| **Resources** | What we use |
| **Knowledge** | What we know |

### 4.2 Scope 三層次與六類型 (Ch.3, Tier 1)

**三層次:**
1. Corporate or industry scope (幾個產業)
2. Competitive or within-industry scope (產業內哪些 segments)
3. Geographic scope (哪些地理市場)

**六類型 (Figure 3.1):**
- Local Specialist (Southwest Airlines)
- Local Diversifier (CITIC)
- Global Specialist (McDonalds, Lafarge)
- Global Diversifier (GE, Mitsui, Siemens)
- Within industry: Local/Global Broadline vs. Local/Global Focus

**Within-Industry Scope 經典對比 (Ch.3, Tier 1):**
- Swatch Group: Flik Flak (US$30) → Breguet (US$250,000) — broadline
- Rolex: high/luxury/prestige only — focus
- Breitling: high segment only — focus
- Seiko (Japan): "mostly present in medium priced segments, though has been pushing upmarket in recent years" — positioning 遷移動態

### 4.3 Firm Level 完整六類 Drivers (Ch.3 + Last Day Slide 19, Tier 1)

不能只停在 SPARK：

1. **SPARK** (上述 5 元素)
2. **Leadership** — Strategic direction, motivation, external face, setting standards/ethics, mentorship
3. **Execution** — Knowing what to do, overcoming inertia, getting things done
4. **Organization & Management** — Division of labor, structures, systems, HR, capabilities
5. **Governance** — Governance standards, compliance costs, impact on decision-making
6. **Firm-Specific Policies & Institutions** — Government support, subsidies, firm-specific training bodies

### 4.4 三個 Dysfunction Formulas (Ch.1 verbatim, Tier 1)

Ch.1 原文:
> *"Analysis and leadership without action yields paralysis. Action and leadership without analysis is random or misdirected. Analysis and action without leadership often becomes scattered and confused."*

| 缺少的支柱 | 結果 |
|---|---|
| Analysis + Leadership − **Action** | **Paralysis** |
| Action + Leadership − **Analysis** | **Random / Misdirected** |
| Analysis + Action − **Leadership** | **Scattered and Confused** |

### 4.5 Leadership 的雙面刃 (Ch.3, Tier 1)

正向案例：Bill Gates (Microsoft)、Sam Walton (Walmart)、Jack Welch (GE)、Eisner (Disney 重建)、Bezos (Amazon)、Jorma Ollila (Nokia 轉型)、Morita (Sony)、Kobayashi (NEC C&C vision)、Li Ka-shing、Rupert Murdoch、Narayana Murthy (Infosys)。

**警示案例 (Ch.3 verbatim):**
- Kenneth Lay / Jeffrey Skilling (Enron) — 創新但造假
- **Kobayashi 的 vision "left NEC vulnerable to competition from more focused competitors"**
- Elizabeth Holmes (Theranos) — 詐欺

**高分 NEC 答題框架 (非 Prahalad-Hamel):**
- 不用 "core competence" framing — Ch.2 明確警告此框架的局限
- 用 Enright 自己的 firm-level framework
- NEC 展示 Leadership 的**動態張力** — Kobayashi 的 vision 既建立優勢又埋下 vulnerability

### 4.6 VRIO 的 ARK 延伸 (Last Day Slide 19, Tier 1)

VRIO (Valuable, Rare, Inimitable, Organized) 不只套 Resources，**套在 Activities、Resources、Knowledge 三者**。

**Home Alone / Star Wars / 失敗片 的 VRIO 解釋 (Practice Q2, Tier 1):**
- **Home Alone 1→2→3 (100K → 13.7M → 破局):** 第 1 部 V 未 proven; 第 2 部 V + R + I 建立但被 Culkin agent appropriate; 第 3 部公司 "Not Organized to appropriate value" → 換角
- **Natalie Portman 3-picture deal:** 事先鎖定 resource，避免 success 後 bargaining power 飆升 (appropriability 管理)
- **John Carter / Lone Ranger 巨虧:** 有 V + R + I (Disney 品牌、Depp 星光) 但 **Organization** 判斷錯誤 → VRIO 不足，SPARK 整體性 + external conditions 仍需配合

### 4.7 Time Dimension of Strategy (Ch.3, Tier 1)

**[補丁 2] Exam priority 較低** — Time Dimension 與 Kongo Gumi 是 Tier 1 內容但非 final weighted focus (Last Day 明示 weighted toward international / corporate / implementation)；若答題空間有限，先讓位給 economics / CEA / implementation / international / corporate。

三種 approach：

| Approach | 描述 | 適用情境 |
|---|---|---|
| **Commitment strategy (Ghemawat)** | 大規模投入 resources/knowledge | 穩定產業、基建型 |
| **Hustle strategy (Bhide)** | 快速小幅投入，捕捉 short-term advantages | Fashion、tech 高速產業 |
| **Real options strategy** | 維持 flexibility，"stay in the game" | 高不確定性環境 |

**Duration 三層:**
- Duration of strategy (Ch.3 verbatim: **Kongo Gumi 578 AD 建立、1,430 years 由 Kongo family 管理**；Matsushita、Nikken、Medtronic、Patagonia、US-based Squeegee Squad 有 100-year plans)
- Duration of specific competitive advantages
- Duration of particular tactics

---

## 第 5 部｜Cluster / Meso Level

### 5.1 完整八組成 (Ch.5 + Lecture Notes Ch.5, Tier 1)

| 組成 | 內容 |
|---|---|
| **Demand** | Size, growth, segment structure, bundling, complementarities |
| **Customers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Inputs** | Factor, human, ecological, produced, outsourced, crowdsourced, technological, infrastructure |
| **Suppliers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Shared Resources / Shared Activities** | 共用 technologies, inputs, customers, knowledge; economies of scope |
| **Complementarities** | 互補產品/服務擴張需求與 WTP |
| **Substitutes** | 間接替代壓制利潤上限 |
| **Meso Policies & Institutions** | Cluster-specific policies, 產業群集機構 |

### 5.2 Bargaining Power 三軸分析 (Ch.5, Tier 1)

**Intrinsic Bargaining Strength:**
- Concentration
- Volume of purchases
- Availability of substitutes
- Switching costs
- Vertical integration threat
- Pull-through to end-user

**Price Sensitivity:**
- Cost as % of total purchases
- Strategy and positioning
- Buyer/supplier profitability
- Impact on quality/performance

**Willingness to Use Power (Enright 強調的第三軸):**
- 若供應商對 buyer 佔比小，可能不全力壓榨
- 若 buyer 本身 profitable，可能不用盡 bargaining power
- **實際 bargaining = Intrinsic Strength × Willingness × Price Sensitivity**

### 5.3 Regional Clusters (Ch.5, Tier 1)

案例：Silicon Valley、Hollywood、London / NY finance、Swiss luxury watches、Bangalore BPO、Hsinchu 半導體等。

**Cluster 來源:**
- Natural resources / Scale economies / Proximity to markets / Labor pooling / Local input-equipment suppliers / Shared infrastructure / Reduced transaction costs / Knowledge spillovers

**一旦 self-sustaining 就難以 dislodge。**

### 5.4 Ecosystem 警告 (Ch.5, Tier 1)

Enright 明確警告：externalization 不自動正確。一家 asset-light 公司通常建立在另一家承擔 asset-heavy burden。若不清楚 value 在哪被創造、appropriated、defended，容易把 value 送出去。

---

## 第 6 部｜National / Macro Level

### 6.1 四大組成 (Ch.6, Tier 1)

**1. Macroeconomic Conditions**
- Aggregate demand, inflation, interest rates, exchange rates, unemployment
- Fiscal balances, price levels, wage levels, capital markets, savings rates
- 三個維度：level / growth / volatility

**2. Macro Government Policies**
- Monetary, fiscal, trade, investment, industrial, promotion policies
- Infrastructure, manpower, education/training, S&T policies

**3. Macro Institutions**
- Legal, regulatory, property rights, contract enforcement, government quality

**4. Civil Society & Cultural Attributes**
- Agendas, attitudes, social acceptability, cultural patterns
- Social structure, social cohesion

### 6.2 關鍵細節：Income Distribution (Ch.6, Tier 1)

- 中國、印度人口 size 讓 upper class 絕對數量大 — luxury 仍有市場
- **Bottom of the Pyramid (Prahalad):** Coca-Cola 中國農村 US$0.12 仍獲利
- BOP strategy：simpler products, smaller quantities, informal channels
- **P&G in China** 是核心 national-level case

### 6.3 考試 framing

不是問「這是不是好 business」，而是問 **「這在這個國家、在這套政策、制度、人口結構、社會條件下，是不是好 business？」**

---

## 第 7 部｜Supranational / Meta Level

### 7.1 八大組成 (Ch.7, Tier 1)

1. **International Geo-politics** — Military conflict, territorial disputes, trade tensions
2. **International Economic Conditions** — Global crises (2008, Covid)
3. **Global Technology Trends** — New product/process/disruptive tech
4. **Social and Environmental Issues** — Climate, inequality, ethics
5. **Multilateral Organizations** — WTO, IMF, World Bank, UNIDO, UNCTAD
6. **Supranational Policies & Trade Blocs** — EU, USMCA, ASEAN
7. **Foreign Governments** — 他國政府影響
8. **Foreign Multinationals & Other Supranational Groups** — NGOs, religious groupings

### 7.2 Enright 的 "Inverted T" World View (Ch.1 verbatim, Tier 1)

World 不是 flat (反 Friedman)。
- 創造 ideas 的地點 (people, companies, locations) 絕不 flat
- 執行 projects 的資源 (HR, factories) 相對 flat
- 關鍵問題：誰是 flattener (有 ideas 的贏家) / 誰是 flattenee (只能競爭執行的輸家)

### 7.3 考試重要性

這一層對 international / corporate strategy 特別重要 — 不只影響 profit 大小，**直接改寫 competition structure 本身** (誰能進場、以甚麼條件進場)。這也是為何 final 會 weighted toward international 的核心理由。

---

## 第 8 部｜International Strategy (高比重)

### 8.1 八問 Exam Blueprint (Last Day Slide 20, Tier 1)

1. Number of countries
2. Which countries
3. How do five levels differ from home country? (Supranational, national, cluster, industry)
4. What SPARK to have in each country?
5. How to match SPARK to country conditions?
6. How to organize the international company? (Global integration vs Local responsiveness)
7. Similar or different types of countries?
8. Is the international company more than the sum of the parts?

### 8.2 Global / Local 三類切割 (Tier 2 — class reconstruction, reading 支持)

| 類別 | 應 Globalize | 應 Localize |
|---|---|---|
| **Financial / Compliance** | ✓ (envelope + standards) | 僅限 local legal expertise |
| **Market-facing** | 僅限 brand consistency | ✓ (account mgmt, BD, marketing, sales) |
| **Production** | 取決於 scale economies | 常在地化 (logistics, customization) |

**考場使用:** 不強調為「教授分類」，改為從 reading 推出 — *"The article itself implies a split..."*

### 8.3 WPP 案例應用

**錯誤:** WPP 把 financial controls + compliance 也 localize 給 subsidiary founders → 高風險市場 (印度、中國、巴西、秘魯) 發生 bribery 是必然。

**正確修正:**
- Compliance 必須 global envelope，即使犧牲 integration speed
- Multi-layer approval for cross-border payments
- Independent audit function reporting to HQ
- Whistleblower protection mechanisms
- Localize 只限 account management、creative、BD、local regulatory expertise

### 8.4 RTZ / Chinalco 案例複雜性

當一個國家同時是 **customer + shareholder + partner + regulator + geopolitical force** 時：
- 不能 one-size-fits-all 國際策略
- 需要 differential SPARK per country
- 特殊 governance arrangement (股東席位、board representation、JV structure per project)
- Simandou (Guinea): 引 Chinalco 換取 political protection
- Activity-level coopetition: iron ore 合作，其他市場可能競爭

---

## 第 9 部｜Corporate Strategy (高比重)

### 9.1 核心問題

**Is the company more than the sum of its parts?**

若不是 → 投資人可自己 diversify portfolio → multi-business firm 沒存在意義 → 應分拆。

### 9.2 八問 Exam Blueprint (Last Day Slide 21, Tier 1)

1. Number of industries
2. Which industries
3. How do five levels differ from existing businesses?
4. What SPARK to have in each business?
5. How to match SPARK to business conditions?
6. How to organize the multi-business company?
7. Value created across subsidiaries or between HQ and subsidiaries?
8. Related businesses, unrelated businesses?

### 9.3 Six Value Creation Mechanisms (Tier 1 — 合理推論但多來源支持)

| 機制 | 來源 | 考試檢驗 |
|---|---|---|
| **Scope economies** | 共用 activities (distribution, procurement, R&D) | 可量化 cost saving 嗎？ |
| **Shared resources** | 品牌、技術平台、渠道 | 跨 BU 被用幾次？ |
| **Knowledge transfer** | 同類 managerial problem 跨 BU 學習 | 人才輪調頻繁嗎？ |
| **Internal capital market** | HQ 配資比外部市場準 | 比 WACC benchmark 好嗎？ |
| **Managerial discipline** | HQ 施加 operational excellence | 收購後效率提升嗎？ |
| **Bargaining leverage** | 跨 BU 對同一供應商 / 客戶議價 | 能看到 price concession 嗎？ |

**如果以上都沒明顯 yes → corporate structure 在毀壞 shareholder value → 應分拆。**

### 9.4 Case 對照 (Tier 1)

| Case | Corporate Strategy 啟示 |
|---|---|
| **Walmart** (4 分部全 retail) | Focused — scope economies 在 retail 內足夠 |
| **Mitsubishi** (10 大類跨全球) | 日本 keiretsu 歷史結構，sum-of-parts 常被質疑 |
| **Acer / Wistron 2001 分家** | Corporate scope 內 BU 互相毀壞 (品牌 vs OEM) → 正確分拆 |
| **Disney (Iger)** | Pixar / Marvel / Lucasfilm / Fox 都屬 IP content creation → related diversification work |
| **Newell ("Newellization")** | HQ operational discipline 加值 — classic "HQ adds value" 模型 |
| **Swatch Group** | 單一產業內 multi-segment (Breguet → Flik Flak)：segment scope 而非 corporate scope |

---

## 第 10 部｜Implementation (高比重 — Formal Analytical Module)

### 10.1 五段診斷系統 (Implementation lecture + Last Day Slide 22, Tier 1)

**核心 mindset:** 不是背例子，是在新 case 裡 diagnose pathology。

| 段落 | 診斷問題 | 工具 | 何時用 |
|---|---|---|---|
| **Knowing-Not Knowing** | 組織看不見甚麼？ | Rigorous questioning, outsider view, "do the homework" | 用直覺、conventional wisdom、沒做功課 |
| **Knowing-Doing Gap** | 知道了為甚麼沒動？ | 視覺震撼、legal sanctions、structural incentives | "知道" 但 behavior 沒改 |
| **Generating Clarity** | 要求夠具體嗎？ | "Switch to skim milk" 具體化、audience-start、documented handoffs | Strategy 講很多人卻不動 |
| **Overcoming Resistance** | 抗拒來自哪裡？ | 承認情緒、why-first framing、small steps、commitment ladder | 理解了還是不做 |
| **Creating Right Environment** | 環境在獎勵甚麼？ | 70/30 改環境、pre-set red lines、purpose motivation | 行為持續偏離 |

### 10.2 Knowing-Not-Knowing 七個原因 (Implementation lecture deck verbatim, Tier 1)

1. Problems of framing
2. Incorrect perceptions
3. Issues with reasoning
4. Ignoring the obvious
5. Going along with the pack
6. Believing others have done the homework
7. Willful blindness

### 10.3 Resistance to Change (Implementation lecture deck, Tier 1)

**六個原因:**
Fear of the unknown | Loss of control | Habit | Emotional attachments | Cognitive dissonance | Social influences

**六個應對:**
Acknowledge feelings | Gather information | Take small steps | Seek support | Understand others | Bring people along

### 10.4 Winning Commitment Ladder 六階 (Implementation lecture deck, Tier 1)

I know → I understand → I am considering → I want to → I will → I commit

**管理陷阱:** 發 memo、開 meeting ≠ "I commit"。"I know" 離 "I commit" 有六層。

### 10.5 Kotter's 8 Accelerators (Implementation lecture deck, Tier 1)

1. Activation — Urgency + Commitment
2. Build guiding coalition
3. Clarify vision
4. Create volunteer army
5. Remove barriers
6. Motivate through progress
7. Sustain / scale efforts
8. Solidify new normal

**Undercommunication 是 change failure #1 原因 (Kotter)。**

### 10.6 Creating Right Environment：70/30 Principle (Apr 8 筆記, Tier 2)

50+ 年社會心理學研究：
- Personality 最多解釋 **30%** 的 behavior
- Situation / environment 解釋 **70%**
- Managers 系統性**低估** environment
- 改變 behavior 最有效不是改 personality，而是**改環境**

### 10.7 必記具體實驗數字 (Apr 8 + Apr 15 筆記, Tier 2)

| 實驗 | 關鍵數字 | 意涵 |
|---|---|---|
| Handwashing (Australian study) | 73% self-report vs 9% observed | Self-report ≠ behavior |
| Seat belt utilization | 1980: 11%, 1990: 49%, 2005: 80%+ | Behavior change 要 25 年 |
| Asch conformity 關鍵回合 | 37% | Group pressure 強度 |
| Asch with one ally | 5% | Ally 的結構性力量 |
| Asch with private written | ~12% | 匿名化 debias |
| Good Samaritan (早/準/遲) | 63% / 45% / 10% | Situation 打敗 personality |
| Telephone Game | 每傳一次降 20% | Cross-layer communication 失真 |
| Treatment A (90%) + neg/pos story | 39% / 88% | Narrative vs data power |
| Treatment B (30%) + neg/pos story | 7% / 78% | Narrative vs data power |
| West Virginia "skim milk" | 18% → 35% (6 months) | Specific 勝過 vague |

### 10.8 Willful Blindness 核心引言 (Heffernan, Tier 1)

- "You cannot fix a problem that you refuse to acknowledge."
- "As long as it remains invisible, it is guaranteed to remain insoluble."
- "Silence is the language of inertia."
- "People are about twice as likely to seek information that supports their own point of view as they are to consider an opposing idea."

### 10.9 最可靠的 Implementation Anchors (Tier 1)

Connect-the-dots、Industry profitability ranking、Monty Hall、Willful blindness、Handwashing — 這五個是 lecture deck 直接支持的 primary anchors。**Jobs / Ferguson 降為次級支持**，不作主要 citation。

### 10.10 Nokia 作為 Implementation Transfer 標準案例

**五段式標準作答姿勢 (Tier 1 — Last Day Q4 的 rubric 直接支持):**

1. **Classify pathology**
2. **Cite evidence** (reading 原文)
3. **Explain implication for performance**
4. **Explain why firm was susceptible**
5. **Prescribe organizational remedy**

**Nokia Pathology Mapping 完整版 (Tier 1 — reading 原文支持):**

| Pathology | Nokia 證據 | Segment |
|---|---|---|
| Knowing-Not-Knowing / Willful blindness | 2005 research 指出 mobile → handheld computer；2004 已有 prototype；senior management 未採取行動 | 1 |
| Knowing-Doing Gap | 知道 Symbian 不適合 software-rich 體驗但 roadmap 未改 | 2 |
| Framing error | "Hardware company" mental model → "software as supporting function" | 1 |
| Communication failure | Mid-level concerns "appeared not to have reached senior management"；objections "not formally recorded" | 3 |
| Going along with pack | "Dominant norm in leadership meetings was alignment" | 1 + 4 |
| Fear-driven reporting | Middle managers "reported optimistic progress despite knowing deadlines unrealistic" | 3 + 5 |
| Pluralistic silence | "Nobody spoke the truth because nobody was certain anyone else was prepared to hear it" | 5 |
| Wrong environment incentive | "Fear of losing social standing by delivering unwelcome assessments" | 5 |
| Structural barrier | 2004 reorg → "overlapping accountabilities, interdivisional rivalry" | 4 + 5 |
| Loss of institutional knowledge | 資深 strategist departure → lost "earlier agility" | Firm-level K |

**為何 Nokia 特別 Susceptible:**
1. Prior success hardening (1998 全球 #1 + $4B 利潤 → mental model 鎖死)
2. Standard-setting path dependency (Nordic → Europe → World → 相信 hardware+standards 是贏邏輯)
3. Homogeneous leadership (hardware people，缺 software 多元性)
4. Consensus culture (Finnish 文化 valorize 共識)
5. Quarterly shareholder pressure (扭曲內部真話)
6. Multi-layer approval (disruption 無法穿透)

**公司避免步驟:**
- Process design: anonymous written judgments before discussion (Asch 對策)
- Red-team / outside review 72 小時到 4 天試圖推翻結論
- Break multi-layer approval for innovation
- Fear-to-truth transition: 明確獎勵 bad news reporting
- Leadership diversity
- Early warning: report risks/blockers, not just progress
- Decouple executive compensation from short-term stock
- Institutional knowledge preservation (succession 不因 reorg 清空)
- Applied Kotter: urgency 在危機前
- Commitment Ladder 檢查

---

## 第 11 部｜Case Inventory (8 Canonical Cases)

### 11.1 Case-to-Level Heuristic (Last Day Slide 17, Tier 1 grid; 唯一對應為 Tier 3 heuristic)

| Case | 默認 Level | One-sentence Thesis |
|---|---|---|
| **NEC-GTE** | Firm (Leadership) | Kobayashi C&C vision 建立 NEC 但 vision 鎖死成未來 liability |
| **Airline Industry** | Industry | 高 fixed + sunk + low differentiation → 結構性低獲利 |
| **Powers that Be (GAFAM)** | Supranational / Industry | 平台 economics 非單一 industry，各家 profit engine 差異極大 |
| **Stitch Fix** | 跨層 (Meso / Industry / Meta) | Tech-enabled curated apparel retail, unmet demand, Amazon 威脅下 sustainability 存疑 |
| **Acer-Wistron** | Cluster / Industry | Forward integration 與客戶衝突 → 2001 分拆 |
| **Seiko** | Firm (positioning) | Medium → upmarket 動態 positioning |
| **P&G in China** | National | BOP + income distribution + consumer change + digital shift |
| **Disney (Eisner / Iger)** | Firm (Leadership) | Eisner 建廠但 succession 失敗；Iger related acquisitions 修復 |

**使用原則:** 作為默認配對，但 reading evidence 優先。Stitch Fix、Powers that Be、P&G 本來就跨層。

### 11.2 Practice Question 案例補充

| 案例 | 用途 |
|---|---|
| **ETA / Swatch** | Industry economics (movement vs watch)、supplier power、競爭政策、appropriability |
| **Home Alone / Culkin** | VRIO on Resources：V 建立、R 稀缺、I 困難、O 失敗 → value leak |
| **Natalie Portman** | Forward contract 鎖定 resource 的 appropriability 管理 |
| **John Carter / Lone Ranger** | VRIO limits：V+R+I 但 Organization 判斷錯誤仍失敗 |
| **Newell** | Corporate Strategy — HQ discipline 加值 |
| **WPP (FCPA)** | International strategy — global/local 切割錯誤 |
| **RTZ / Chinalco** | International strategy — 多重角色國家關係 |
| **Nokia** | Implementation — 全套 pathology 匯集 |

---

## 第 12 部｜考場攻擊流程

### 12.1 Time Allocation (3 小時 4 題假設)

| 時段 | 動作 | 分配 |
|---|---|---|
| 0–5 min | 讀所有 questions 不讀 reading | 5 |
| 5–15 min | 完整讀 reading，邊讀邊 tag 框架 | 10 |
| 15–30 min | Q3 (先做最 bounded 題目) | 15 |
| 30–55 min | Q1 (international 類) | 25 |
| 55–80 min | Q2 (corporate 或其他) | 25 |
| 80–140 min | Q4 (Nokia 類 30 points) | 60 |
| 140–170 min | 回去補三題 conclusions | 30 |
| 170–180 min | Final scan：每題 conclusion? 引用具體? | 10 |

### 12.2 Question Trigger → Tool Mapping

| Reading 中的 trigger words | 對應工具 |
|---|---|
| "profitability", "industry structure", "competition" | Underlying economics 7 維 + Table 4.3 + ferocity 9 drivers |
| "bargaining", "buyer/supplier power" | Intrinsic strength + willingness + price sensitivity |
| "foreign", "international", "country" | 5-level home vs host + SPARK match + Global/Local 3 類切 |
| "multi-business", "subsidiary", "corporate" | Corporate strategy 6 mechanisms + "sum of parts" test |
| "leadership", "organization", "execution" | Implementation 5-block + 70/30 + commitment ladder + Kotter |
| "resource", "competitive advantage" | VRIO + ARK of SPARK |
| "future competition", "threat", "sustainability" | **CEA 7 questions + lead firm type + unmet demand** |
| "case X illustrates level Y" | Five-level template + specific case evidence (Slide 17 heuristic) |

### 12.3 答題結構 (每題都用)

\`\`\`
1. Identify focal firm + industry (form + function + direct competition)
2. 若 business-facing: Underlying economics 6 問快速掃描
3. Identify which levels 最 binding (只列 binding，不寫全五層)
4. Apply 對應工具 (SPARK / Table 4.3 / bargaining / CEA / Implementation diagnosis)
5. Cite 具體 case evidence (數字、quotes、事件)
6. Conclude with BARD 或 POE 語氣
7. 若題目要求: formulate action + anticipate implementation barriers
\`\`\`

### 12.4 Fatal Error Checklist

- ❌ 沒有 conclusion (零分)
- ❌ Performance 聲稱沒指明 comparator (相對於誰？)
- ❌ 只列 framework 沒做 causal application
- ❌ Case 用錯 level (Slide 17 heuristic)
- ❌ Q1 重複使用同一 case
- ❌ 塞 extraneous material
- ❌ Implementation 題只重述 story 不做 diagnosis
- ❌ International 題 global/local 不分類
- ❌ 沒做 CEA (只分析今天 competitors)
- ❌ 忽略 underlying economics 直接跳到 strategy language
- ❌ 用 Prahalad-Hamel "core competence" framing 回答 firm-level (Enright 明言警告)
- ❌ 用 "tech industry" 籠統 framing (應逐家公司分析)
- ❌ 答案塞入 vocabulary display (Enright 要 causal reasoning)

---

## 第 13 部｜考場 Cheat Sheet (一頁手寫版)

考前自己手寫這一頁能建立 muscle memory。

### 13.1 Five Levels 骨架

\`\`\`
Meta/Supranational:  geopolitics, tech trends, multilateral, trade blocs
Macro/National:       macro econ, gov policies, institutions, civil society
Meso/Cluster:         demand/customers, inputs/suppliers, complements/substitutes, shared
Micro/Industry:       characteristics, competition (9), cooperation, lead firms, groupings
Firm:                 SPARK + Leadership + Execution + Org/Mgmt + Governance + Policies
\`\`\`

### 13.2 Performance Relative 4 Comparators

Competitors | Benchmarks | History | Expectations

### 13.3 Economics 7 維

Scale | Scope | Learning | Network | Nexus | Standards | Fixed / Sunk / Variable

### 13.4 Competition 三維

Type (5) | Variables (7) | Ferocity (9)

### 13.5 Firm Level 核心

**SPARK** — Scope, Positioning, Activities, Resources, Knowledge
**VRIO** — Valuable, Rare, Inimitable, Organized (套在 A, R, K)
**CEA 7 Qs** — optimize / leverage / overcome / add / taken over / if we managed / future

### 13.6 Industry Analysis Template (加 Lead Firm)

Economics → Competition type → Variables → Ferocity → **Lead firm role** → Profit

### 13.7 Implementation 5 段 + 關鍵數字

1. Knowing-Not-Knowing (7 原因)
2. Knowing-Doing Gap (73%/9%, 11%→80%)
3. Generating Clarity (20% loss per pass; 18%→35% skim milk)
4. Overcoming Resistance (6 + 6) + Commitment Ladder
5. Creating Right Environment (70/30; Good Samaritan 63/45/10; Asch 37/5/12)

### 13.8 Dysfunction (Ch.1 paraphrase)

- Analysis + Leadership without action → **paralysis**
- Action + Leadership without analysis → **random / misdirected**
- Analysis + Action without leadership → **scattered and confused**

### 13.9 BARD / POE

強 evidence → BARD 語氣："evidence clearly indicates"
弱 evidence → POE 語氣："on balance, suggests"

### 13.10 Enright 核心引言

- "Don't stop at the first explanation that fits the fact pattern." (Wittgenstein)
- "People see what they are incentivized to see." (Burry / Big Short)
- "Silence is the language of inertia." (Heffernan)
- "First lemming off the cliff may be a great leader but is a lousy strategist." (Enright)

### 13.11 Case-Level Heuristic (Slide 17)

NEC-GTE → Firm | Airline → Industry | Powers that Be → Supra/Industry
Stitch Fix → 跨層 | Acer-Wistron → Cluster/Industry | Seiko → Firm
P&G in China → National | Disney → Firm

### 13.12 International 題三類切

Financial / Compliance → Globalize
Market-facing → Localize
Production → Scale-dependent

### 13.13 Corporate 題 6 機制

Scope economies | Shared resources | Knowledge transfer | Internal capital market | Managerial discipline | Bargaining leverage

### 13.14 Nokia 五段式答題 Default Shape

1. Classify pathology
2. Cite evidence (reading 原文)
3. Explain implication
4. Explain susceptibility
5. Prescribe remedy

---

## 第 14 部｜信度分級 (考場應用指南)

### Tier 1: 最高信度 — Primary Source Verbatim (可自信引用)

- Five-Level Framework (Ch.2)
- SPARK 五元素 (Ch.3 Figure 3.6)
- Performance relative 4 comparators (Ch.2)
- Industry definition: form + function + direct competition (Ch.4)
- 三個 dysfunction 內容 — Ch.1 原文已確認
- Kongo Gumi 1,430 years — Ch.3 原文已確認 (但 exam priority 較低)
- Economics 7 維 (Last Day Slide 18)
- CEA + 七問 (Ch.4 Table 4.5)
- Lead Firm 六類型 (Ch.4)
- Coopetition / Ray Noorda (Ch.4)
- Inverted T (Ch.1)
- "First lemming" (Ch.1-2)
- Implementation 五段骨架、7 原因、6+6、Commitment Ladder、Kotter 8 (Lecture deck)
- International / Corporate 八問 (Last Day Slides 20-21)
- 6-3-10、方法鏈、4 Commandments、¼ × 4 (Last Day)
- "Weighted toward international / corporate / implementation" (Last Day Slide 23)
- Nokia reading + Practice Questions (Last Day Slides 31-34)
- VRIO on ARK (Last Day Slide 19)
- 案例 Walmart vs Mitsubishi、Swatch multi-segment、Kobayashi NEC 雙面刃 (Ch.3)

### Tier 2: 高信度 — User-Verified Reconstruction (可用，保守語氣)

- Handwashing 73%/9%、Seat belt 11%→80%、Asch 37%/5%/12%、Good Samaritan 63%/45%/10%、Telephone 20%、West Virginia 18%→35%、Treatment A/B 39%/88%/7%/78% (Apr 8 + Apr 15 筆記)
- 70/30 personality vs environment
- Asch 對策 (anonymous written, 72-hour red team)
- Global / Local 三類切 (reading 支持，非 slide verbatim)
- 用戶親自驗證的實驗機制

### Tier 3: 合理推論 (可用作答，不強調出處)

- BARD / POE 的法律解讀 (方向正確，非 Enright verbatim 定義)
- Water meter 三方採購分離邏輯
- Case-to-level 單一配對 (作為 default heuristic)
- Six value creation mechanisms (合理推論但多來源支持)
- Dysfunction formulas 的公式格式 (內容 Tier 1，格式我方 restatement)

### Tier 4: 不建議直接使用

- "Useful output principle" 名詞 (改用 Ch.4 verbatim)
- Steve Jobs / Alex Ferguson 作為主要 anchor
- "February 1 material 有直接 quote" (ChatGPT 獨有，無法驗證)
- 70% 複習時間分配 (我方建議，非 Enright)
- Metcalfe's Law 名稱與 n² 強調 (用保守網路效應語言)
- Prahalad-Hamel core competence framing 回答 NEC (Ch.2 警告)

---

## 第 15 部｜最終一句話總綱 (雙 AI 共識版)

**EN:**
> **Start with underlying economics, identify the binding levels in the five-level framework, test the focal firm's SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value the analysis suggests should be available.**

**中:**
> **先從 underlying economics 下手，找出 five-level framework 裡真正 binding 的層次，再檢驗 focal firm 的 SPARK 加上 leadership 與 execution，用 CEA 壓測未來競爭，最後再問 organization 與 implementation 是否真的讓分析上應該存在的價值，能被實現並守住。**

這句話整合了：
- **Underlying economics 作起點**
- **Binding levels** (非全五層)
- **SPARK + Leadership + Execution** (非只靜態 SPARK)
- **CEA 壓測未來** (動態工具)
- **Organization + Implementation** (落地檢驗)
- **Realize and defend** (不只創造還要守住)

---

## v1.1 修訂總覽

| 位置 | 變動 |
|---|---|
| 新增 4.0 節 | Performance relative 4 comparators (Competitors / Benchmarks / History / Expectations) |
| 4.7 節首句 | 加註 Exam priority 較低，資源分配讓位給 economics / CEA / implementation / international / corporate |
| 12.4 Fatal Error Checklist | 新增「Performance 聲稱沒指明 comparator」為第 2 項錯誤 |
| 13.2 Cheat Sheet | 新增 Performance Relative 4 Comparators 區塊 |

**其餘結構與內容完全保留。**

---

## 最終指示

### 1. Enright 真正要看到的 exam behavior

教授明示目標：*"Not for you to be better students, but to help you become better professionals."* 考場上您不是證明背多少，而是展示：**2 小時內能否像 consulting partner 第一次看 case 那樣運作。**

每個答題動作都要有 purpose：
- 不是寫「SPARK 有五個元素」，而是 *"Here's why Scope matters here specifically"*
- 不是寫「bargaining power 公式」，而是 *"Here's who actually captures value after bargaining"*
- 不是寫「Nokia 有 pluralistic silence」，而是 *"Here's how this silence mapped to specific shareholder pressure signals"*

### 2. 遇到不確定時的優先順序

1. Underlying economics (先搞清楚這個 business 怎麼賺錢)
2. 哪幾個 level binding (不寫全五層)
3. 該 firm 的 SPARK + Leadership + Execution
4. CEA + unmet demand + Lead firm type (未來 threat / opportunity)
5. Conclusion with BARD or POE (並指明 performance comparator)

這五步能涵蓋 80% 的題目。其餘 20% 加 International / Corporate / Implementation 特定工具。

### 3. 考前 48 小時建議

- **Day -2:** 找 2–3 篇 FT / Economist 商業文章，45 分鐘限時套 Enright 方法
- **Day -1:** 重看 Apr 8 + Apr 15 筆記；把 pathology 清單變 checklist；手寫一頁 cheat sheet
- **考試當天:** 只重溫手寫 cheat sheet，不再看大量材料
`;

const SOURCE_MARKDOWN_ZH_CN = `# STRT 6200 Final Exam
### Professor Michael J. Enright｜Strategic Decision-Making

---

## 第 0 部｜Enright 实际打分的六个动作

教授在 Last Day Slide 23 明示评分 rubric 只有四句：*"Read the questions. Use the right tools for the job. Don't include extraneous material. Use your time wisely."* 翻译成 exam mechanics：

| 动作 | 检验标准 |
|---|---|
| 1. 迅速辨认 case 在哪几个 levels 上 binding | 不写全五层，只写 binding 者 |
| 2. 调出对的 analytical tool | 不是背哪个 tool 存在，而是选对 |
| 3. 拿 case 具体 evidence 推出 conclusion | 引用 reading 原文，不是记忆预载 |
| 4. 标注 confidence level | BARD 或 POE 语气校准 |
| 5. 把 conclusion 连到 actionable strategy | "What should they do?" |
| 6. 预期 implementation 会撞上人性障碍 | "How will this actually work?" |

所有答题动作都要能对应至少一件。

---

## 第 1 部｜Enright 分析脊椎

### 1.1 完整分析链 (Last Day Slide 15, Tier 1)

Search → Sort → Analyze → Hypothesize → Test → Conclude (BARD or POE) → Formulate Strategy → Implement

### 1.2 BARD vs POE 语气校准 (Last Day 提及，法律式解读为合理推论)

| 语气标签 | 使用时机 | 句型范例 |
|---|---|---|
| **BARD 语气** (beyond reasonable doubt) | 强 evidence，几无合理替代解释 | "The evidence clearly indicates..."、"Given [specific facts], the conclusion is..." |
| **POE 语气** (preponderance of evidence) | 证据相对倾向但有限 | "On balance, the reading suggests..."、"The more likely outcome is..." |

**纪律:**
- 每题至少一个明确 conclusion
- 拒绝下结论 = 零分
- 强 evidence 却用 hedging = 也会被扣
- 无 evidence 却用 BARD = 过度自信扣分
- 教授要 calibrated confidence
- **不在答案中展开 BARD/POE 法律定义** (ChatGPT 与我方共识) — 只作为 confidence marker 使用

### 1.3 三层 Zoom 分析法 (Last Day Slide 13, Tier 1)

| 距离 | 焦点 |
|---|---|
| **6 inches away** | 细节组织进 framework (数字、quotes、事件) |
| **3 meters away** | 每块分析的 major conclusion (puzzle pieces) |
| **10 meters away** | 整个 puzzle：How is value created? How are competitors exceeded? How do we get paid? |

### 1.4 The 4 Commandments (Last Day Slide 16, 大写强调, Tier 1)

1. **UNDERSTAND THE INDUSTRY AND WHAT IT DOES!!!**
2. **DRAW THE PICTURES!!**
3. **TURN ONE COMPLICATED THING INTO MANY SIMPLE THINGS!!**
4. **Build the puzzle, then solve the puzzle**

Execution mantra: *"Show up, ask the right questions, don't stop until they are answered, put the pieces together, remember people are people."*

### 1.5 Strategy Philosophy (Last Day Slide 3, Tier 1)

Doing strategy well is often：
- ¼ Showing up
- ¼ Knowing what questions to ask
- ¼ Not stopping until the questions are completely answered
- ¼ Knowing how to make strategy work in the organization

三个 ¼ 不关于「知道甚么」，而是「如何动起来」。

---

## 第 2 部｜Underlying Economics

### 2.1 七维度扫描 (Last Day Slide 18, Tier 1)

| 维度 | 核心问题 | 结构含意 |
|---|---|---|
| **Scale Economies** | Output 增加时 average cost 下降？ | 大 scale → few players → oligopoly / monopoly |
| **Scope Economies** | 做多个 related business 降 total cost？ | 整合型公司优势 → 多角化合理 |
| **Learning Economies** | 累积生产量增加时成本下降？ | 先进者持久 cost advantage → entry deterrence |
| **Network Economies** | User base 增加时 value 提升？ | Winner-take-all、self-reinforcing |
| **Nexus Economies** | Must-pass 关键节点？ | 控制者准垄断、被迫穿过者 commodity |
| **Standards** | Technical / interface standards 谁控制？ | 标准持有者 quasi-monopolist |
| **Fixed vs Sunk vs Variable Cost** | 三种成本各占多少？ | 决定 competitive 行为与 exit barriers |

### 2.2 Fixed / Sunk / Variable 三种成本 (Tier 1)

| 成本类型 | 定义 | 决策含意 |
|---|---|---|
| **Variable Cost** | 随 output 变动 | Price > VC 时值得多卖 |
| **Fixed Cost** | 短期固定，长期可避免 | 影响 scale economies 与 break-even |
| **Sunk Cost** | 已投入且**无法回收** | 不影响未来决策，但造成 **exit barrier** |

**三种结构含意:**
- High fixed + low variable → 削价诱因 → fierce price competition (HK mobile telecom, Ch.4 example)
- High sunk → 退不出去 → subsidized / hypercompetition (airlines)
- Low fixed + high variable → perfect competition tendency (餐饮、零售小店)

### 2.3 Industry Economics 六问 (Tier 1)

分析任何 business-facing case 前先问：

1. 这个 industry 实际在做甚么 (form + function + direct competition)？
2. Cost structure — capital / labor / knowledge / marketing intensive？Fixed / sunk / variable 比例？
3. Scale / scope / learning 在哪里成立？
4. Network / nexus / standards / installed-base effects 是否存在？
5. 这套 economics 推向哪一种 competition type？
6. Value 在哪里被 capture，由谁 capture？

### 2.4 核心因果链 (Tier 1)

\`\`\`
Underlying economics 
  → Industry structure (concentration, barriers)
    → Type of competition (5 types)
      → Competitive variables (price vs non-price)
        → Ferocity of competition (9 drivers)
          → Industry profit potential
            → Firm performance (modified by SPARK + bargaining)
\`\`\`

### 2.5 Profitability Ranking 教学意义 (Implementation lecture, Tier 1 ranking; Tier 2 详细机制)

教授 ranking：**1 Water meters → 2 Pharmaceuticals → 3 Automobiles → 4 Semiconductors → 5 PCs → 6 Airlines**

**水表最高 (Tier 2 机制):** Buyer configuration split (specification ≠ procurement ≠ payment)；成本占建筑总成本 trivial；municipality 偏好 reliable 版本避免 under-measurement；结果 high WTP + low price sensitivity + concentrated supply。

**航空最低 (Tier 1 ranking):** Low differentiation → perfect competition tendency；high fixed + high sunk (飞机) → exit barriers；customers price sensitive；commodity + 无法退出 → 长期 breakeven。

**教学核心:** 利润不来自 glamour 或 technological sophistication，来自**结构**。

### 2.6 高分作答模板

> "The industry's profit potential is driven by [specific underlying economics]. Because [scale / fixed cost / network / etc.], the industry structure tends toward [type of competition]. Competition is primarily on [price or non-price variable], making ferocity [high/moderate/low]. This translates to [high/low] industry profitability. However, specific firms' actual profits depend on their ability to [SPARK advantages / cluster positioning] relative to competitors."

---

## 第 3 部｜Industry Level 深入

### 3.1 Industry Definition (Ch.4 verbatim, Tier 1)

> *"An industry consists of products or services that have similar form and function that are in direct competition with each other, and the firms that supply them."*

- 三要素：Form、Function、Direct competition
- **策略性定义**，非 SIC / NAICS 统计分类
- 边界随时间 merge 或 fragment
- 是 profit analysis 的地基

### 3.2 Five Types of Competition (Lecture Notes Ch.4 slide 13, Tier 1)

从最差到最好 profitability：

Subsidized Competition ← Perfect Competition ← Hypercompetition ← Oligopoly → Monopoly

| 类型 | 核心特征 |
|---|---|
| **Monopoly** | 单一 firm，无竞争，regulation 未限制时最赚 |
| **Oligopoly** | 少数 firms，recognition of interdependence |
| **Hypercompetition** (D'Aveni) | 多 firms + 来自 related industries 的潜在新进者，差异化只能短期 |
| **Perfect Competition** | 多 firms 无差异化，只 price 竞争 |
| **Subsidized Competition** | 亏损 firms 被维持存活 |

### 3.3 Table 4.3 重组为诊断工具 (Tier 1)

| 若该条件强 → | 产业趋向 | 利润含意 |
|---|---|---|
| Barriers to entry 高 | Monopoly / tight oligopoly | 高 |
| 产品 differentiation 大 | Oligopoly (distinguishable) | 中到高 |
| 品牌存在 | Oligopoly (sustained advantage) | 高 |
| Scale / learning / scope 经济大 | Oligopoly / monopoly | 高 |
| 与 customers / channels / suppliers preferential | Oligopoly (sustained) | 高 |
| Information asymmetry 大 | Oligopoly (sustained) | 高 |
| 运输成本高 | 地理性 oligopoly / 地方 monopoly | 高 |
| Collusion 可能 | Oligopoly → cartel-like | 高 |
| Exit barriers 高 + 需求萎缩 | Subsidized / 持续 ferocious | 极低 |

### 3.4 Competition 三维分析 (Tier 1)

**维度 1：Type** (上述五类)

**维度 2：Competitive Variables** (Last Day Slide 18)
- Price
- Quality / Performance
- Brand
- Service
- Speed / Time-to-market
- Access (distribution, channels)
- Ecosystem / Platform

**关键洞察:** 同属 oligopoly，在哪个 variable 竞争决定 profit。HK property (location + features) 高获利 vs. HK mobile telecom (price due to overcapacity) 低获利。

**维度 3：Ferocity 九个驱动因素** (Lecture Notes Ch.4 slide 21, Tier 1)

1. Industry concentration 低
2. Collusion 可能性低
3. Industry growth 低或负
4. Product homogeneity 高
5. Differentiation 低
6. Capacity utilization 低
7. Corporate stakes 高
8. Exit barriers 高
9. Entry barriers 低

这九个不是背诵 list，是诊断工具 — 拿到 case 问自己：哪几格勾起来？

### 3.5 Industry Level Drivers 完整 Template (Tier 1)

1. **Industry Characteristics** — Relevant segments, activities, resources, knowledge; technologies and processes; geographic scope
2. **Competition** — Ferocity, nature, identity, strategies, capabilities of competitors
3. **Cooperation** — Scope for cooperation; alliances; joint development; lobbying
4. **Strategic Groupings** — Groups of firms with similar strategies; intra-group vs. between-group
5. **Lead Firms** — 六类型 (见 3.6)
6. **Micro Policies & Institutions**

### 3.6 Lead Firm 六类型 (Ch.4 原文, Tier 1)

| 类型 | 行为 | Enright 案例 |
|---|---|---|
| **Standard Setter** | 设定产业标准 | IBM System 360、IBM PC |
| **Statesman** | 产业长者 | HSBC (HK banking) |
| **Enforcer** | 执行规则 | Saudi Aramco (OPEC) |
| **Predator** | 积极削弱对手 | Microsoft (browser wars) |
| **Frame-breaker** | 重新定义产业 | Dell、Southwest Airlines |
| **Outlier** | 自成一格 | Ben & Jerry's、Body Shop |

**高分洞察:** Nokia 早期是 standard setter (Nordic → Europe → World)；Apple 进入后变成 frame-breaker 重新定义 "standard" 为 software platform，Nokia 的 standard 优势瞬间失效 — 这是 Nokia 衰退的 industry-level 深层解释。

### 3.7 Competitor Envelope Analysis™ (Ch.4 Table 4.5, Lecture Notes Ch.4 Slide 27, Tier 1)

Enright 注册商标工具。不是分析当前 competitors，是分析他们变 smart 后多难缠。

**七个核心问题:**
1. What if competitors were to optimize their activities?
2. What if competitors were to fully leverage their resources and knowledge?
3. What if competitors overcame strategic shortcomings?
4. What if competitors add to their resources or knowledge?
5. What if competitors were taken over by savvy, deep-pocketed firms?
6. What would we do if we managed the competitors?
7. How tough might competitors be in the future if they are smart?

**两个额外动作 (Ch.4 verbatim):**
- 识别 **related industries 的潜在新进者** (Sega / Sony / Nintendo 没料到 Microsoft X-box)
- 识别 **unmet demand segments** (Dell、IKEA、Southwest Airlines 都是抓到 unmet need 而赢)

**考试高分位置:** 任何题目问 "future competitive position" 或 "sustainability of advantage"，都应优先 deploy CEA。

### 3.8 Coopetition (Ch.4 verbatim, Tier 1)

Ray Noorda (Novell 创办人) coined；Brandenburger + Nalebuff 的书发扬。**同一组 players 可能在 activity A 合作，activity B 竞争。**

案例 (Ch.4 原文):
- Pratt & Whitney / Rolls-Royce：low thrust 合作、medium/high thrust 对抗
- Pratt + Rolls 联盟 vs. GE + SAFRAN 联盟
- Rolls / SAFRAN 在 Concorde 合作
- Pratt / GE 在军用机竞争、在 NASA 合作

**考试应用:** 看到 "both competitor and partner" 情境 (RTZ + Chinalco)，要能**在 activity level 拆解**，不只 firm level 判断。

---

## 第 4 部｜Firm Level 完整框架

### [补丁 1] 4.0 Performance 是 Relative Concept (Ch.2, Tier 1)

**任何 performance 声称都必须指明比较对象。Performance 永远是相对概念，比较对象有四类：**

1. **Competitors** — 产业内对手
2. **Benchmarks** — 同类型企业或国际最佳实践
3. **History** — 公司自己过去的表现
4. **Expectations** — 投资人、分析师、目标预期

考场上若题目问 "firm performs well/poorly"，答题**第一句必须指明**：relative to competitors? benchmarks? own history? expectations? 答「不好」而没指明 comparator = 失分。

### 4.1 SPARK (Ch.3 Figure 3.6, Tier 1)

**Strategy = Scope + Positioning + Activities + Resources + Knowledge**

| 元素 | 回答甚么问题 |
|---|---|
| **Scope** | Where we compete |
| **Positioning** | How we compete (marketplace + cost + vs competitors) |
| **Activities** | What we do |
| **Resources** | What we use |
| **Knowledge** | What we know |

### 4.2 Scope 三层次与六类型 (Ch.3, Tier 1)

**三层次:**
1. Corporate or industry scope (几个产业)
2. Competitive or within-industry scope (产业内哪些 segments)
3. Geographic scope (哪些地理市场)

**六类型 (Figure 3.1):**
- Local Specialist (Southwest Airlines)
- Local Diversifier (CITIC)
- Global Specialist (McDonalds, Lafarge)
- Global Diversifier (GE, Mitsui, Siemens)
- Within industry: Local/Global Broadline vs. Local/Global Focus

**Within-Industry Scope 经典对比 (Ch.3, Tier 1):**
- Swatch Group: Flik Flak (US$30) → Breguet (US$250,000) — broadline
- Rolex: high/luxury/prestige only — focus
- Breitling: high segment only — focus
- Seiko (Japan): "mostly present in medium priced segments, though has been pushing upmarket in recent years" — positioning 迁移动态

### 4.3 Firm Level 完整六类 Drivers (Ch.3 + Last Day Slide 19, Tier 1)

不能只停在 SPARK：

1. **SPARK** (上述 5 元素)
2. **Leadership** — Strategic direction, motivation, external face, setting standards/ethics, mentorship
3. **Execution** — Knowing what to do, overcoming inertia, getting things done
4. **Organization & Management** — Division of labor, structures, systems, HR, capabilities
5. **Governance** — Governance standards, compliance costs, impact on decision-making
6. **Firm-Specific Policies & Institutions** — Government support, subsidies, firm-specific training bodies

### 4.4 三个 Dysfunction Formulas (Ch.1 verbatim, Tier 1)

Ch.1 原文:
> *"Analysis and leadership without action yields paralysis. Action and leadership without analysis is random or misdirected. Analysis and action without leadership often becomes scattered and confused."*

| 缺少的支柱 | 结果 |
|---|---|
| Analysis + Leadership − **Action** | **Paralysis** |
| Action + Leadership − **Analysis** | **Random / Misdirected** |
| Analysis + Action − **Leadership** | **Scattered and Confused** |

### 4.5 Leadership 的双面刃 (Ch.3, Tier 1)

正向案例：Bill Gates (Microsoft)、Sam Walton (Walmart)、Jack Welch (GE)、Eisner (Disney 重建)、Bezos (Amazon)、Jorma Ollila (Nokia 转型)、Morita (Sony)、Kobayashi (NEC C&C vision)、Li Ka-shing、Rupert Murdoch、Narayana Murthy (Infosys)。

**警示案例 (Ch.3 verbatim):**
- Kenneth Lay / Jeffrey Skilling (Enron) — 创新但造假
- **Kobayashi 的 vision "left NEC vulnerable to competition from more focused competitors"**
- Elizabeth Holmes (Theranos) — 诈欺

**高分 NEC 答题框架 (非 Prahalad-Hamel):**
- 不用 "core competence" framing — Ch.2 明确警告此框架的局限
- 用 Enright 自己的 firm-level framework
- NEC 展示 Leadership 的**动态张力** — Kobayashi 的 vision 既建立优势又埋下 vulnerability

### 4.6 VRIO 的 ARK 延伸 (Last Day Slide 19, Tier 1)

VRIO (Valuable, Rare, Inimitable, Organized) 不只套 Resources，**套在 Activities、Resources、Knowledge 三者**。

**Home Alone / Star Wars / 失败片 的 VRIO 解释 (Practice Q2, Tier 1):**
- **Home Alone 1→2→3 (100K → 13.7M → 破局):** 第 1 部 V 未 proven; 第 2 部 V + R + I 建立但被 Culkin agent appropriate; 第 3 部公司 "Not Organized to appropriate value" → 换角
- **Natalie Portman 3-picture deal:** 事先锁定 resource，避免 success 后 bargaining power 飙升 (appropriability 管理)
- **John Carter / Lone Ranger 巨亏:** 有 V + R + I (Disney 品牌、Depp 星光) 但 **Organization** 判断错误 → VRIO 不足，SPARK 整体性 + external conditions 仍需配合

### 4.7 Time Dimension of Strategy (Ch.3, Tier 1)

**[补丁 2] Exam priority 较低** — Time Dimension 与 Kongo Gumi 是 Tier 1 内容但非 final weighted focus (Last Day 明示 weighted toward international / corporate / implementation)；若答题空间有限，先让位给 economics / CEA / implementation / international / corporate。

三种 approach：

| Approach | 描述 | 适用情境 |
|---|---|---|
| **Commitment strategy (Ghemawat)** | 大规模投入 resources/knowledge | 稳定产业、基建型 |
| **Hustle strategy (Bhide)** | 快速小幅投入，捕捉 short-term advantages | Fashion、tech 高速产业 |
| **Real options strategy** | 维持 flexibility，"stay in the game" | 高不确定性环境 |

**Duration 三层:**
- Duration of strategy (Ch.3 verbatim: **Kongo Gumi 578 AD 建立、1,430 years 由 Kongo family 管理**；Matsushita、Nikken、Medtronic、Patagonia、US-based Squeegee Squad 有 100-year plans)
- Duration of specific competitive advantages
- Duration of particular tactics

---

## 第 5 部｜Cluster / Meso Level

### 5.1 完整八组成 (Ch.5 + Lecture Notes Ch.5, Tier 1)

| 组成 | 内容 |
|---|---|
| **Demand** | Size, growth, segment structure, bundling, complementarities |
| **Customers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Inputs** | Factor, human, ecological, produced, outsourced, crowdsourced, technological, infrastructure |
| **Suppliers** | Number, identity, access, bargaining power, price sensitivity, competition potential |
| **Shared Resources / Shared Activities** | 共用 technologies, inputs, customers, knowledge; economies of scope |
| **Complementarities** | 互补产品/服务扩张需求与 WTP |
| **Substitutes** | 间接替代压制利润上限 |
| **Meso Policies & Institutions** | Cluster-specific policies, 产业群集机构 |

### 5.2 Bargaining Power 三轴分析 (Ch.5, Tier 1)

**Intrinsic Bargaining Strength:**
- Concentration
- Volume of purchases
- Availability of substitutes
- Switching costs
- Vertical integration threat
- Pull-through to end-user

**Price Sensitivity:**
- Cost as % of total purchases
- Strategy and positioning
- Buyer/supplier profitability
- Impact on quality/performance

**Willingness to Use Power (Enright 强调的第三轴):**
- 若供应商对 buyer 占比小，可能不全力压榨
- 若 buyer 本身 profitable，可能不用尽 bargaining power
- **实际 bargaining = Intrinsic Strength × Willingness × Price Sensitivity**

### 5.3 Regional Clusters (Ch.5, Tier 1)

案例：Silicon Valley、Hollywood、London / NY finance、Swiss luxury watches、Bangalore BPO、Hsinchu 半导体等。

**Cluster 来源:**
- Natural resources / Scale economies / Proximity to markets / Labor pooling / Local input-equipment suppliers / Shared infrastructure / Reduced transaction costs / Knowledge spillovers

**一旦 self-sustaining 就难以 dislodge。**

### 5.4 Ecosystem 警告 (Ch.5, Tier 1)

Enright 明确警告：externalization 不自动正确。一家 asset-light 公司通常建立在另一家承担 asset-heavy burden。若不清楚 value 在哪被创造、appropriated、defended，容易把 value 送出去。

---

## 第 6 部｜National / Macro Level

### 6.1 四大组成 (Ch.6, Tier 1)

**1. Macroeconomic Conditions**
- Aggregate demand, inflation, interest rates, exchange rates, unemployment
- Fiscal balances, price levels, wage levels, capital markets, savings rates
- 三个维度：level / growth / volatility

**2. Macro Government Policies**
- Monetary, fiscal, trade, investment, industrial, promotion policies
- Infrastructure, manpower, education/training, S&T policies

**3. Macro Institutions**
- Legal, regulatory, property rights, contract enforcement, government quality

**4. Civil Society & Cultural Attributes**
- Agendas, attitudes, social acceptability, cultural patterns
- Social structure, social cohesion

### 6.2 关键细节：Income Distribution (Ch.6, Tier 1)

- 中国、印度人口 size 让 upper class 绝对数量大 — luxury 仍有市场
- **Bottom of the Pyramid (Prahalad):** Coca-Cola 中国农村 US$0.12 仍获利
- BOP strategy：simpler products, smaller quantities, informal channels
- **P&G in China** 是核心 national-level case

### 6.3 考试 framing

不是问「这是不是好 business」，而是问 **「这在这个国家、在这套政策、制度、人口结构、社会条件下，是不是好 business？」**

---

## 第 7 部｜Supranational / Meta Level

### 7.1 八大组成 (Ch.7, Tier 1)

1. **International Geo-politics** — Military conflict, territorial disputes, trade tensions
2. **International Economic Conditions** — Global crises (2008, Covid)
3. **Global Technology Trends** — New product/process/disruptive tech
4. **Social and Environmental Issues** — Climate, inequality, ethics
5. **Multilateral Organizations** — WTO, IMF, World Bank, UNIDO, UNCTAD
6. **Supranational Policies & Trade Blocs** — EU, USMCA, ASEAN
7. **Foreign Governments** — 他国政府影响
8. **Foreign Multinationals & Other Supranational Groups** — NGOs, religious groupings

### 7.2 Enright 的 "Inverted T" World View (Ch.1 verbatim, Tier 1)

World 不是 flat (反 Friedman)。
- 创造 ideas 的地点 (people, companies, locations) 绝不 flat
- 执行 projects 的资源 (HR, factories) 相对 flat
- 关键问题：谁是 flattener (有 ideas 的赢家) / 谁是 flattenee (只能竞争执行的输家)

### 7.3 考试重要性

这一层对 international / corporate strategy 特别重要 — 不只影响 profit 大小，**直接改写 competition structure 本身** (谁能进场、以甚么条件进场)。这也是为何 final 会 weighted toward international 的核心理由。

---

## 第 8 部｜International Strategy (高比重)

### 8.1 八问 Exam Blueprint (Last Day Slide 20, Tier 1)

1. Number of countries
2. Which countries
3. How do five levels differ from home country? (Supranational, national, cluster, industry)
4. What SPARK to have in each country?
5. How to match SPARK to country conditions?
6. How to organize the international company? (Global integration vs Local responsiveness)
7. Similar or different types of countries?
8. Is the international company more than the sum of the parts?

### 8.2 Global / Local 三类切割 (Tier 2 — class reconstruction, reading 支持)

| 类别 | 应 Globalize | 应 Localize |
|---|---|---|
| **Financial / Compliance** | ✓ (envelope + standards) | 仅限 local legal expertise |
| **Market-facing** | 仅限 brand consistency | ✓ (account mgmt, BD, marketing, sales) |
| **Production** | 取决于 scale economies | 常在地化 (logistics, customization) |

**考场使用:** 不强调为「教授分类」，改为从 reading 推出 — *"The article itself implies a split..."*

### 8.3 WPP 案例应用

**错误:** WPP 把 financial controls + compliance 也 localize 给 subsidiary founders → 高风险市场 (印度、中国、巴西、秘鲁) 发生 bribery 是必然。

**正确修正:**
- Compliance 必须 global envelope，即使牺牲 integration speed
- Multi-layer approval for cross-border payments
- Independent audit function reporting to HQ
- Whistleblower protection mechanisms
- Localize 只限 account management、creative、BD、local regulatory expertise

### 8.4 RTZ / Chinalco 案例复杂性

当一个国家同时是 **customer + shareholder + partner + regulator + geopolitical force** 时：
- 不能 one-size-fits-all 国际策略
- 需要 differential SPARK per country
- 特殊 governance arrangement (股东席位、board representation、JV structure per project)
- Simandou (Guinea): 引 Chinalco 换取 political protection
- Activity-level coopetition: iron ore 合作，其他市场可能竞争

---

## 第 9 部｜Corporate Strategy (高比重)

### 9.1 核心问题

**Is the company more than the sum of its parts?**

若不是 → 投资人可自己 diversify portfolio → multi-business firm 没存在意义 → 应分拆。

### 9.2 八问 Exam Blueprint (Last Day Slide 21, Tier 1)

1. Number of industries
2. Which industries
3. How do five levels differ from existing businesses?
4. What SPARK to have in each business?
5. How to match SPARK to business conditions?
6. How to organize the multi-business company?
7. Value created across subsidiaries or between HQ and subsidiaries?
8. Related businesses, unrelated businesses?

### 9.3 Six Value Creation Mechanisms (Tier 1 — 合理推论但多来源支持)

| 机制 | 来源 | 考试检验 |
|---|---|---|
| **Scope economies** | 共用 activities (distribution, procurement, R&D) | 可量化 cost saving 吗？ |
| **Shared resources** | 品牌、技术平台、渠道 | 跨 BU 被用几次？ |
| **Knowledge transfer** | 同类 managerial problem 跨 BU 学习 | 人才轮调频繁吗？ |
| **Internal capital market** | HQ 配资比外部市场准 | 比 WACC benchmark 好吗？ |
| **Managerial discipline** | HQ 施加 operational excellence | 收购后效率提升吗？ |
| **Bargaining leverage** | 跨 BU 对同一供应商 / 客户议价 | 能看到 price concession 吗？ |

**如果以上都没明显 yes → corporate structure 在毁坏 shareholder value → 应分拆。**

### 9.4 Case 对照 (Tier 1)

| Case | Corporate Strategy 启示 |
|---|---|
| **Walmart** (4 分部全 retail) | Focused — scope economies 在 retail 内足够 |
| **Mitsubishi** (10 大类跨全球) | 日本 keiretsu 历史结构，sum-of-parts 常被质疑 |
| **Acer / Wistron 2001 分家** | Corporate scope 内 BU 互相毁坏 (品牌 vs OEM) → 正确分拆 |
| **Disney (Iger)** | Pixar / Marvel / Lucasfilm / Fox 都属 IP content creation → related diversification work |
| **Newell ("Newellization")** | HQ operational discipline 加值 — classic "HQ adds value" 模型 |
| **Swatch Group** | 单一产业内 multi-segment (Breguet → Flik Flak)：segment scope 而非 corporate scope |

---

## 第 10 部｜Implementation (高比重 — Formal Analytical Module)

### 10.1 五段诊断系统 (Implementation lecture + Last Day Slide 22, Tier 1)

**核心 mindset:** 不是背例子，是在新 case 里 diagnose pathology。

| 段落 | 诊断问题 | 工具 | 何时用 |
|---|---|---|---|
| **Knowing-Not Knowing** | 组织看不见甚么？ | Rigorous questioning, outsider view, "do the homework" | 用直觉、conventional wisdom、没做功课 |
| **Knowing-Doing Gap** | 知道了为甚么没动？ | 视觉震撼、legal sanctions、structural incentives | "知道" 但 behavior 没改 |
| **Generating Clarity** | 要求够具体吗？ | "Switch to skim milk" 具体化、audience-start、documented handoffs | Strategy 讲很多人却不动 |
| **Overcoming Resistance** | 抗拒来自哪里？ | 承认情绪、why-first framing、small steps、commitment ladder | 理解了还是不做 |
| **Creating Right Environment** | 环境在奖励甚么？ | 70/30 改环境、pre-set red lines、purpose motivation | 行为持续偏离 |

### 10.2 Knowing-Not-Knowing 七个原因 (Implementation lecture deck verbatim, Tier 1)

1. Problems of framing
2. Incorrect perceptions
3. Issues with reasoning
4. Ignoring the obvious
5. Going along with the pack
6. Believing others have done the homework
7. Willful blindness

### 10.3 Resistance to Change (Implementation lecture deck, Tier 1)

**六个原因:**
Fear of the unknown | Loss of control | Habit | Emotional attachments | Cognitive dissonance | Social influences

**六个应对:**
Acknowledge feelings | Gather information | Take small steps | Seek support | Understand others | Bring people along

### 10.4 Winning Commitment Ladder 六阶 (Implementation lecture deck, Tier 1)

I know → I understand → I am considering → I want to → I will → I commit

**管理陷阱:** 发 memo、开 meeting ≠ "I commit"。"I know" 离 "I commit" 有六层。

### 10.5 Kotter's 8 Accelerators (Implementation lecture deck, Tier 1)

1. Activation — Urgency + Commitment
2. Build guiding coalition
3. Clarify vision
4. Create volunteer army
5. Remove barriers
6. Motivate through progress
7. Sustain / scale efforts
8. Solidify new normal

**Undercommunication 是 change failure #1 原因 (Kotter)。**

### 10.6 Creating Right Environment：70/30 Principle (Apr 8 笔记, Tier 2)

50+ 年社会心理学研究：
- Personality 最多解释 **30%** 的 behavior
- Situation / environment 解释 **70%**
- Managers 系统性**低估** environment
- 改变 behavior 最有效不是改 personality，而是**改环境**

### 10.7 必记具体实验数字 (Apr 8 + Apr 15 笔记, Tier 2)

| 实验 | 关键数字 | 意涵 |
|---|---|---|
| Handwashing (Australian study) | 73% self-report vs 9% observed | Self-report ≠ behavior |
| Seat belt utilization | 1980: 11%, 1990: 49%, 2005: 80%+ | Behavior change 要 25 年 |
| Asch conformity 关键回合 | 37% | Group pressure 强度 |
| Asch with one ally | 5% | Ally 的结构性力量 |
| Asch with private written | ~12% | 匿名化 debias |
| Good Samaritan (早/准/迟) | 63% / 45% / 10% | Situation 打败 personality |
| Telephone Game | 每传一次降 20% | Cross-layer communication 失真 |
| Treatment A (90%) + neg/pos story | 39% / 88% | Narrative vs data power |
| Treatment B (30%) + neg/pos story | 7% / 78% | Narrative vs data power |
| West Virginia "skim milk" | 18% → 35% (6 months) | Specific 胜过 vague |

### 10.8 Willful Blindness 核心引言 (Heffernan, Tier 1)

- "You cannot fix a problem that you refuse to acknowledge."
- "As long as it remains invisible, it is guaranteed to remain insoluble."
- "Silence is the language of inertia."
- "People are about twice as likely to seek information that supports their own point of view as they are to consider an opposing idea."

### 10.9 最可靠的 Implementation Anchors (Tier 1)

Connect-the-dots、Industry profitability ranking、Monty Hall、Willful blindness、Handwashing — 这五个是 lecture deck 直接支持的 primary anchors。**Jobs / Ferguson 降为次级支持**，不作主要 citation。

### 10.10 Nokia 作为 Implementation Transfer 标准案例

**五段式标准作答姿势 (Tier 1 — Last Day Q4 的 rubric 直接支持):**

1. **Classify pathology**
2. **Cite evidence** (reading 原文)
3. **Explain implication for performance**
4. **Explain why firm was susceptible**
5. **Prescribe organizational remedy**

**Nokia Pathology Mapping 完整版 (Tier 1 — reading 原文支持):**

| Pathology | Nokia 证据 | Segment |
|---|---|---|
| Knowing-Not-Knowing / Willful blindness | 2005 research 指出 mobile → handheld computer；2004 已有 prototype；senior management 未采取行动 | 1 |
| Knowing-Doing Gap | 知道 Symbian 不适合 software-rich 体验但 roadmap 未改 | 2 |
| Framing error | "Hardware company" mental model → "software as supporting function" | 1 |
| Communication failure | Mid-level concerns "appeared not to have reached senior management"；objections "not formally recorded" | 3 |
| Going along with pack | "Dominant norm in leadership meetings was alignment" | 1 + 4 |
| Fear-driven reporting | Middle managers "reported optimistic progress despite knowing deadlines unrealistic" | 3 + 5 |
| Pluralistic silence | "Nobody spoke the truth because nobody was certain anyone else was prepared to hear it" | 5 |
| Wrong environment incentive | "Fear of losing social standing by delivering unwelcome assessments" | 5 |
| Structural barrier | 2004 reorg → "overlapping accountabilities, interdivisional rivalry" | 4 + 5 |
| Loss of institutional knowledge | 资深 strategist departure → lost "earlier agility" | Firm-level K |

**为何 Nokia 特别 Susceptible:**
1. Prior success hardening (1998 全球 #1 + $4B 利润 → mental model 锁死)
2. Standard-setting path dependency (Nordic → Europe → World → 相信 hardware+standards 是赢逻辑)
3. Homogeneous leadership (hardware people，缺 software 多元性)
4. Consensus culture (Finnish 文化 valorize 共识)
5. Quarterly shareholder pressure (扭曲内部真话)
6. Multi-layer approval (disruption 无法穿透)

**公司避免步骤:**
- Process design: anonymous written judgments before discussion (Asch 对策)
- Red-team / outside review 72 小时到 4 天试图推翻结论
- Break multi-layer approval for innovation
- Fear-to-truth transition: 明确奖励 bad news reporting
- Leadership diversity
- Early warning: report risks/blockers, not just progress
- Decouple executive compensation from short-term stock
- Institutional knowledge preservation (succession 不因 reorg 清空)
- Applied Kotter: urgency 在危机前
- Commitment Ladder 检查

---

## 第 11 部｜Case Inventory (8 Canonical Cases)

### 11.1 Case-to-Level Heuristic (Last Day Slide 17, Tier 1 grid; 唯一对应为 Tier 3 heuristic)

| Case | 默认 Level | One-sentence Thesis |
|---|---|---|
| **NEC-GTE** | Firm (Leadership) | Kobayashi C&C vision 建立 NEC 但 vision 锁死成未来 liability |
| **Airline Industry** | Industry | 高 fixed + sunk + low differentiation → 结构性低获利 |
| **Powers that Be (GAFAM)** | Supranational / Industry | 平台 economics 非单一 industry，各家 profit engine 差异极大 |
| **Stitch Fix** | 跨层 (Meso / Industry / Meta) | Tech-enabled curated apparel retail, unmet demand, Amazon 威胁下 sustainability 存疑 |
| **Acer-Wistron** | Cluster / Industry | Forward integration 与客户冲突 → 2001 分拆 |
| **Seiko** | Firm (positioning) | Medium → upmarket 动态 positioning |
| **P&G in China** | National | BOP + income distribution + consumer change + digital shift |
| **Disney (Eisner / Iger)** | Firm (Leadership) | Eisner 建厂但 succession 失败；Iger related acquisitions 修复 |

**使用原则:** 作为默认配对，但 reading evidence 优先。Stitch Fix、Powers that Be、P&G 本来就跨层。

### 11.2 Practice Question 案例补充

| 案例 | 用途 |
|---|---|
| **ETA / Swatch** | Industry economics (movement vs watch)、supplier power、竞争政策、appropriability |
| **Home Alone / Culkin** | VRIO on Resources：V 建立、R 稀缺、I 困难、O 失败 → value leak |
| **Natalie Portman** | Forward contract 锁定 resource 的 appropriability 管理 |
| **John Carter / Lone Ranger** | VRIO limits：V+R+I 但 Organization 判断错误仍失败 |
| **Newell** | Corporate Strategy — HQ discipline 加值 |
| **WPP (FCPA)** | International strategy — global/local 切割错误 |
| **RTZ / Chinalco** | International strategy — 多重角色国家关系 |
| **Nokia** | Implementation — 全套 pathology 汇集 |

---

## 第 12 部｜考场攻击流程

### 12.1 Time Allocation (3 小时 4 题假设)

| 时段 | 动作 | 分配 |
|---|---|---|
| 0–5 min | 读所有 questions 不读 reading | 5 |
| 5–15 min | 完整读 reading，边读边 tag 框架 | 10 |
| 15–30 min | Q3 (先做最 bounded 题目) | 15 |
| 30–55 min | Q1 (international 类) | 25 |
| 55–80 min | Q2 (corporate 或其他) | 25 |
| 80–140 min | Q4 (Nokia 类 30 points) | 60 |
| 140–170 min | 回去补三题 conclusions | 30 |
| 170–180 min | Final scan：每题 conclusion? 引用具体? | 10 |

### 12.2 Question Trigger → Tool Mapping

| Reading 中的 trigger words | 对应工具 |
|---|---|
| "profitability", "industry structure", "competition" | Underlying economics 7 维 + Table 4.3 + ferocity 9 drivers |
| "bargaining", "buyer/supplier power" | Intrinsic strength + willingness + price sensitivity |
| "foreign", "international", "country" | 5-level home vs host + SPARK match + Global/Local 3 类切 |
| "multi-business", "subsidiary", "corporate" | Corporate strategy 6 mechanisms + "sum of parts" test |
| "leadership", "organization", "execution" | Implementation 5-block + 70/30 + commitment ladder + Kotter |
| "resource", "competitive advantage" | VRIO + ARK of SPARK |
| "future competition", "threat", "sustainability" | **CEA 7 questions + lead firm type + unmet demand** |
| "case X illustrates level Y" | Five-level template + specific case evidence (Slide 17 heuristic) |

### 12.3 答题结构 (每题都用)

\`\`\`
1. Identify focal firm + industry (form + function + direct competition)
2. 若 business-facing: Underlying economics 6 问快速扫描
3. Identify which levels 最 binding (只列 binding，不写全五层)
4. Apply 对应工具 (SPARK / Table 4.3 / bargaining / CEA / Implementation diagnosis)
5. Cite 具体 case evidence (数字、quotes、事件)
6. Conclude with BARD 或 POE 语气
7. 若题目要求: formulate action + anticipate implementation barriers
\`\`\`

### 12.4 Fatal Error Checklist

- ❌ 没有 conclusion (零分)
- ❌ Performance 声称没指明 comparator (相对于谁？)
- ❌ 只列 framework 没做 causal application
- ❌ Case 用错 level (Slide 17 heuristic)
- ❌ Q1 重复使用同一 case
- ❌ 塞 extraneous material
- ❌ Implementation 题只重述 story 不做 diagnosis
- ❌ International 题 global/local 不分类
- ❌ 没做 CEA (只分析今天 competitors)
- ❌ 忽略 underlying economics 直接跳到 strategy language
- ❌ 用 Prahalad-Hamel "core competence" framing 回答 firm-level (Enright 明言警告)
- ❌ 用 "tech industry" 笼统 framing (应逐家公司分析)
- ❌ 答案塞入 vocabulary display (Enright 要 causal reasoning)

---

## 第 13 部｜考场 Cheat Sheet (一页手写版)

考前自己手写这一页能建立 muscle memory。

### 13.1 Five Levels 骨架

\`\`\`
Meta/Supranational:  geopolitics, tech trends, multilateral, trade blocs
Macro/National:       macro econ, gov policies, institutions, civil society
Meso/Cluster:         demand/customers, inputs/suppliers, complements/substitutes, shared
Micro/Industry:       characteristics, competition (9), cooperation, lead firms, groupings
Firm:                 SPARK + Leadership + Execution + Org/Mgmt + Governance + Policies
\`\`\`

### 13.2 Performance Relative 4 Comparators

Competitors | Benchmarks | History | Expectations

### 13.3 Economics 7 维

Scale | Scope | Learning | Network | Nexus | Standards | Fixed / Sunk / Variable

### 13.4 Competition 三维

Type (5) | Variables (7) | Ferocity (9)

### 13.5 Firm Level 核心

**SPARK** — Scope, Positioning, Activities, Resources, Knowledge
**VRIO** — Valuable, Rare, Inimitable, Organized (套在 A, R, K)
**CEA 7 Qs** — optimize / leverage / overcome / add / taken over / if we managed / future

### 13.6 Industry Analysis Template (加 Lead Firm)

Economics → Competition type → Variables → Ferocity → **Lead firm role** → Profit

### 13.7 Implementation 5 段 + 关键数字

1. Knowing-Not-Knowing (7 原因)
2. Knowing-Doing Gap (73%/9%, 11%→80%)
3. Generating Clarity (20% loss per pass; 18%→35% skim milk)
4. Overcoming Resistance (6 + 6) + Commitment Ladder
5. Creating Right Environment (70/30; Good Samaritan 63/45/10; Asch 37/5/12)

### 13.8 Dysfunction (Ch.1 paraphrase)

- Analysis + Leadership without action → **paralysis**
- Action + Leadership without analysis → **random / misdirected**
- Analysis + Action without leadership → **scattered and confused**

### 13.9 BARD / POE

强 evidence → BARD 语气："evidence clearly indicates"
弱 evidence → POE 语气："on balance, suggests"

### 13.10 Enright 核心引言

- "Don't stop at the first explanation that fits the fact pattern." (Wittgenstein)
- "People see what they are incentivized to see." (Burry / Big Short)
- "Silence is the language of inertia." (Heffernan)
- "First lemming off the cliff may be a great leader but is a lousy strategist." (Enright)

### 13.11 Case-Level Heuristic (Slide 17)

NEC-GTE → Firm | Airline → Industry | Powers that Be → Supra/Industry
Stitch Fix → 跨层 | Acer-Wistron → Cluster/Industry | Seiko → Firm
P&G in China → National | Disney → Firm

### 13.12 International 题三类切

Financial / Compliance → Globalize
Market-facing → Localize
Production → Scale-dependent

### 13.13 Corporate 题 6 机制

Scope economies | Shared resources | Knowledge transfer | Internal capital market | Managerial discipline | Bargaining leverage

### 13.14 Nokia 五段式答题 Default Shape

1. Classify pathology
2. Cite evidence (reading 原文)
3. Explain implication
4. Explain susceptibility
5. Prescribe remedy

---

## 第 14 部｜信度分级 (考场应用指南)

### Tier 1: 最高信度 — Primary Source Verbatim (可自信引用)

- Five-Level Framework (Ch.2)
- SPARK 五元素 (Ch.3 Figure 3.6)
- Performance relative 4 comparators (Ch.2)
- Industry definition: form + function + direct competition (Ch.4)
- 三个 dysfunction 内容 — Ch.1 原文已确认
- Kongo Gumi 1,430 years — Ch.3 原文已确认 (但 exam priority 较低)
- Economics 7 维 (Last Day Slide 18)
- CEA + 七问 (Ch.4 Table 4.5)
- Lead Firm 六类型 (Ch.4)
- Coopetition / Ray Noorda (Ch.4)
- Inverted T (Ch.1)
- "First lemming" (Ch.1-2)
- Implementation 五段骨架、7 原因、6+6、Commitment Ladder、Kotter 8 (Lecture deck)
- International / Corporate 八问 (Last Day Slides 20-21)
- 6-3-10、方法链、4 Commandments、¼ × 4 (Last Day)
- "Weighted toward international / corporate / implementation" (Last Day Slide 23)
- Nokia reading + Practice Questions (Last Day Slides 31-34)
- VRIO on ARK (Last Day Slide 19)
- 案例 Walmart vs Mitsubishi、Swatch multi-segment、Kobayashi NEC 双面刃 (Ch.3)

### Tier 2: 高信度 — User-Verified Reconstruction (可用，保守语气)

- Handwashing 73%/9%、Seat belt 11%→80%、Asch 37%/5%/12%、Good Samaritan 63%/45%/10%、Telephone 20%、West Virginia 18%→35%、Treatment A/B 39%/88%/7%/78% (Apr 8 + Apr 15 笔记)
- 70/30 personality vs environment
- Asch 对策 (anonymous written, 72-hour red team)
- Global / Local 三类切 (reading 支持，非 slide verbatim)
- 用户亲自验证的实验机制

### Tier 3: 合理推论 (可用作答，不强调出处)

- BARD / POE 的法律解读 (方向正确，非 Enright verbatim 定义)
- Water meter 三方采购分离逻辑
- Case-to-level 单一配对 (作为 default heuristic)
- Six value creation mechanisms (合理推论但多来源支持)
- Dysfunction formulas 的公式格式 (内容 Tier 1，格式我方 restatement)

### Tier 4: 不建议直接使用

- "Useful output principle" 名词 (改用 Ch.4 verbatim)
- Steve Jobs / Alex Ferguson 作为主要 anchor
- "February 1 material 有直接 quote" (ChatGPT 独有，无法验证)
- 70% 复习时间分配 (我方建议，非 Enright)
- Metcalfe's Law 名称与 n² 强调 (用保守网路效应语言)
- Prahalad-Hamel core competence framing 回答 NEC (Ch.2 警告)

---

## 第 15 部｜最终一句话总纲 (双 AI 共识版)

**EN:**
> **Start with underlying economics, identify the binding levels in the five-level framework, test the focal firm's SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value the analysis suggests should be available.**

**中:**
> **先从 underlying economics 下手，找出 five-level framework 里真正 binding 的层次，再检验 focal firm 的 SPARK 加上 leadership 与 execution，用 CEA 压测未来竞争，最后再问 organization 与 implementation 是否真的让分析上应该存在的价值，能被实现并守住。**

这句话整合了：
- **Underlying economics 作起点**
- **Binding levels** (非全五层)
- **SPARK + Leadership + Execution** (非只静态 SPARK)
- **CEA 压测未来** (动态工具)
- **Organization + Implementation** (落地检验)
- **Realize and defend** (不只创造还要守住)

---

## v1.1 修订总览

| 位置 | 变动 |
|---|---|
| 新增 4.0 节 | Performance relative 4 comparators (Competitors / Benchmarks / History / Expectations) |
| 4.7 节首句 | 加注 Exam priority 较低，资源分配让位给 economics / CEA / implementation / international / corporate |
| 12.4 Fatal Error Checklist | 新增「Performance 声称没指明 comparator」为第 2 项错误 |
| 13.2 Cheat Sheet | 新增 Performance Relative 4 Comparators 区块 |

**其余结构与内容完全保留。**

---

## 最终指示

### 1. Enright 真正要看到的 exam behavior

教授明示目标：*"Not for you to be better students, but to help you become better professionals."* 考场上您不是证明背多少，而是展示：**2 小时内能否像 consulting partner 第一次看 case 那样运作。**

每个答题动作都要有 purpose：
- 不是写「SPARK 有五个元素」，而是 *"Here's why Scope matters here specifically"*
- 不是写「bargaining power 公式」，而是 *"Here's who actually captures value after bargaining"*
- 不是写「Nokia 有 pluralistic silence」，而是 *"Here's how this silence mapped to specific shareholder pressure signals"*

### 2. 遇到不确定时的优先顺序

1. Underlying economics (先搞清楚这个 business 怎么赚钱)
2. 哪几个 level binding (不写全五层)
3. 该 firm 的 SPARK + Leadership + Execution
4. CEA + unmet demand + Lead firm type (未来 threat / opportunity)
5. Conclusion with BARD or POE (并指明 performance comparator)

这五步能涵盖 80% 的题目。其余 20% 加 International / Corporate / Implementation 特定工具。

### 3. 考前 48 小时建议

- **Day -2:** 找 2–3 篇 FT / Economist 商业文章，45 分钟限时套 Enright 方法
- **Day -1:** 重看 Apr 8 + Apr 15 笔记；把 pathology 清单变 checklist；手写一页 cheat sheet
- **考试当天:** 只重温手写 cheat sheet，不再看大量材料
`;

const sectionMeta = [
  { id: "overview", tag: "weighted", en: "Exam Signals", zh: "考試訊號", refs: ["Session 1", "Last Day", "Master Review"], search: "weighted toward international corporate implementation read the questions use the right tools don't include extraneous material time wisely cases required lecture notes videos closed book grading" },
  { id: "spine", tag: "tools", en: "Analytical Spine", zh: "分析脊椎", refs: ["Last Day", "Chapter 2", "Master Review"], search: "search sort analyze hypothesize test conclude BARD POE formulate implement 6 inches 3 meters 10 meters four commandments strategy philosophy" },
  { id: "economics", tag: "tools", en: "Underlying Economics", zh: "底層經濟結構", refs: ["Last Day", "Chapter 4", "Master Review"], search: "scale scope learning network nexus standards fixed sunk variable costs profitability ranking airlines automobiles pharmaceuticals semiconductors pcs water meters" },
  { id: "industry", tag: "tools", en: "Industry Level", zh: "產業層次", refs: ["Chapter 4", "Lecture Notes Ch.4", "Master Review"], search: "industry definition five types competition monopoly oligopoly hypercompetition perfect competition subsidized competition ferocity competitive variables lead firms CEA coopetition" },
  { id: "firm", tag: "tools", en: "Firm Level", zh: "公司層次", refs: ["Chapter 3", "Practice Questions", "Master Review"], search: "SPARK VRIO ARK leadership execution organization governance scope positioning activities resources knowledge performance relative comparators dysfunction formulas Home Alone Natalie Portman John Carter Lone Ranger" },
  { id: "meso", tag: "tools", en: "Cluster / Meso Level", zh: "中觀 / 產業群聚", refs: ["Chapter 5", "Lecture Notes Ch.5", "Master Review"], search: "cluster demand customers inputs suppliers complementarities substitutes bargaining price sensitivity willingness regional clusters ecosystem externalization" },
  { id: "macro", tag: "tools", en: "National / Macro Level", zh: "國家 / 總體層次", refs: ["Chapter 6", "P&G in China", "Master Review"], search: "macroeconomic conditions macro government policies macro institutions civil society demographics income distribution bottom of the pyramid P&G China" },
  { id: "meta", tag: "tools", en: "Supranational / Meta Level", zh: "超國家 / 全球層次", refs: ["Chapter 1", "Chapter 7", "Master Review"], search: "geopolitics international economic conditions global technology trends multilateral organizations trade blocs foreign governments foreign multinationals inverted T flattener flattenee" },
  { id: "international", tag: "weighted", en: "International Strategy", zh: "國際策略", refs: ["Last Day", "Master Review"], search: "international strategy eight questions global local compliance market facing production WPP RTZ Chinalco differential SPARK" },
  { id: "corporate", tag: "weighted", en: "Corporate Strategy", zh: "企業總體策略", refs: ["Last Day", "Chapter 3", "Master Review"], search: "corporate strategy sum of parts eight questions scope economies shared resources knowledge transfer internal capital market managerial discipline bargaining leverage Disney Newell Walmart Mitsubishi Acer Wistron" },
  { id: "implementation", tag: "weighted", en: "Implementation", zh: "落地與執行", refs: ["Implementation Lecture", "Last Day", "Nokia Reading", "Master Review"], search: "implementation knowing-not-knowing knowing-doing gap generating clarity overcoming resistance creating the right environment commitment ladder Kotter 8 70 30 Asch Good Samaritan telephone handwashing seat belt Nokia" },
  { id: "cases", tag: "cases", en: "Case Grid", zh: "案例總表", refs: ["Last Day", "Practice Questions", "Case Files", "Master Review"], search: "NEC GTE airline Powers that Be Stitch Fix Acer Wistron Seiko P&G Disney ETA Swatch WPP RTZ Chinalco Nokia" },
  { id: "exam", tag: "weighted", en: "Exam Attack System", zh: "考場攻擊系統", refs: ["Last Day", "Master Review"], search: "time allocation trigger tool mapping fatal errors answer shape cheat sheet confidence tiers final one sentence" },
  { id: "appendix", tag: "appendix", en: "Source Fidelity Appendix", zh: "原始內容附錄", refs: ["Master Review"], search: "source appendix original markdown complete content exact original" },
];

const chips = [
  { key: "all", en: "All", zh: "全部" },
  { key: "weighted", en: "High Weight", zh: "高權重" },
  { key: "tools", en: "Frameworks", zh: "工具框架" },
  { key: "cases", en: "Cases", zh: "案例" },
  { key: "appendix", en: "Appendix", zh: "附錄" },
];

function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}


const VI_MAP = {
  "Exam Signals": "Tín hiệu kỳ thi",
  "Analytical Spine": "Xương sống phân tích",
  "Underlying Economics": "Underlying economics",
  "Industry Level": "Cấp ngành",
  "Firm Level": "Cấp doanh nghiệp",
  "Cluster / Meso Level": "Cấp cluster / meso",
  "National / Macro Level": "Cấp quốc gia / macro",
  "Supranational / Meta Level": "Cấp siêu quốc gia / meta",
  "International Strategy": "Chiến lược quốc tế",
  "Corporate Strategy": "Chiến lược corporate",
  "Implementation": "Implementation",
  "Case Grid": "Lưới case",
  "Exam Attack System": "Hệ thống tấn công bài thi",
  "Source Fidelity Appendix": "Appendix bảo toàn nguyên bản",
  "All": "Tất cả",
  "High Weight": "Trọng số cao",
  "Frameworks": "Framework",
  "Cases": "Case",
  "Appendix": "Appendix",
  "Industry": "Ngành",
  "Meso / Cluster": "Meso / cluster",
  "Macro / National": "Macro / quốc gia",
  "Meta / Supranational": "Meta / siêu quốc gia",
  "Firm": "Doanh nghiệp",
  "Five-level reading map": "Sơ đồ đọc theo 5 tầng",
  "Why economics sits upstream": "Vì sao economics phải được xét trước",
  "Three-step industry boundary method": "Phương pháp 3 bước để xác định ranh giới ngành",
  "SPARK is the core, not the whole answer": "SPARK là lõi, nhưng chưa phải toàn bộ câu trả lời",
  "Fast case-to-level scan": "Quét nhanh case theo từng tầng",
  "Five-level reading order": "Thứ tự đọc theo 5 tầng",
  "Industry boundary tools": "Công cụ xác định ranh giới ngành",
  "Industry economics question board": "Bảng câu hỏi economics của ngành",
  "Firm architecture": "Kiến trúc cấp doanh nghiệp",
  "Cluster logic map": "Bản đồ logic cluster",
  "Macro diagnostic board": "Bảng chẩn đoán macro",
  "Meta pressure map": "Bản đồ áp lực meta",
  "International architecture": "Kiến trúc chiến lược quốc tế",
  "Corporate value creation board": "Bảng tạo giá trị ở cấp corporate",
  "Implementation diagnosis flow": "Luồng chẩn đoán implementation",
  "Answer construction flow": "Luồng dựng câu trả lời",
  "What the exam is really testing": "Kỳ thi này thực sự đang kiểm tra điều gì",
  "Reader orientation": "Định hướng cho người đọc",
  "Read the question": "Đọc đúng câu hỏi",
  "Use the right tool": "Dùng đúng công cụ",
  "No extraneous material": "Không đưa vật liệu thừa",
  "Use time wisely": "Dùng thời gian cho khôn ngoan",
  "Professional standard, not student display": "Chuẩn chuyên nghiệp, không phải kiểu phô diễn của sinh viên",
  "Weighted focus": "Trọng tâm ưu tiên",
  "Core exam behavior": "Hành vi cốt lõi trong phòng thi",
  "Coverage check": "Kiểm tra độ bao phủ",
  "The analytical spine": "Xương sống phân tích",
  "Full chain": "Chuỗi đầy đủ",
  "BARD and POE": "BARD và POE",
  "6 inches, 3 meters, 10 meters": "6 inches, 3 mét, 10 mét",
  "The four commandments": "Bốn mệnh lệnh",
  "Strategy philosophy": "Triết lý chiến lược",
  "Why this section comes first": "Vì sao phần này phải đi trước",
  "Three cost types and what they do": "Ba loại chi phí và tác động của chúng",
  "Six fast industry-economics questions": "Sáu câu hỏi economics của ngành để quét nhanh",
  "Profitability ranking visual": "Hình hóa xếp hạng profitability",
  "Industry level": "Cấp ngành",
  "Industry definition": "Định nghĩa ngành",
  "Competition type spectrum": "Phổ loại hình cạnh tranh",
  "Three dimensions of competition": "Ba chiều của cạnh tranh",
  "Ferocity checklist": "Checklist về độ khốc liệt cạnh tranh",
  "Lead firm logic": "Logic lead firm",
  "Competitor Envelope Analysis™": "Competitor Envelope Analysis™",
  "Coopetition": "Coopetition",
  "Firm level": "Cấp doanh nghiệp",
  "Performance is relative": "Performance là khái niệm tương đối",
  "SPARK": "SPARK",
  "Do not stop at SPARK": "Đừng dừng lại ở SPARK",
  "Scope logic": "Logic về scope",
  "The three dysfunction formulas": "Ba công thức gây dysfunction",
  "Leadership is a double-edged sword": "Leadership là con dao hai lưỡi",
  "VRIO applied to A, R, and K": "Áp VRIO vào A, R và K",
  "Time dimension": "Chiều thời gian",
  "Cluster / meso level": "Cấp cluster / meso",
  "Eight building blocks": "Tám khối cấu thành",
  "Bargaining power is a three-axis diagnosis": "Bargaining power cần chẩn đoán theo ba trục",
  "Regional clusters and why they persist": "Vì sao regional clusters bền vững",
  "Ecosystem warning": "Cảnh báo về ecosystem",
  "National / macro level": "Cấp quốc gia / macro",
  "Income distribution matters more than headline averages suggest": "Phân phối thu nhập quan trọng hơn mức bình quân bề ngoài",
  "Exam framing": "Khung đặt câu hỏi cho bài thi",
  "Supranational / meta level": "Cấp siêu quốc gia / meta",
  "Eight supranational drivers": "Tám driver ở cấp siêu quốc gia",
  "Why this matters so much for the final": "Vì sao phần này đặc biệt quan trọng trong final",
  "Eight-question blueprint": "Bản thiết kế 8 câu hỏi",
  "Global / local split": "Tách bạch global / local",
  "Case transfer": "Chuyển logic case",
  "First test": "Phép thử đầu tiên",
  "Six value-creation mechanisms": "Sáu cơ chế tạo giá trị",
  "Canonical case signals": "Tín hiệu case kinh điển",
  "The five-block implementation system": "Hệ thống implementation gồm 5 khối",
  "Knowing-Not-Knowing: seven reasons": "Knowing-Not-Knowing: bảy nguyên nhân",
  "Resistance and the commitment ladder": "Kháng cự và thang cam kết",
  "Behavioral anchors and why they matter": "Điểm tựa hành vi và vì sao chúng quan trọng",
  "Handwashing self-report": "Tự báo cáo về rửa tay",
  "Handwashing observed": "Rửa tay được quan sát thực tế",
  "Asch conformity": "Sự tuân theo số đông kiểu Asch",
  "Asch with one ally": "Asch khi có một đồng minh",
  "Private written response": "Trả lời riêng bằng văn bản",
  "Good Samaritan, early": "Good Samaritan, sớm",
  "Good Samaritan, on time": "Good Samaritan, đúng giờ",
  "Good Samaritan, late": "Good Samaritan, trễ",
  "Telephone-game loss per pass": "Mất mát qua mỗi lượt trong trò chơi truyền tin",
  "70 / 30 principle": "Nguyên tắc 70 / 30",
  "Kotter’s eight accelerators": "Tám bộ tăng tốc của Kotter",
  "Nokia as the implementation transfer case": "Nokia như case chuyển sang implementation",
  "Why Nokia was susceptible": "Vì sao Nokia dễ bị tổn thương",
  "What firms should do instead": "Doanh nghiệp đáng ra phải làm gì",
  "Practice-question cases": "Các case trong bộ practice questions",
  "Suggested 180-minute allocation": "Phân bổ gợi ý cho 180 phút",
  "Question trigger → tool mapping": "Dấu hiệu câu hỏi → công cụ phù hợp",
  "Default answer shape": "Hình dạng mặc định của câu trả lời",
  "Fatal errors": "Những lỗi chí mạng",
  "One-page hand cheat sheet": "Tờ cheat sheet một trang",
  "Confidence tiers and safe usage": "Các mức độ tự tin và cách dùng an toàn",
  "Why this appendix exists": "Vì sao cần giữ appendix này",
  "Course signals": "Tín hiệu từ khóa học",
  "Method": "Phương pháp",
  "Start here": "Bắt đầu từ đây",
  "Micro drivers": "Driver ở cấp micro",
  "SPARK and beyond": "SPARK và phần mở rộng",
  "Business ecosystems": "Business ecosystems",
  "Country conditions": "Điều kiện quốc gia",
  "Beyond the nation": "Vượt ra ngoài biên giới quốc gia",
  "High-weight playbook": "Playbook trọng số cao",
  "High-weight organizational diagnosis": "Chẩn đoán tổ chức ở mức ưu tiên cao",
  "Default mappings": "Mapping mặc định",
  "Execution under pressure": "Execution dưới áp lực",
  "Nothing dropped from the pasted backbone": "Không bỏ sót gì khỏi backbone đã dán vào",
  "Strategic Decision-Making Review System": "Hệ thống ôn tập Strategic Decision-Making",
  "Competition spectrum": "Phổ cạnh tranh",
  "Strategy side": "Phía chiến lược",
  "Relative performance": "Performance tương đối",
  "Execution side": "Phía execution",
  "Inputs & suppliers": "Inputs & suppliers",
  "Shared resources & activities": "Shared resources & activities",
  "Focal industry / firm": "Ngành / doanh nghiệp trọng tâm",
  "Demand & customers": "Demand & customers",
  "Complements & substitutes": "Complements & substitutes",
  "Meso policies & institutions": "Chính sách và thể chế ở cấp meso",
  "Rule rewrite": "Viết lại luật chơi",
  "Four workstreams": "Bốn tuyến công việc",
  "Select": "Chọn",
  "Compare": "So sánh",
  "Configure": "Cấu hình",
  "Organize": "Tổ chức",
  "Central test": "Phép thử trung tâm",
  "Reading map": "Sơ đồ đọc",
  "No sections match the current filter.": "Không có section nào khớp với bộ lọc hiện tại.",
  "Try a broader search term or switch the chip filter back to All.": "Hãy thử từ khóa rộng hơn, hoặc chuyển chip filter về All.",
  "What useful output does the customer actually receive?": "Khách hàng thực sự nhận được đầu ra hữu ích nào?",
  "Who is directly competing to supply that same output?": "Ai đang cạnh tranh trực tiếp để cung cấp đúng đầu ra đó?",
  "Draw the industry boundary from that customer-facing output, not from the technology label.": "Hãy vẽ ranh giới ngành từ đầu ra mà khách hàng cảm nhận được, không phải từ nhãn công nghệ.",
  "Scope": "Scope",
  "Positioning": "Positioning",
  "Activities": "Activities",
  "Resources": "Resources",
  "Knowledge": "Knowledge",
  "Leadership": "Leadership",
  "Execution": "Execution",
  "Organization & management": "Tổ chức & quản lý",
  "Governance": "Governance",
  "Start with the industry. Define the strategically meaningful competitive field first.": "Hãy bắt đầu từ ngành. Trước hết phải xác định sân cạnh tranh có ý nghĩa chiến lược.",
  "Move outward to the cluster or ecosystem that shapes suppliers, customers, complements, and substitutes.": "Sau đó mở rộng ra cluster hoặc ecosystem đang định hình suppliers, customers, complements và substitutes.",
  "Then test the country context that enables or blocks the business model.": "Tiếp theo kiểm tra bối cảnh quốc gia đang hỗ trợ hay cản business model.",
  "Then layer in supranational pressures that rewrite the rules above the nation state.": "Rồi cộng thêm các áp lực siêu quốc gia đang viết lại luật chơi bên trên cấp quốc gia.",
  "Only then judge the firm itself. Strong firms inside bad structures still struggle.": "Chỉ sau đó mới đánh giá bản thân doanh nghiệp. Công ty mạnh nhưng nằm trong cấu trúc xấu vẫn sẽ rất chật vật.",
  "Sources": "Nguồn",
  "Language": "Ngôn ngữ",
  "Search keyword, case, or tool…": "Tìm từ khóa, case hoặc công cụ…",
  "Show source appendix": "Mở appendix nguồn gốc",
  "Hide source appendix": "Ẩn appendix nguồn gốc",
  "Original pasted master review": "Bản master review gốc đã dán vào",
  "Language switch": "Chuyển ngôn ngữ",
  "EN": "EN",
  "中": "中文",
  "BI": "Song ngữ",
  "Tiếng Việt": "Tiếng Việt",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "Giao diện chính đã được tái cấu trúc để dễ đọc hơn và dùng tốt hơn trong bối cảnh làm bài thi. Appendix này giữ nguyên bản master review đã dán vào trong file, để bản infrastructure nâng cấp không vô tình làm rơi backbone gốc.",
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "Bản dựng này được thiết kế như một hệ thống ôn tập hướng tới người dùng cuối, không phải bản báo cáo tiến độ. Nó giả định rằng bạn cần đọc nhanh, nhìn ra cấu trúc ngay, và chuyển từ concept sang ứng dụng vào case mà không làm mất độ trung thực của nội dung.",
  "Answer the question in front of you, not the one you hoped to get.": "Hãy trả lời đúng câu hỏi đang ở trước mặt, không phải câu hỏi bạn mong sẽ ra.",
  "Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger.": "Đừng biến framework thành từ vựng để khoe. Hãy chọn đúng công cụ phân tích theo tín hiệu của case.",
  "Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades.": "Chỉ viết những tầng thật sự binding. Lý thuyết thừa, case thừa và filler chung chung sẽ làm loãng điểm.",
  "The exam rewards disciplined triage, not maximum text volume.": "Kỳ thi thưởng cho khả năng triage có kỷ luật, không thưởng cho câu trả lời dài nhất.",
  "This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix.": "Infrastructure này được dựng trên backbone final review đã dán vào và đã được đối chiếu với course text, framing của Session 1, deck Last Day, bài giảng implementation, practice questions và các case trọng yếu. Toàn bộ ghi chú gốc đã dán vẫn được giữ lại trong appendix.",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "Logic của kỳ thi rất rõ: trước khi dùng ngôn ngữ strategy, phải hiểu doanh nghiệp kiếm tiền như thế nào. Underlying economics định hình cấu trúc ngành; cấu trúc ngành định hình cạnh tranh; cạnh tranh định hình profit potential; rồi sau đó mới được điều chỉnh bởi SPARK, vị thế bargaining, leadership và execution của doanh nghiệp trọng tâm.",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "Một insight ăn điểm cao về Nokia là: Nokia từng đóng vai trò standard setter vì các tiêu chuẩn Bắc Âu đã trở thành tiêu chuẩn châu Âu rồi toàn cầu. Sau đó Apple định nghĩa lại chuẩn quanh software platform, biến Apple thành frame-breaker và khoét rỗng lợi thế cũ của Nokia.",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "Đừng dừng lại ở các đối thủ hiện tại. Hãy cộng thêm các entrant từ related industries và các unmet demand segments. Nhiều mối đe dọa lớn nhất đến từ đúng hai hướng này.",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "Coopetition nghĩa là cùng một nhóm người chơi có thể hợp tác ở một hoạt động nhưng cạnh tranh ở hoạt động khác. Khi làm bài thi, hãy tách mối quan hệ ở cấp activity thay vì dán nhãn bên kia chỉ là bạn hay thù.",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "Bất kỳ nhận định nào về việc một firm đang làm tốt hay kém đều phải nêu comparator trước. Viết rằng “performance is weak” mà không chỉ ra mốc so sánh là không an toàn về mặt cơ học làm bài.",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "Externalization không tự động là tốt. Chiến lược asset-light của một công ty thường dựa trên việc một công ty khác phải gánh asset-heavy burden. Nếu bạn không chỉ ra được value được tạo ở đâu, appropriated ở đâu và defended ở đâu, rất có thể bạn đang trao luôn value đó cho người khác.",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "Thế giới không flat theo cách mà nhiều bài viết đại chúng thường mô tả. Năng lực tạo ra ideas vẫn tập trung rất cao ở một số người, công ty và địa điểm cụ thể; trong khi nguồn lực execution lại phân tán rộng hơn nhiều. Câu hỏi chiến lược then chốt là ai trở thành flattener, và ai bị ép xuống chỉ còn cạnh tranh bằng execution.",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "Các supranational drivers không chỉ làm thay đổi mức lợi nhuận. Chúng có thể viết lại ai được phép vào cuộc chơi, theo bộ luật nào, với công nghệ nào và dưới các ràng buộc địa chính trị ra sao. Đó là lý do chúng nặng ký bất thường trong các câu hỏi về international và corporate strategy.",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "Công ty có thực sự đáng giá hơn tổng các phần hay không? Nếu câu trả lời là không, nhà đầu tư có thể tự đa dạng hóa danh mục, còn cấu trúc corporate khi đó có thể đang phá hủy value chứ không tạo ra value.",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "Sai lầm quản trị nằm ở việc đánh giá thấp môi trường một cách có hệ thống. Điểm dạy học ở đây là hành vi được giải thích bởi tình huống nhiều hơn rất nhiều so với trực giác của nhà quản lý. Nếu muốn thay đổi hành vi, hãy thiết kế lại môi trường thay vì chỉ lên lớp về tính cách.",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "Một câu chốt cho final: bắt đầu từ underlying economics, xác định các tầng thật sự binding, kiểm tra SPARK cùng leadership và execution, dùng CEA để pressure-test cạnh tranh tương lai, rồi mới hỏi xem organization và implementation có cho phép firm hiện thực hóa và bảo vệ giá trị vốn dĩ phải có hay không.",
  "Bắt đầu từ đây": "Bắt đầu từ đây",
  "Meso": "Meso",
  "Macro": "Macro",
  "Meta": "Meta",
  "Bắt đầu từ ngành có ý nghĩa kinh tế thực sự.": "Bắt đầu từ ngành có ý nghĩa kinh tế thực sự.",
  "Start with the economically meaningful industry.": "Bắt đầu từ ngành có ý nghĩa kinh tế thực sự.",
  "Then test the ecosystem around the focal business.": "Sau đó kiểm tra ecosystem quanh doanh nghiệp trọng tâm.",
  "Check the national environment and its trendline.": "Kiểm tra môi trường quốc gia và đường xu hướng của nó.",
  "Add the cross-border forces outside national control.": "Bổ sung các lực xuyên biên giới nằm ngoài kiểm soát của quốc gia.",
  "Only then judge SPARK, leadership, execution, and fit.": "Chỉ khi đó mới đánh giá SPARK, leadership, execution và độ fit.",
  "Where we compete": "Nơi ta cạnh tranh",
  "How we compete": "Cách ta cạnh tranh",
  "What we do": "Ta làm gì",
  "What we use": "Ta dùng gì",
  "What we know": "Ta biết gì",
  "Hide source appendix / 收起原始內容": "Ẩn appendix nguồn gốc",
  "Show source appendix / 展開原始內容": "Mở appendix nguồn gốc",
  "收起原始內容": "Thu gọn nội dung gốc",
  "展開原始內容": "Mở nội dung gốc"
};


const VI_DEEP_MAP = {
  "10 meters away: solve the puzzle of value creation, competitive advantage, and appropriability.": "Ở khoảng cách 10 mét: giải toàn bộ bức tranh về tạo giá trị, lợi thế cạnh tranh và khả năng chiếm giữ giá trị.",
  "3 meters away: extract the major conclusion from each analytical block.": "Ở khoảng cách 3 mét: rút ra kết luận chính từ từng khối phân tích.",
  "6 inches away: organize facts, numbers, quotes, and events into the framework.": "Ở khoảng cách 6 inch: sắp xếp fact, số liệu, trích dẫn và sự kiện vào đúng framework.",
  "A limited number of firms competing with interdependence.": "Một số ít doanh nghiệp cạnh tranh trong trạng thái phụ thuộc lẫn nhau.",
  "A tech-enabled apparel model sits across meso, industry, and meta pressures, especially future competition and unmet demand.": "Mô hình may mặc được hỗ trợ bởi công nghệ này đồng thời nằm dưới áp lực meso, ngành và meta, đặc biệt là cạnh tranh tương lai và nhu cầu chưa được đáp ứng.",
  "Account management, BD, marketing, sales": "Quản lý khách hàng, phát triển kinh doanh, marketing, bán hàng",
  "Acer / Wistron: when units inside the same corporation undermine each other, breakup can be the value-creating move.": "Acer / Wistron: khi các đơn vị trong cùng một tập đoàn triệt tiêu lẫn nhau, tách ra có thể mới là bước tạo giá trị.",
  "Action is missing from analysis + leadership": "Thiếu hành động trong tổ hợp analysis + leadership",
  "Airline industry": "Ngành hàng không",
  "Airlines": "Hàng không",
  "Analysis is missing from action + leadership": "Thiếu phân tích trong tổ hợp action + leadership",
  "Analyze": "Phân tích",
  "Apply the right tool, not the whole framework library.": "Hãy dùng đúng công cụ, không phải bê cả thư viện framework vào bài.",
  "Are the businesses related or unrelated?": "Các mảng kinh doanh này có liên quan với nhau hay không?",
  "Are the countries similar or different?": "Các quốc gia này tương đồng hay khác biệt?",
  "Are the countries similar or meaningfully different?": "Các quốc gia này chỉ hơi khác nhau hay thật sự khác theo nghĩa chiến lược?",
  "Ask who else is fighting for that same customer outcome. Different technologies can still belong to the same industry if the useful output is the same.": "Hãy hỏi còn ai khác đang tranh cùng một kết quả mà khách hàng muốn nhận. Công nghệ có thể khác, nhưng nếu đầu ra hữu ích là như nhau thì vẫn có thể thuộc cùng một ngành.",
  "Automobiles": "Ô tô",
  "Bargaining / buyer / supplier power": "Quyền lực mặc cả / buyer / supplier",
  "Bargaining leverage": "Đòn bẩy mặc cả",
  "Believing others have done the homework": "Tin rằng người khác đã làm bài tập thay mình",
  "Bottom of the Pyramid logic matters: profitable models may require simpler products, smaller pack sizes, and informal channels.": "Logic Bottom of the Pyramid rất quan trọng: mô hình có lãi có thể đòi hỏi sản phẩm đơn giản hơn, quy cách nhỏ hơn và các kênh phân phối phi chính thức.",
  "Break multi-layer approval barriers for disruptive projects.": "Phải phá các lớp phê duyệt chồng tầng đối với dự án mang tính disruptive.",
  "Build a guiding coalition": "Xây một liên minh dẫn dắt",
  "Build the puzzle, then solve the puzzle.": "Dựng xong bức tranh ghép rồi mới giải nó.",
  "But leadership can also lock in a mental model that becomes vulnerability later.": "Nhưng leadership cũng có thể khóa doanh nghiệp vào một mental model về sau lại biến thành điểm yếu.",
  "Buyer, specifier, and payer are split; cost share is trivial but under-measurement risk is material.": "Buyer, người chỉ định và người trả tiền bị tách rời; tỷ trọng chi phí rất nhỏ nhưng rủi ro đo thiếu lại rất đáng kể.",
  "Can create self-reinforcing outcomes and winner-take-most logic.": "Có thể tạo ra kết quả tự củng cố và logic kẻ thắng lấy gần như hết.",
  "Can the corporation negotiate better terms because it aggregates scale or relationships?": "Tập đoàn có thể đàm phán điều khoản tốt hơn nhờ gom được quy mô hoặc quan hệ không?",
  "Can you point to real, quantifiable shared cost or quality gains?": "Bạn có chỉ ra được lợi ích thực sự, đo được, về chi phí hay chất lượng dùng chung không?",
  "Capital intensive, differentiated, but still highly competitive.": "Thâm dụng vốn, có khác biệt hóa, nhưng vẫn cạnh tranh rất mạnh.",
  "Cases are primary teaching vehicles, not decorative examples.": "Case là phương tiện dạy học chính, không phải ví dụ trang trí cho đẹp bài.",
  "Clarify the vision": "Làm rõ tầm nhìn",
  "Classic contrast: Swatch broadlines from Flik Flak to Breguet, while Rolex focuses on the upper segments.": "Đối chiếu kinh điển: Swatch trải rộng từ Flik Flak đến Breguet, còn Rolex tập trung vào các phân khúc cao cấp.",
  "Clusters can arise from natural resources, market proximity, labor pooling, specialized input suppliers, shared infrastructure, reduced transaction cost, and knowledge spillovers.": "Cluster có thể hình thành từ tài nguyên tự nhiên, gần thị trường, cụm lao động, nhà cung cấp đầu vào chuyên biệt, hạ tầng dùng chung, chi phí giao dịch thấp hơn và lan tỏa tri thức.",
  "Commitment strategy: large commitments when the environment rewards durability.": "Commitment strategy: đưa ra cam kết lớn khi môi trường thưởng cho sự bền vững và bám trụ.",
  "Communication failure": "Đứt gãy truyền thông",
  "Competition: type, variables, ferocity": "Cạnh tranh: loại hình, biến số và mức độ khốc liệt",
  "Competitive variables": "Biến số cạnh tranh",
  "Competitive variables: price, quality / performance, brand, service, speed, access, and ecosystem / platform.": "Biến số cạnh tranh gồm giá, chất lượng / hiệu năng, thương hiệu, dịch vụ, tốc độ, khả năng tiếp cận và ecosystem / platform.",
  "Conclude": "Kết luận",
  "Connect to action": "Nối sang hành động",
  "Consensus culture": "Văn hóa nặng về đồng thuận",
  "Corporate / industry scope: how many industries the company competes in.": "Corporate / industry scope: doanh nghiệp tham gia bao nhiêu ngành.",
  "Corporate strategy six mechanisms + sum-of-parts test": "Corporate strategy với 6 cơ chế + phép thử sum-of-parts",
  "Corrective logic: keep compliance global, require multi-layer approval for cross-border payments, and use independent audit and whistleblower systems.": "Logic khắc phục là: giữ compliance ở cấp toàn cầu, buộc thanh toán xuyên biên giới phải qua nhiều lớp phê duyệt, và dùng audit độc lập cùng hệ thống whistleblower.",
  "Create a volunteer army": "Tạo một đội ngũ tự nguyện cùng đẩy thay đổi",
  "Create urgency and commitment": "Tạo sense of urgency và cam kết",
  "Create urgency before the crisis becomes visible to everyone.": "Phải tạo sense of urgency trước khi khủng hoảng trở nên hiển nhiên với tất cả mọi người.",
  "Creating the Right Environment": "Tạo đúng môi trường thực thi",
  "Define the question": "Xác định đúng câu hỏi",
  "Define the strategically meaningful industry": "Xác định ngành có ý nghĩa chiến lược thật sự",
  "Disney under Iger: related diversification worked because Pixar, Marvel, Lucasfilm, and Fox all deepened the IP content system.": "Disney dưới thời Iger: related diversification hiệu quả vì Pixar, Marvel, Lucasfilm và Fox đều làm sâu thêm hệ thống IP content.",
  "Do cost or quality improve with cumulative experience?": "Khi kinh nghiệm tích lũy tăng lên, chi phí hoặc chất lượng có cải thiện không?",
  "Do network, nexus, standards, or installed-base effects exist?": "Có network effects, nexus effects, standards hay installed-base effects hay không?",
  "Do related businesses lower total cost or improve quality together?": "Các mảng kinh doanh liên quan có cùng nhau làm giảm tổng chi phí hoặc nâng chất lượng không?",
  "Does HQ actually improve operational discipline after acquisition or integration?": "Sau khi mua lại hay tích hợp, HQ có thật sự nâng được kỷ luật vận hành không?",
  "Does average cost fall as output rises?": "Average cost có giảm khi output tăng không?",
  "Does user value rise with installed base?": "Giá trị với người dùng có tăng theo installed base không?",
  "Draw the boundary only after you know the output and the direct rivals. This avoids code-based or brand-based misclassification.": "Chỉ vẽ ranh giới sau khi bạn đã xác định rõ đầu ra và đối thủ trực tiếp. Cách này tránh việc phân loại sai theo mã ngành hoặc thương hiệu.",
  "Draw the pictures.": "Phải vẽ ra thành hình.",
  "Early movers can create durable cost advantage and deter entry.": "Người đi trước có thể tạo lợi thế chi phí bền vững và ngăn cản gia nhập.",
  "Entry, substitutes, regulation, buyer concentration, supplier consolidation, new standards, or adjacent-industry invasion can move the industry on the competition spectrum.": "Gia nhập mới, sản phẩm thay thế, regulation, buyer concentration, supplier consolidation, standards mới hoặc sự tràn sang từ ngành liền kề đều có thể đẩy ngành dịch chuyển trên phổ cạnh tranh.",
  "Extraneous material.": "Không đưa nội dung thừa.",
  "Ferocity": "Độ khốc liệt",
  "Ferocity: the nine drivers tell you how violent competition is likely to become.": "Ferocity: chín driver này cho biết cạnh tranh có khả năng trở nên dữ dội đến mức nào.",
  "Firm performance": "Hiệu quả hoạt động của doanh nghiệp",
  "Five levels": "Năm tầng",
  "Five-level home-vs-host + SPARK match + global/local split": "Đối chiếu năm tầng home-vs-host + ghép SPARK + tách global/local",
  "Fixed / sunk / variable cost": "Chi phí fixed / sunk / variable",
  "Fixed cost is fixed in the short run but avoidable in the long run. It drives break-even pressure and scale logic.": "Fixed cost là cố định trong ngắn hạn nhưng tránh được trong dài hạn. Nó quyết định áp lực hòa vốn và logic quy mô.",
  "Formulate Strategy": "Hình thành chiến lược",
  "Forward integration triggered conflict with customers and ultimately justified separation.": "Việc tích hợp tiến lên phía khách hàng đã gây xung đột với khách hàng và cuối cùng lại khiến việc tách ra trở nên hợp lý.",
  "Framework display without causal application.": "Chỉ trưng framework ra mà không dùng nó để giải thích quan hệ nhân quả.",
  "Framing error": "Lỗi framing",
  "Generating Clarity": "Tạo sự rõ ràng",
  "Geographic scope: which geographic markets the firm serves.": "Geographic scope: doanh nghiệp phục vụ những thị trường địa lý nào.",
  "Geopolitics": "Địa chính trị",
  "Global economics": "Kinh tế toàn cầu",
  "Going along with the pack": "Đi theo đám đông",
  "High fixed and sunk cost plus low differentiation create structural low profitability.": "Fixed cost và sunk cost cao cộng với khác biệt hóa thấp sẽ tạo ra profitability thấp mang tính cấu trúc.",
  "High fixed plus low variable cost often invites price cuts. High sunk cost traps players. Low fixed plus high variable cost tends toward perfect-competition logic.": "Fixed cost cao cộng variable cost thấp thường kéo doanh nghiệp vào giảm giá. Sunk cost cao làm các bên bị mắc kẹt. Fixed cost thấp cộng variable cost cao thường đẩy ngành về logic gần perfect competition.",
  "High-scoring NEC logic: analyze Kobayashi through Enright’s firm framework, not by defaulting to Prahalad and Hamel’s core competence framing.": "Logic NEC kiểu điểm cao là phân tích Kobayashi qua firm framework của Enright, chứ không mặc định lao ngay vào cách đóng khung core competence của Prahalad và Hamel.",
  "Historically helped by IP, health urgency, and buying processes.": "Lịch sử cho thấy ngành này được hỗ trợ bởi IP, tính cấp bách về sức khỏe và quy trình mua.",
  "Home Alone: the first movie did not yet prove value; the second proved value and scarcity; bargaining then shifted to Culkin; the third showed the studio was not organized to appropriate the value.": "Home Alone: phim đầu chưa chứng minh value; phim thứ hai chứng minh được value và độ hiếm; từ đó bargaining power chuyển sang phía Culkin; còn phần ba cho thấy studio không được tổ chức đủ tốt để chiếm giữ phần value đó.",
  "How do the five levels differ from home?": "Năm tầng này khác gì so với thị trường nhà?",
  "How do the five levels differ from the firm’s existing businesses?": "Năm tầng này khác gì so với các mảng kinh doanh mà firm đang có?",
  "How do the five levels differ from the home country?": "Năm tầng này khác gì so với nước sở tại của doanh nghiệp?",
  "How many countries?": "Bao nhiêu quốc gia?",
  "How many industries?": "Bao nhiêu ngành?",
  "How should SPARK be matched to business conditions?": "SPARK nên được ghép thế nào với điều kiện của business?",
  "How should SPARK be matched to country conditions?": "SPARK nên được ghép thế nào với điều kiện của quốc gia?",
  "How should SPARK fit country conditions?": "SPARK phải fit với điều kiện quốc gia như thế nào?",
  "How should the company be organized?": "Công ty nên được tổ chức như thế nào?",
  "How should the international company be organized?": "Doanh nghiệp quốc tế nên được tổ chức như thế nào?",
  "How should the multi-business company be organized?": "Doanh nghiệp đa ngành nên được tổ chức như thế nào?",
  "How tough could they become if they are smart?": "Nếu họ đi đúng nước, họ có thể trở nên đáng gờm đến mức nào?",
  "Hustle strategy: small, fast moves when temporary advantage matters more.": "Hustle strategy: đi các bước nhỏ nhưng nhanh khi lợi thế tạm thời quan trọng hơn độ bền dài hạn.",
  "Hypercompetition": "Hypercompetition",
  "Hypothesize": "Đưa giả thuyết",
  "Identify the focal firm and the strategically meaningful industry.": "Xác định focal firm và ngành có ý nghĩa chiến lược thật sự.",
  "Identify what the customer actually receives in use, not the internal technology stack or the statistical industry code.": "Hãy xác định thứ khách hàng thật sự nhận được trong lúc sử dụng, chứ không phải technology stack bên trong hay mã phân ngành thống kê.",
  "If asked, connect to strategy and implementation barriers.": "Nếu đề hỏi hành động, hãy nối chẩn đoán sang strategy và các rào cản implementation.",
  "If the case is business-facing, do a quick underlying-economics scan.": "Nếu case là kiểu business-facing, hãy quét nhanh underlying economics trước.",
  "If the prompt asks for action, connect diagnosis to strategy and implementation barriers.": "Nếu prompt yêu cầu hành động, hãy nối phần diagnosis sang strategy và các rào cản implementation.",
  "Ignoring the obvious": "Phớt lờ điều hiển nhiên",
  "Implement": "Triển khai",
  "Implementation and organizational pathologies": "Các bệnh lý của implementation và tổ chức",
  "Implementation answer that retells the story but never diagnoses pathology.": "Câu trả lời implementation chỉ kể lại câu chuyện mà không chẩn đoán bệnh lý tổ chức.",
  "Implementation five blocks + key numbers": "Implementation theo 5 khối + các con số mấu chốt",
  "Implementation five-block diagnosis + commitment ladder + 70/30": "Chẩn đoán implementation theo 5 khối + commitment ladder + 70/30",
  "Incorrect perceptions": "Nhận thức sai",
  "Industry structure": "Cấu trúc ngành",
  "Internal capital market": "Thị trường vốn nội bộ",
  "Intrinsic bargaining strength: concentration, substitutes, switching costs, pull-through, vertical integration threat.": "Intrinsic bargaining strength gồm mức độ tập trung, sản phẩm thay thế, switching costs, pull-through và đe dọa tích hợp theo chiều dọc.",
  "Is HQ allocating capital better than the external market would?": "HQ có phân bổ vốn tốt hơn thị trường bên ngoài hay không?",
  "Is learning from one business improving another?": "Việc học từ một business có đang cải thiện business khác không?",
  "Is the international company more than the sum of the parts?": "Doanh nghiệp quốc tế này có thực sự đáng giá hơn tổng các phần riêng lẻ hay không?",
  "Is the same brand, platform, or channel reused meaningfully across businesses?": "Cùng một brand, platform hay channel có đang được tái sử dụng một cách thật sự có ý nghĩa giữa các business hay không?",
  "Is there a must-pass control point?": "Có một điểm kiểm soát buộc mọi bên phải đi qua hay không?",
  "Issues with reasoning": "Lỗi trong lập luận",
  "John Carter and The Lone Ranger remind you that valuable, rare, and hard-to-imitate ingredients can still fail when organization and overall fit are wrong.": "John Carter và The Lone Ranger nhắc bạn rằng các yếu tố valuable, rare và hard-to-imitate vẫn có thể thất bại nếu organization và độ fit tổng thể sai.",
  "Jumping to strategy language before underlying economics is clear.": "Nhảy vào ngôn ngữ strategy khi underlying economics còn chưa rõ.",
  "Key insight: even within oligopoly, profit depends on where firms compete. Hong Kong property competed on location and features; Hong Kong mobile telecom often competed on price because of overcapacity.": "Điểm mấu chốt là: ngay cả trong oligopoly, lợi nhuận vẫn phụ thuộc vào doanh nghiệp cạnh tranh trên biến số nào. Bất động sản Hồng Kông cạnh tranh bằng vị trí và thuộc tính; mobile telecom ở Hồng Kông thì thường lao vào giá do thừa công suất.",
  "Knowing-Doing Gap": "Khoảng cách giữa biết và làm",
  "Knowledge transfer": "Chuyển giao tri thức",
  "Kobayashi’s C&C vision built NEC and later created vulnerability against more focused competitors.": "Tầm nhìn C&C của Kobayashi đã dựng nên NEC nhưng về sau cũng tạo ra điểm yếu khi phải đối đầu các đối thủ tập trung hơn.",
  "Large-population countries can sustain premium and luxury demand even at modest average income levels because the upper-income groups are large in absolute terms.": "Những quốc gia dân số lớn vẫn có thể nuôi được nhu cầu premium và luxury ngay cả khi thu nhập bình quân chưa cao, vì nhóm thu nhập trên cùng vẫn rất lớn về số tuyệt đối.",
  "Leadership can create firms, categories, and strategic direction.": "Leadership có thể tạo ra doanh nghiệp, định hình category và xác lập hướng chiến lược.",
  "Leadership is missing from analysis + action": "Thiếu leadership trong tổ hợp analysis + action",
  "Leadership kept treating Nokia as a hardware company rather than a software-platform competition problem.": "Leadership của Nokia vẫn nhìn công ty như một doanh nghiệp hardware, thay vì nhìn vấn đề như cuộc cạnh tranh của software platform.",
  "Leadership shaped both collapse risk and recovery through related acquisitions and organizational repair.": "Leadership đã định hình cả rủi ro sụp đổ lẫn quá trình hồi phục thông qua các vụ mua lại liên quan và sửa chữa tổ chức.",
  "Look for departures from perfect competition: barriers, differentiation, information asymmetry, switching costs, transport costs, collusion, standards.": "Hãy tìm những chỗ ngành lệch khỏi perfect competition: rào cản, khác biệt hóa, bất cân xứng thông tin, switching costs, chi phí vận chuyển, collusion và standards.",
  "Loss-making firms are kept alive, so price pressure persists.": "Các doanh nghiệp lỗ vẫn bị giữ sống, nên áp lực giá cứ kéo dài.",
  "Low differentiation plus high fixed and sunk cost make exit hard and competition brutal.": "Khác biệt hóa thấp cộng với fixed cost và sunk cost cao khiến rút lui khó và cạnh tranh trở nên rất tàn bạo.",
  "Macro conditions, income distribution, digital shifts, and evolving consumer behavior all matter at once.": "Điều kiện macro, phân phối thu nhập, chuyển dịch số và thay đổi hành vi người tiêu dùng đều cùng lúc có ý nghĩa.",
  "Managerial discipline": "Kỷ luật quản trị",
  "Managers gave optimistic progress reports despite knowing targets were unrealistic.": "Các manager vẫn báo cáo tiến độ lạc quan dù biết mục tiêu là phi thực tế.",
  "Many firms, weak differentiation, heavy price competition.": "Nhiều doanh nghiệp, khác biệt hóa yếu, cạnh tranh giá rất mạnh.",
  "Mid-level objections were not formally recorded or escalated.": "Ý kiến phản đối ở cấp trung không được ghi nhận chính thức hay đẩy lên cấp cao hơn.",
  "Mitsubishi: broad historical structure invites a sum-of-parts question.": "Mitsubishi: cấu trúc rộng có tính lịch sử của tập đoàn này gần như mặc định kéo theo câu hỏi sum-of-parts.",
  "Multi-layer approval systems": "Hệ thống phê duyệt nhiều tầng",
  "Name only the binding levels.": "Chỉ gọi tên những tầng thật sự binding.",
  "Name only the levels that are truly binding.": "Chỉ nêu những tầng thật sự đang khóa kết quả.",
  "Natalie Portman’s three-picture deal was an appropriability move: lock the resource before success rewrites the bargaining table.": "Hợp đồng ba phim với Natalie Portman là một bước đi về appropriability: khóa resource trước khi thành công viết lại bàn mặc cả.",
  "Newell: classic case of HQ value through managerial discipline.": "Newell: case kinh điển về việc HQ tạo giá trị nhờ managerial discipline."
};


const CN_DEEP_MAP = {
  "10 meters away: solve the puzzle of value creation, competitive advantage, and appropriability.": "10 米距离：把整张拼图解开，也就是价值创造、竞争优势与价值占有。",
  "3 meters away: extract the major conclusion from each analytical block.": "3 米距离：从每一个分析模块里提炼出核心结论。",
  "6 inches away: organize facts, numbers, quotes, and events into the framework.": "6 英寸距离：把事实、数字、引文和事件整理进框架里。",
  "A limited number of firms competing with interdependence.": "少数几家企业在相互依赖的状态下展开竞争。",
  "A tech-enabled apparel model sits across meso, industry, and meta pressures, especially future competition and unmet demand.": "这种技术驱动的服装模式同时受 meso、industry 和 meta 多个层面的压力影响，尤其要看未来竞争与未被满足的需求。",
  "Account management, BD, marketing, sales": "客户管理、业务拓展、市场营销、销售",
  "Acer / Wistron: when units inside the same corporation undermine each other, breakup can be the value-creating move.": "Acer / Wistron：当同一集团内部的业务单元彼此牵制时，拆分反而可能是创造价值的动作。",
  "Action is missing from analysis + leadership": "analysis + leadership 缺少 action",
  "Airline industry": "航空业",
  "Airlines": "航空",
  "Analysis is missing from action + leadership": "action + leadership 缺少 analysis",
  "Analyze": "分析",
  "Apply the right tool, not the whole framework library.": "用对工具，不要把整套框架库一股脑搬上来。",
  "Are the businesses related or unrelated?": "这些业务彼此相关还是不相关？",
  "Are the countries similar or different?": "这些国家彼此相似还是差异明显？",
  "Are the countries similar or meaningfully different?": "这些国家只是略有差异，还是在战略意义上真的不同？",
  "Ask who else is fighting for that same customer outcome. Different technologies can still belong to the same industry if the useful output is the same.": "先问还有谁也在争夺同一种客户结果。技术可以不同，但只要提供给客户的有效输出相同，就仍可能属于同一个行业。",
  "Automobiles": "汽车",
  "Bargaining / buyer / supplier power": "议价力 / 买方 / 供应商力量",
  "Bargaining leverage": "议价杠杆",
  "Believing others have done the homework": "以为别人已经把功课做完了",
  "Bottom of the Pyramid logic matters: profitable models may require simpler products, smaller pack sizes, and informal channels.": "Bottom of the Pyramid 的逻辑很关键：想在这类市场做出盈利模型，往往需要更简单的产品、更小规格的包装，以及更非正式的渠道。",
  "Break multi-layer approval barriers for disruptive projects.": "对于 disruptive 项目，要打破层层审批形成的障碍。",
  "Build a guiding coalition": "建立推动变革的核心联盟",
  "Build the puzzle, then solve the puzzle.": "先把拼图拼起来，再去解它。",
  "But leadership can also lock in a mental model that becomes vulnerability later.": "但 leadership 也可能把企业锁进一种心智模型，而这种模型后来反而会变成脆弱点。",
  "Buyer, specifier, and payer are split; cost share is trivial but under-measurement risk is material.": "买方、规格制定方和付款方彼此分离；成本占比很小，但少计量的风险却很实质。",
  "Can create self-reinforcing outcomes and winner-take-most logic.": "可能形成自我强化的结果，并出现 winner-take-most 的逻辑。",
  "Can the corporation negotiate better terms because it aggregates scale or relationships?": "集团能否凭借规模整合或关系整合，谈到更好的条件？",
  "Can you point to real, quantifiable shared cost or quality gains?": "你能否指出真实且可量化的共享成本收益或质量收益？",
  "Capital intensive, differentiated, but still highly competitive.": "资本密集、存在差异化，但竞争仍然非常激烈。",
  "Cases are primary teaching vehicles, not decorative examples.": "案例是主要教学载体，不是装饰性的例子。",
  "Clarify the vision": "把愿景讲清楚",
  "Classic contrast: Swatch broadlines from Flik Flak to Breguet, while Rolex focuses on the upper segments.": "经典对比：Swatch 从 Flik Flak 到 Breguet 横跨多个档位，而 Rolex 则集中在高端细分市场。",
  "Clusters can arise from natural resources, market proximity, labor pooling, specialized input suppliers, shared infrastructure, reduced transaction cost, and knowledge spillovers.": "集群可能来自自然资源、接近市场、劳动力集聚、专业化投入品供应商、共享基础设施、更低的交易成本，以及知识外溢。",
  "Commitment strategy: large commitments when the environment rewards durability.": "Commitment strategy：当环境会奖励长期稳定与持续投入时，就做大规模承诺。",
  "Communication failure": "沟通失灵",
  "Competition: type, variables, ferocity": "竞争：类型、变量、激烈程度",
  "Competitive variables": "竞争变量",
  "Competitive variables: price, quality / performance, brand, service, speed, access, and ecosystem / platform.": "竞争变量包括价格、质量 / 性能、品牌、服务、速度、可达性，以及 ecosystem / platform。",
  "Conclude": "得出结论",
  "Connect to action": "连到行动上",
  "Consensus culture": "共识导向文化",
  "Corporate / industry scope: how many industries the company competes in.": "Corporate / industry scope：企业参与多少个行业。",
  "Corporate strategy six mechanisms + sum-of-parts test": "Corporate strategy 六种机制 + sum-of-parts 检验",
  "Corrective logic: keep compliance global, require multi-layer approval for cross-border payments, and use independent audit and whistleblower systems.": "修正逻辑是：把 compliance 保持在全球层面，对跨境付款设置多层审批，并引入独立审计和 whistleblower 系统。",
  "Create a volunteer army": "形成一支自愿推动变革的队伍",
  "Create urgency and commitment": "制造紧迫感与承诺",
  "Create urgency before the crisis becomes visible to everyone.": "要在危机还没有对所有人都显形之前，就先建立紧迫感。",
  "Creating the Right Environment": "创造合适的执行环境",
  "Define the question": "先把问题定义清楚",
  "Define the strategically meaningful industry": "先界定在战略上真正有意义的行业",
  "Disney under Iger: related diversification worked because Pixar, Marvel, Lucasfilm, and Fox all deepened the IP content system.": "Iger 时代的 Disney 之所以让 related diversification 成功，是因为 Pixar、Marvel、Lucasfilm 和 Fox 都在加深同一套 IP 内容系统。",
  "Do cost or quality improve with cumulative experience?": "随着经验累积，成本或质量会不会改善？",
  "Do network, nexus, standards, or installed-base effects exist?": "是否存在 network、nexus、standards 或 installed-base effects？",
  "Do related businesses lower total cost or improve quality together?": "相关业务放在一起，是否能共同降低总成本或提升质量？",
  "Does HQ actually improve operational discipline after acquisition or integration?": "并购或整合之后，HQ 是否真的能提升运营纪律？",
  "Does average cost fall as output rises?": "产出上升时，平均成本会下降吗？",
  "Does user value rise with installed base?": "用户价值会随着 installed base 扩大而上升吗？",
  "Draw the boundary only after you know the output and the direct rivals. This avoids code-based or brand-based misclassification.": "先搞清楚输出是什么、直接对手是谁，再去画边界。这样才能避免按行业代码或品牌表象误判。",
  "Draw the pictures.": "把图画出来。",
  "Early movers can create durable cost advantage and deter entry.": "先行者可能建立持久的成本优势，并抑制后来者进入。",
  "Entry, substitutes, regulation, buyer concentration, supplier consolidation, new standards, or adjacent-industry invasion can move the industry on the competition spectrum.": "进入者、替代品、监管、买方集中度、供应商整合、新标准，或邻近行业入侵，都可能让行业在竞争光谱上发生移动。",
  "Extraneous material.": "不要写无关材料。",
  "Ferocity": "竞争激烈程度",
  "Ferocity: the nine drivers tell you how violent competition is likely to become.": "Ferocity：这九个 driver 会告诉你竞争可能会激烈到什么程度。",
  "Firm performance": "企业绩效",
  "Five levels": "五个层面",
  "Five-level home-vs-host + SPARK match + global/local split": "五层 home-vs-host 对照 + SPARK 匹配 + global/local 切分",
  "Fixed / sunk / variable cost": "固定 / 沉没 / 变动成本",
  "Fixed cost is fixed in the short run but avoidable in the long run. It drives break-even pressure and scale logic.": "固定成本在短期内是固定的，但长期可以避免。它决定盈亏平衡压力，也决定规模逻辑。",
  "Formulate Strategy": "形成战略",
  "Forward integration triggered conflict with customers and ultimately justified separation.": "向前整合触发了与客户的冲突，最终也让拆分显得更合理。",
  "Geopolitics can change whether you are even allowed to play the game.": "地缘政治甚至会改变你是否还有资格继续留在牌桌上。",
  "High fixed plus low variable cost often invites price cuts. High sunk cost traps players. Low fixed plus high variable cost tends toward perfect-competition logic.": "高固定成本加低变动成本，往往会诱发价格战；高沉没成本会把玩家困住；低固定成本加高变动成本，则更接近完全竞争逻辑。",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "这家公司是否大于各部分简单相加的总和？如果答案是否定的，投资者完全可以自己分散配置，那企业集团结构可能就在毁灭价值，而不是创造价值。",
  "No conclusion means no score. Over-hedging strong evidence or overstating weak evidence both lose precision.": "不给结论，基本就拿不到分。强证据写得太保守，或弱证据写得太绝对，都会失去精度。",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "这门考试的逻辑很明确：在谈战略语言之前，先搞清楚这个业务是怎么赚钱的。底层经济逻辑决定行业结构，行业结构决定竞争形态，竞争形态决定盈利潜力，之后再由 focal firm 的 SPARK、议价位置、领导力和执行力进行修正。",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "管理者常见的错误，是系统性低估环境的力量。这门课的教学重点在于：行为受情境影响的程度，远远超过管理者本能上的想象。想改变行为，就先重塑环境，而不是只对人格说教。",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "世界并不像流行写作里说得那样完全扁平。创意和关键构想依然高度集中在特定的人、企业和地点，而执行资源则分布得更广。真正的战略问题是，谁会成为 flattener，谁又会被压平成只能在执行端竞争的一方。",
  "Use BARD-style language when the evidence is strong and viable alternatives are minimal.": "当证据很强、可成立的替代解释极少时，就用 BARD 式语气。",
  "Use POE-style language when the balance of evidence points in one direction but remains limited.": "当证据整体指向某个方向，但强度仍有限时，就用 POE 式语气。",
  "Value capture is not automatic. You still need bargaining position, execution, and defendability.": "价值捕获从来不是自动发生的。你仍然需要议价位置、执行能力和可防守性。",
  "Variable cost moves with output. If price stays above variable cost, selling more can still make sense in the short run.": "变动成本会随着产出变化。只要价格仍高于变动成本，短期内继续多卖通常仍然是合理的。"
};

const ZH_CN_PHRASE_REPLACEMENTS = [
  ["為甚麼", "为什么"], ["甚麼", "什么"], ["這裡", "这里"], ["這個", "这个"], ["這些", "这些"], ["這種", "这种"], ["這門", "这门"],
  ["產業群聚", "产业集群"], ["群聚", "集群"], ["產業", "行业"], ["公司層次", "企业层面"], ["公司", "企业"], ["企業總體策略", "企业总体战略"], ["企業", "企业"],
  ["層次", "层面"], ["總體", "宏观"], ["總戒律", "总戒律"], ["總表", "总表"], ["總體策略", "总体战略"],
  ["結構", "结构"], ["競爭", "竞争"], ["獲利", "盈利"], ["績效", "绩效"], ["議價", "议价"], ["價值", "价值"], ["優勢", "优势"], ["劣勢", "劣势"],
  ["圖表", "图表"], ["圖", "图"], ["畫圖", "画图"], ["關鍵", "关键"], ["風險", "风险"], ["壓力", "压力"], ["變數", "变量"], ["導向", "导向"],
  ["與", "与"], ["並", "并"], ["讓", "让"], ["為", "为"], ["對應", "对应"], ["應用", "应用"], ["廣", "广"], ["擴", "扩"], ["縮", "缩"],
  ["點", "点"], ["數據", "数据"], ["證據", "证据"], ["機會", "机会"], ["學習", "学习"], ["知識", "知识"], ["系統", "系统"], ["組織", "组织"],
  ["領導", "领导"], ["執行", "执行"], ["實際", "实际"], ["實作", "实作"], ["實體", "实体"], ["發現", "发现"], ["發展", "发展"], ["發生", "发生"],
  ["國家", "国家"], ["國際", "国际"], ["區域", "区域"], ["區段", "区段"], ["範疇", "范围"], ["範圍", "范围"], ["標準", "标准"], ["類型", "类型"],
  ["買方", "买方"], ["賣方", "卖方"], ["採購", "采购"], ["規格制定者", "规格制定方"], ["規格", "规格"], ["製藥", "制药"], ["醫療", "医疗"], ["醫師", "医师"],
  ["對手", "对手"], ["對比", "对比"], ["對外", "对外"], ["對內", "对内"], ["對上", "对上"], ["對下", "对下"], ["較", "较"], ["當", "当"],
  ["將", "将"], ["會", "会"], ["從", "从"], ["後", "后"], ["開發", "开发"], ["設計", "设计"], ["佈局", "布局"], ["併購", "并购"], ["營運", "运营"],
  ["網路", "网络"], ["軟體", "软件"], ["硬體", "硬件"], ["資料", "资料"], ["雲端", "云端"], ["專業", "专业"], ["專屬", "专属"], ["專門", "专门"],
  ["長期", "长期"], ["短期", "短期"], ["強化", "强化"], ["複雜", "复杂"], ["簡單", "简单"], ["覺得", "觉得"], ["處理", "处理"], ["檢查", "检查"],
  ["說明", "说明"], ["寫法", "写法"], ["寫出", "写出"], ["寫作", "写作"], ["讀者", "读者"], ["閱讀", "阅读"], ["課程", "课程"], ["課堂", "课堂"],
  ["模組", "模块"], ["門檻", "门槛"], ["壟斷", "垄断"], ["體系", "体系"], ["總和", "总和"], ["證成", "证成"], ["顯示", "显示"], ["顯著", "显著"],
  ["無法", "无法"], ["應該", "应该"], ["邏輯", "逻辑"], ["貢獻", "贡献"], ["規模", "规模"], ["潛力", "潜力"], ["準壟斷", "准垄断"], ["樣貌", "样貌"],
  ["體現", "体现"], ["內部", "内部"], ["外部", "外部"], ["競逐", "争夺"], ["落地與執行", "落地与执行"], ["超國家", "超国家"], ["總體層次", "宏观层面"],
  ["群聚 / 中觀", "集群 / 中观"], ["中觀", "中观"], ["商業生態", "商业生态"], ["生態系", "生态系统"], ["附錄", "附录"], ["權重", "权重"], ["總攻擊", "总攻击"]
];

function localizeZhCnFallback(input) {
  if (typeof input !== 'string') return input;
  let out = input;
  for (const [from, to] of ZH_CN_PHRASE_REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  return out;
}

const CN_MAP = {
  "10 公尺距離：解整個 puzzle，也就是 value creation、competitive advantage 與 appropriability。": "10 公尺距离：解整个 puzzle，也就是 value creation、competitive advantage 与 appropriability。",
  "3 公尺距離：從每一塊分析抽出 major conclusion。": "3 公尺距离：从每一块分析抽出 major conclusion。",
  "6 吋、3 公尺、10 公尺": "6 吋、3 公尺、10 公尺",
  "6 吋距離：把 facts、數字、quotes 與事件放進框架。": "6 吋距离：把 facts、数字、quotes 与事件放进框架。",
  "70 / 30 原則": "70 / 30 原则",
  "Acer / Wistron：當同一 corporate structure 內的 business units 互相破壞，分拆反而才是創造價值的動作。": "Acer / Wistron：当同一 corporate structure 内的 business units 互相破坏，分拆反而才是创造价值的动作。",
  "Action + Leadership 少了 Analysis": "Action + Leadership 少了 Analysis",
  "Analysis + Action 少了 Leadership": "Analysis + Action 少了 Leadership",
  "Analysis + Leadership 少了 Action": "Analysis + Leadership 少了 Action",
  "Asch 單一同盟者": "Asch 单一同盟者",
  "Asch 服從率": "Asch 服从率",
  "BARD 與 POE": "BARD 与 POE",
  "Bottom of the Pyramid 的邏輯很重要：可獲利模式可能需要更簡單的產品、更小包裝與更非正式的渠道。": "Bottom of the Pyramid 的逻辑很重要：可获利模式可能需要更简单的产品、更小包装与更非正式的渠道。",
  "Cluster 邏輯圖": "Cluster 逻辑图",
  "Commitment strategy：當環境獎勵持久性時，做大規模承諾。": "Commitment strategy：当环境奖励持久性时，做大规模承诺。",
  "Corporate / industry scope：公司參與多少個產業。": "Corporate / industry scope：公司参与多少个产业。",
  "Corporate strategy 六機制 + sum-of-parts test": "Corporate strategy 六机制 + sum-of-parts test",
  "Disney 在 Iger 時代：related diversification 成立，是因為 Pixar、Marvel、Lucasfilm、Fox 都在加深 IP content system。": "Disney 在 Iger 时代：related diversification 成立，是因为 Pixar、Marvel、Lucasfilm、Fox 都在加深 IP content system。",
  "Ferocity：九個驅動因素決定競爭有多激烈。": "Ferocity：九个驱动因素决定竞争有多激烈。",
  "Geographic scope：公司服務哪些地理市場。": "Geographic scope：公司服务哪些地理市场。",
  "Global / Local 切法": "Global / Local 切法",
  "HQ 在併購或整合後，是否真的提升 operational discipline？": "HQ 在并购或整合后，是否真的提升 operational discipline？",
  "HQ 的資本配置是否優於外部市場？": "HQ 的资本配置是否优于外部市场？",
  "Home Alone：第一部還沒證明 value；第二部證明了 value 與稀缺性；接著 bargaining power 轉向 Culkin；第三部則顯示 studio 並沒有組織好去 appropriation 那份價值。": "Home Alone：第一部还没证明 value；第二部证明了 value 与稀缺性；接著 bargaining power 转向 Culkin；第三部则显示 studio 并没有组织好去 appropriation 那份价值。",
  "Hustle strategy：當短期優勢更重要時，用小而快的移動。": "Hustle strategy：当短期优势更重要时，用小而快的移动。",
  "Implementation 五段 + 關鍵數字": "Implementation 五段 + 关键数字",
  "Implementation 五段診斷 + commitment ladder + 70/30": "Implementation 五段诊断 + commitment ladder + 70/30",
  "Implementation 題只重述故事，沒有做 pathology diagnosis。": "Implementation 题只重述故事，没有做 pathology diagnosis。",
  "Income distribution 比平均數更重要": "Income distribution 比平均数更重要",
  "International 切法 + corporate 機制": "International 切法 + corporate 机制",
  "Intrinsic bargaining strength：集中度、替代品、switching costs、pull-through、垂直整合威脅。": "Intrinsic bargaining strength：集中度、替代品、switching costs、pull-through、垂直整合威胁。",
  "John Carter 與 The Lone Ranger 提醒你：就算有 valuable、rare、hard-to-imitate 的要素，只要 organization 與整體配適錯誤，仍然會失敗。": "John Carter 与 The Lone Ranger 提醒你：就算有 valuable、rare、hard-to-imitate 的要素，只要 organization 与整体配适错误，仍然会失败。",
  "Knowing-Not-Knowing 的七個原因": "Knowing-Not-Knowing 的七个原因",
  "Kobayashi 的 C&C vision 建立了 NEC，但也讓 NEC 之後暴露在更聚焦對手面前。": "Kobayashi 的 C&C vision 建立了 NEC，但也让 NEC 之后暴露在更聚焦对手面前。",
  "Kotter 八項加速器": "Kotter 八项加速器",
  "Lead firm 邏輯": "Lead firm 逻辑",
  "Leadership 同時塑造了失敗風險與後來透過 related acquisitions 與組織修復的復甦。": "Leadership 同时塑造了失败风险与后来透过 related acquisitions 与组织修复的复苏。",
  "Leadership 是雙面刃": "Leadership 是双面刃",
  "Leadership 能建立公司、品類與策略方向。": "Leadership 能建立公司、品类与策略方向。",
  "Macro level 與其背靜態清單，不如記成三輪掃描。": "Macro level 与其背静态清单，不如记成三轮扫描。",
  "Macro 診斷板": "Macro 诊断板",
  "Meta 壓力圖": "Meta 压力图",
  "Mitsubishi：廣泛的歷史性結構，天然會被問 sum-of-parts 問題。": "Mitsubishi：广泛的历史性结构，天然会被问 sum-of-parts 问题。",
  "NEC 的高分寫法：用 Enright 的 firm framework 分析 Kobayashi，而不是直接套 Prahalad-Hamel 的 core competence framing。": "NEC 的高分写法：用 Enright 的 firm framework 分析 Kobayashi，而不是直接套 Prahalad-Hamel 的 core competence framing。",
  "Natalie Portman 的三部片合約，是 appropriation 管理：在成功改寫 bargaining table 之前先把資源鎖住。": "Natalie Portman 的三部片合约，是 appropriation 管理：在成功改写 bargaining table 之前先把资源锁住。",
  "Newell：典型的 HQ 透過 managerial discipline 加值。": "Newell：典型的 HQ 透过 managerial discipline 加值。",
  "Nokia 作為 implementation transfer 標準案例": "Nokia 作为 implementation transfer 标准案例",
  "Nokia 預設作答形狀": "Nokia 预设作答形状",
  "OPEC 脈絡中的 Saudi Aramco": "OPEC 脉络中的 Saudi Aramco",
  "P&G in China 是代表性的 national-level case，因為總體條件、所得分布、消費者變化與通路演變同時作用。": "P&G in China 是代表性的 national-level case，因为总体条件、所得分布、消费者变化与通路演变同时作用。",
  "Performance 永遠是相對概念": "Performance 永远是相对概念",
  "Pluralistic silence 與 fear": "Pluralistic silence 与 fear",
  "Positioning 會移動；Seiko 的 upmarket 推進屬於動態 positioning 問題。": "Positioning 会移动；Seiko 的 upmarket 推进属于动态 positioning 问题。",
  "Practice Questions 補充案例": "Practice Questions 补充案例",
  "Price sensitivity：成本占比、策略、獲利狀況與品質影響。": "Price sensitivity：成本占比、策略、获利状况与品质影响。",
  "RTZ / Chinalco 的複雜性：同一個國家可能同時是 customer、shareholder、partner、regulator 與 geopolitical force。這種情況下，一套國際策略打天下一定失敗。": "RTZ / Chinalco 的复杂性：同一个国家可能同时是 customer、shareholder、partner、regulator 与 geopolitical force。这种情况下，一套国际策略打天下一定失败。",
  "Real options strategy：在高度不確定時保留彈性。": "Real options strategy：在高度不确定时保留弹性。",
  "Resistance 與 commitment ladder": "Resistance 与 commitment ladder",
  "SPARK 不是全部答案。完整的 firm-level diagnosis 必須把 strategic logic 與 organizational realization 分開看。": "SPARK 不是全部答案。完整的 firm-level diagnosis 必须把 strategic logic 与 organizational realization 分开看。",
  "SPARK 是核心，但不是完整答案": "SPARK 是核心，但不是完整答案",
  "SPARK 與其延伸": "SPARK 与其延伸",
  "Scale、scope、learning 這些經濟在哪裡成立？": "Scale、scope、learning 这些经济在哪里成立？",
  "Scope 邏輯": "Scope 逻辑",
  "Symbian 的問題已被理解，但沒有對應的策略位移。": "Symbian 的问题已被理解，但没有对应的策略位移。",
  "Tech-enabled 服飾模式橫跨 meso、industry、meta 壓力，尤其是未來競爭與 unmet demand。": "Tech-enabled 服饰模式横跨 meso、industry、meta 压力，尤其是未来竞争与 unmet demand。",
  "Type：產業落在五種競爭型態中的哪一種。": "Type：产业落在五种竞争型态中的哪一种。",
  "VRIO 不只套 resources，也可以套 activities、resources、knowledge。": "VRIO 不只套 resources，也可以套 activities、resources、knowledge。",
  "VRIO 套在 A、R、K": "VRIO 套在 A、R、K",
  "VRIO 要套在 A、R、K": "VRIO 要套在 A、R、K",
  "WPP 的錯誤：把 financial controls 與 compliance 也下放給高風險市場中的 founder-led units，幾乎等於把 bribery 風險制度化。": "WPP 的错误：把 financial controls 与 compliance 也下放给高风险市场中的 founder-led units，几乎等于把 bribery 风险制度化。",
  "Walmart：即使 corporate scope 不廣，只要在 retail 內部有足夠 scope economies，仍然成立。": "Walmart：即使 corporate scope 不广，只要在 retail 内部有足够 scope economies，仍然成立。",
  "Willingness to use power：就算很強，實際上也不一定會用到極致。": "Willingness to use power：就算很强，实际上也不一定会用到极致。",
  "Within-industry scope：在同一產業內服務哪些 segments。": "Within-industry scope：在同一产业内服务哪些 segments。",
  "reading 證據": "reading 证据",
  "「倒 T 型」世界觀": "「倒 T 型」世界观",
  "一個 business 的學習，有沒有真的改善另一個 business？": "一个 business 的学习，有没有真的改善另一个 business？",
  "一句話 thesis": "一句话 thesis",
  "一旦形成自我維持，往往就很難被移除。": "一旦形成自我维持，往往就很难被移除。",
  "一頁手寫 cheat sheet": "一页手写 cheat sheet",
  "七個 economics dimensions": "七个 economics dimensions",
  "三個 dysfunction 公式": "三个 dysfunction 公式",
  "三步產業邊界法": "三步行业边界法",
  "三種成本，以及它們如何影響競爭": "三种成本，以及它们如何影响竞争",
  "下結論": "下结论",
  "不是學生表演，而是專業判斷": "不是学生表演，而是专业判断",
  "不能只停在 SPARK": "不能只停在 SPARK",
  "不要只說這個 industry '很好'，要明白說出利潤來源。": "不要只说这个 industry '很好'，要明白说出利润来源。",
  "不要塞無關內容": "不要塞无关内容",
  "中層反對意見沒有被正式記錄或有效上達。": "中层反对意见没有被正式记录或有效上达。",
  "中觀 / 產業群聚": "中观 / 产业集群",
  "五個層次相對母國有何不同？": "五个层次相对母国有何不同？",
  "五個層次相對母國有何差異？": "五个层次相对母国有何差异？",
  "五層閱讀地圖": "五层阅读地图",
  "五層閱讀順序": "五层阅读顺序",
  "五段 implementation 系統": "五段 implementation 系统",
  "代表案例訊號": "代表案例讯号",
  "企業應如何避免重蹈覆轍": "企业应如何避免重蹈覆辙",
  "企業總體策略": "公司总体战略",
  "企業績效": "企业绩效",
  "但 leadership 也可能把公司鎖進一個之後變成弱點的 mental model。": "但 leadership 也可能把公司锁进一个之后变成弱点的 mental model。",
  "低差異化加上高固定與沉沒成本，使退出困難、競爭殘酷。": "低差异化加上高固定与沉没成本，使退出困难、竞争残酷。",
  "使用案例證據": "使用案例证据",
  "使用正確工具": "使用正确工具",
  "使用者價值是否隨 installed base 擴大？": "使用者价值是否随 installed base 扩大？",
  "例子": "例子",
  "信度分級與安全使用方式": "信度分级与安全使用方式",
  "個人電腦": "个人电脑",
  "傳話每次損失": "传话每次损失",
  "價值最後在哪裡被 capture，又是被誰 capture？": "价值最后在哪里被 capture，又是被谁 capture？",
  "價值究竟是在 subsidiaries 之間，還是在 HQ 與 subsidiaries 之間被創造？": "价值究竟是在 subsidiaries 之间，还是在 HQ 与 subsidiaries 之间被创造？",
  "先做匿名書面判斷，再進入討論。": "先做匿名书面判断，再进入讨论。",
  "先前成功造成硬化": "先前成功造成硬化",
  "先從產業下手。先界定具有策略意義的競爭範圍。": "先从产业下手。先界定具有策略意义的竞争范围。",
  "先從這裡開始": "先从这里开始",
  "先把 puzzle 拼好，再解它。": "先把 puzzle 拼好，再解它。",
  "先理解這個 industry 到底在做甚麼。": "先理解这个 industry 到底在做甚么。",
  "先行者可能建立持久成本優勢並阻擋進入。": "先行者可能建立持久成本优势并阻挡进入。",
  "先讀清楚題目": "先读清楚题目",
  "先辨認 focal firm 與具有策略意義的 industry。": "先辨认 focal firm 与具有策略意义的 industry。",
  "先辨認客戶實際收到甚麼，不要先看技術堆疊，也不要先看統計產業代碼。": "先辨认客户实际收到甚么，不要先看技术堆叠，也不要先看统计产业代码。",
  "全球經濟": "全球经济",
  "全部": "全部",
  "八個核心組成": "八个核心组成",
  "八個超國家驅動因素": "八个超国家驱动因素",
  "八問藍圖": "八问蓝图",
  "八問藍圖改成 select、compare、configure、organize 之後更容易實戰。": "八问蓝图改成 select、compare、configure、organize 之后更容易实战。",
  "公司": "公司",
  "公司層次": "公司层面",
  "公司是否因整合規模或關係而獲得更強議價力？": "公司是否因整合规模或关系而获得更强议价力？",
  "公司要如何組織？": "公司要如何组织？",
  "六個快速經濟結構問題": "六个快速经济结构问题",
  "六種 corporate value creation 機制": "六种 corporate value creation 机制",
  "六種實務回應：acknowledge feelings、gather information、take small steps、seek support、understand others、bring people along。": "六种实务回应：acknowledge feelings、gather information、take small steps、seek support、understand others、bring people along。",
  "六種常見 resistance 來源：fear of the unknown、loss of control、habit、emotional attachments、cognitive dissonance、social influences。": "六种常见 resistance 来源：fear of the unknown、loss of control、habit、emotional attachments、cognitive dissonance、social influences。",
  "共識型文化": "共识型文化",
  "再加上超國家壓力，理解其如何改寫 nation state 之上的規則。": "再加上超国家压力，理解其如何改写 nation state 之上的规则。",
  "再問誰也在爭奪同一個 customer outcome。即使底層技術不同，只要 useful output 相同，仍可能屬同一產業。": "再问谁也在争夺同一个 customer outcome。即使底层技术不同，只要 useful output 相同，仍可能属同一产业。",
  "再往外看 cluster 或 ecosystem，理解 suppliers、customers、complements 與 substitutes。": "再往外看 cluster 或 ecosystem，理解 suppliers、customers、complements 与 substitutes。",
  "分析脊椎": "分析主轴",
  "匿名書面回應": "匿名书面回应",
  "區域群聚以及為何它們難以被撼動": "区域集群及其为何难以被撼动",
  "區域集團 / 超國家政策": "区域集团 / 超国家政策",
  "半導體": "半导体",
  "原始內容附錄": "原始内容附录",
  "取決於 scale economies": "取决于 scale economies",
  "只保留品牌一致性的大框架": "只保留品牌一致性的大框架",
  "只保留必要的 local legal expertise": "只保留必要的 local legal expertise",
  "只展示 framework，沒有做 causal application。": "只展示 framework，没有做 causal application。",
  "只點出真正 binding 的層次。": "只点出真正 binding 的层次。",
  "只點名真正 binding 的層次。": "只点名真正 binding 的层次。",
  "可能來自價格溢價、成本優勢、議價優勢、標準控制、installed base、customer lock-in，或稀缺的 complementary assets。": "可能来自价格溢价、成本优势、议价优势、标准控制、installed base、customer lock-in，或稀缺的 complementary assets。",
  "可能形成自我強化與 winner-take-most 邏輯。": "可能形成自我强化与 winner-take-most 逻辑。",
  "同一品牌、平台或通路是否真的跨業務被重複使用？": "同一品牌、平台或通路是否真的跨业务被重复使用？",
  "向前整合引發與客戶衝突，最後反而使分拆合理化。": "向前整合引发与客户冲突，最后反而使分拆合理化。",
  "商業生態與群聚": "商业生态与群聚",
  "單一供應者。若未被管制或政治限制，通常最有利。": "单一供应者。若未被管制或政治限制，通常最有利。",
  "四個 performance comparators": "四个 performance comparators",
  "四分之一是不停下來，直到問題被真正回答": "四分之一是不停下来，直到问题被真正回答",
  "四分之一是到場並投入": "四分之一是到场并投入",
  "四分之一是知道要問甚麼問題": "四分之一是知道要问甚么问题",
  "四分之一是讓策略在組織內真的運作": "四分之一是让策略在组织内真的运作",
  "四條總戒律": "四条总戒律",
  "固化成 new normal": "固化成 new normal",
  "固定 / 沉沒 / 變動成本": "固定 / 沉没 / 变动成本",
  "固定成本短期固定、長期可避免。它主導 break-even 壓力與規模邏輯。": "固定成本短期固定、长期可避免。它主导 break-even 压力与规模逻辑。",
  "國家 / 總體": "国家 / 总体",
  "國家 / 總體層次": "国家 / 宏观层面",
  "國家條件": "国家条件",
  "國際公司有沒有大於 parts 的總和？": "国际公司有没有大于 parts 的总和？",
  "國際公司要如何組織？": "国际公司要如何组织？",
  "國際策略": "国际战略",
  "國際策略架構": "国际策略架构",
  "在 reorganization 中保留 institutional knowledge。": "在 reorganization 中保留 institutional knowledge。",
  "在危機對所有人都變得明顯前，先建立 urgency。": "在危机对所有人都变得明显前，先建立 urgency。",
  "在底層經濟還沒釐清前，就直接跳到 strategy language。": "在底层经济还没厘清前，就直接跳到 strategy language。",
  "在要求唯一配對時重複使用同一個 case。": "在要求唯一配对时重复使用同一个 case。",
  "在評論 performance 前，先說明 comparator。": "在评论 performance 前，先说明 comparator。",
  "地緣政治": "地缘政治",
  "塞入與題目無關的材料。": "塞入与题目无关的材料。",
  "壓力下的執行": "压力下的执行",
  "外國 MNC 與其他群體": "外国 MNC 与其他群体",
  "外國政府": "外国政府",
  "多家廠商加上來自相關產業的潛在進入者；優勢壽命較短。": "多家厂商加上来自相关产业的潜在进入者；优势寿命较短。",
  "多層核准流程": "多层核准流程",
  "多數區段價格壓力大，可防禦性有限。": "多数区段价格压力大，可防御性有限。",
  "大型人口國家即使平均收入不高，也可能支撐 premium 與 luxury 需求，因為高所得族群的絕對數量很大。": "大型人口国家即使平均收入不高，也可能支撑 premium 与 luxury 需求，因为高所得族群的绝对数量很大。",
  "好撒瑪利亞人，提早": "好撒玛利亚人，提早",
  "好撒瑪利亞人，準時": "好撒玛利亚人，准时",
  "好撒瑪利亞人，遲到": "好撒玛利亚人，迟到",
  "如何把 SPARK 對上各國條件？": "如何把 SPARK 对上各国条件？",
  "如何讓 SPARK 對上國家條件？": "如何让 SPARK 对上国家条件？",
  "如何讓 SPARK 對應 business 條件？": "如何让 SPARK 对应 business 条件？",
  "如果 competitors 夠聰明，未來可能變多難纏？": "如果 competitors 够聪明，未来可能变多难缠？",
  "如果 competitors 把 activities 優化到最好會怎樣？": "如果 competitors 把 activities 优化到最好会怎样？",
  "如果他們把 resources 與 knowledge 發揮到極致會怎樣？": "如果他们把 resources 与 knowledge 发挥到极致会怎样？",
  "如果他們新增 resources 或 knowledge 會怎樣？": "如果他们新增 resources 或 knowledge 会怎样？",
  "如果他們被更聰明且資金更深的公司接手會怎樣？": "如果他们被更聪明且资金更深的公司接手会怎样？",
  "如果他們補上自己的短板會怎樣？": "如果他们补上自己的短板会怎样？",
  "如果我們來管理 competitors，會怎麼做？": "如果我们来管理 competitors，会怎么做？",
  "如果題目要求 action，就必須把 diagnosis 連到 strategy 與 implementation barrier。": "如果题目要求 action，就必须把 diagnosis 连到 strategy 与 implementation barrier。",
  "如果題目要求，就把 diagnosis 連回 strategy 與 implementation barriers。": "如果题目要求，就把 diagnosis 连回 strategy 与 implementation barriers。",
  "季度壓力、共識文化與多層核准制度都在懲罰真話。": "季度压力、共识文化与多层核准制度都在惩罚真话。",
  "季度股東壓力": "季度股东压力",
  "學習經濟": "学习经济",
  "完全競爭": "完全竞争",
  "完整鏈條": "完整链条",
  "定義題目": "定义题目",
  "客戶實際收到甚麼有用輸出？": "客户实际收到甚么有用输出？",
  "寡佔": "寡占",
  "少數幾家互相依賴地競爭。": "少数几家互相依赖地竞争。",
  "工具框架": "工具框架",
  "工具要用對": "工具要用对",
  "常見例子包括 Silicon Valley、Hollywood、倫敦 / 紐約金融、瑞士奢華腕錶、Bangalore、Hsinchu。": "常见例子包括 Silicon Valley、Hollywood、伦敦 / 纽约金融、瑞士奢华腕表、Bangalore、Hsinchu。",
  "平台經濟與全球結構在各家之間差異很大，不能當作單一產業故事。": "平台经济与全球结构在各家之间差异很大，不能当作单一产业故事。",
  "底層經濟": "底层经济",
  "底層經濟很強，但景氣循環與細分差異很大。": "底层经济很强，但景气循环与细分差异很大。",
  "底層經濟結構": "底层经济结构",
  "建立 guiding coalition": "建立 guiding coalition",
  "建立 urgency 與 commitment": "建立 urgency 与 commitment",
  "建議的 180 分鐘時間分配": "建议的 180 分钟时间分配",
  "形成 volunteer army": "形成 volunteer army",
  "微觀驅動": "微观驱动",
  "必須用具體 case evidence：數字、quotes、事件。": "必须用具体 case evidence：数字、quotes、事件。",
  "應 globalize 的部分": "应 globalize 的部分",
  "應 localize 的部分": "应 localize 的部分",
  "成本結構是甚麼：capital、labor、knowledge、marketing 以及 fixed / sunk / variable 比例？": "成本结构是甚么：capital、labor、knowledge、marketing 以及 fixed / sunk / variable 比例？",
  "找出偏離完全競爭之處：障礙、差異化、資訊不對稱、switching costs、運輸成本、collusion、standards。": "找出偏离完全竞争之处：障碍、差异化、资讯不对称、switching costs、运输成本、collusion、standards。",
  "技術變動": "技术变动",
  "把 Prahalad-Hamel 的 core competence 當成 NEC 的預設答法。": "把 Prahalad-Hamel 的 core competence 当成 NEC 的预设答法。",
  "把 implementation 的長篇敘述改成逐步診斷流程。": "把 implementation 的长篇叙述改成逐步诊断流程。",
  "把 vision 說清楚": "把 vision 说清楚",
  "把『是否大於 parts 總和』變成一眼可掃的機制板。": "把『是否大于 parts 总和』变成一眼可扫的机制板。",
  "把一個複雜問題拆成很多簡單問題。": "把一个复杂问题拆成很多简单问题。",
  "把圖畫出來。": "把图画出来。",
  "把定義段落轉成三步驟工具。": "把定义段落转成三步骤工具。",
  "把教授偏好的預設分析順序做成視覺入口。": "把教授偏好的预设分析顺序做成视觉入口。",
  "把本來應該是診斷問題的文字塊，改成可掃描的問題板。": "把本来应该是诊断问题的文字块，改成可扫描的问题板。",
  "把長段敘述轉成『誰在改寫規則』的圖。": "把长段叙述转成『谁在改写规则』的图。",
  "把預設答題骨架轉成壓力下更好操作的流程版。": "把预设答题骨架转成压力下更好操作的流程版。",
  "抵抗": "抵抗",
  "拆掉障礙": "拆掉障碍",
  "持續並擴大": "持续并扩大",
  "挑出 binding levels": "挑出 binding levels",
  "掌握標準者可改寫市場架構與 appropriability。": "掌握标准者可改写市场架构与 appropriability。",
  "掠食者": "掠食者",
  "接著檢驗國家條件，看它如何支撐或阻礙 business model。": "接著检验国家条件，看它如何支撑或阻碍 business model。",
  "控制者接近 quasi-monopoly，其他人則容易 commodity 化。": "控制者接近 quasi-monopoly，其他人则容易 commodity 化。",
  "教科書、講義與影片都是必讀，因為大量內容會直接進入案例分析，而不會在課堂上重講。": "教科书、讲义与影片都是必读，因为大量内容会直接进入案例分析，而不会在课堂上重讲。",
  "整體框架、標準、控制結構": "整体框架、标准、控制结构",
  "新舊 business 在五個層次上有何差異？": "新旧 business 在五个层次上有何差异？",
  "新進者、替代品、法規、買方集中、供應商整合、新標準或相鄰產業入侵，都可能讓競爭類型在光譜上移動。": "新进者、替代品、法规、买方集中、供应商整合、新标准或相邻产业入侵，都可能让竞争类型在光谱上移动。",
  "方法": "方法",
  "早年 standard-setting 成功帶來 path dependency": "早年 standard-setting 成功带来 path dependency",
  "明明知道了，為甚麼行為沒有改？": "明明知道了，为甚么行为没有改？",
  "是否存在 network、nexus、standards 或 installed-base effects？": "是否存在 network、nexus、standards 或 installed-base effects？",
  "是否存在必經關鍵節點？": "是否存在必经关键节点？",
  "是哪一些 industries？": "是哪一些 industries？",
  "是哪一些國家？": "是哪一些国家？",
  "時間維度": "时间维度",
  "時間要精準分配": "时间要精准分配",
  "替顛覆型專案拆掉多層核准障礙。": "替颠覆型专案拆掉多层核准障碍。",
  "最後才回到 firm 本身。再強的 firm，若結構錯誤，一樣會吃虧。": "最后才回到 firm 本身。再强的 firm，若结构错误，一样会吃亏。",
  "最後要用 BARD 或 POE 語氣下 conclusion。": "最后要用 BARD 或 POE 语气下 conclusion。",
  "有多少國家？": "有多少国家？",
  "有幾個 industries？": "有几个 industries？",
  "有幾個國家？": "有几个国家？",
  "期末可能採較少題目、較長閱讀，讓多個議題都從同一個 reading 被處理。": "期末可能采较少题目、较长阅读，让多个议题都从同一个 reading 被处理。",
  "核心作答行為": "核心作答行为",
  "核心問題": "核心问题",
  "核心特徵": "核心特征",
  "框架打破者": "框架打破者",
  "案例": "案例",
  "案例對層次快速掃描": "案例与层面快速扫描",
  "案例層次判斷錯誤。": "案例层次判断错误。",
  "案例是主要教學載體，不是裝飾性的例子。": "案例是主要教学载体，不是装饰性的例子。",
  "案例總表": "案例总表",
  "案例轉移應用": "案例转移应用",
  "標準": "标准",
  "標準制定者": "标准制定者",
  "樞紐經濟": "枢纽经济",
  "機制": "机制",
  "正確修正：compliance 要維持 global，跨境付款要多層審批，並搭配獨立審計與 whistleblower 機制。": "正确修正：compliance 要维持 global，跨境付款要多层审批，并搭配独立审计与 whistleblower 机制。",
  "歷史上常受惠於智慧財產、健康急迫性與購買流程。": "历史上常受惠于智慧财产、健康急迫性与购买流程。",
  "每個 business 需要甚麼 SPARK？": "每个 business 需要甚么 SPARK？",
  "每個國家要有甚麼 SPARK？": "每个国家要有甚么 SPARK？",
  "每個國家需要甚麼 SPARK？": "每个国家需要甚么 SPARK？",
  "水準": "水准",
  "水表": "水表",
  "汽車": "汽车",
  "沉沒成本無法回收。理論上不該主導未來決策，但在真實世界會形成退出障礙。": "沉没成本无法回收。理论上不该主导未来决策，但在真实世界会形成退出障碍。",
  "沒有 conclusion 幾乎等於沒有分數。強證據過度保守、弱證據過度自信，兩者都會失分。": "没有 conclusion 几乎等于没有分数。强证据过度保守、弱证据过度自信，两者都会失分。",
  "沒有 conclusion。": "没有 conclusion。",
  "沒有普遍正確的 scope。真正的檢驗標準是內部一致性與市場機會匹配。": "没有普遍正确的 scope。真正的检验标准是内部一致性与市场机会匹配。",
  "波動 / 斷裂": "波动 / 断裂",
  "洗手自述": "洗手自述",
  "洗手觀察值": "洗手观察值",
  "激烈程度": "激烈程度",
  "瀏覽器戰爭中的 Microsoft": "浏览器战争中的 Microsoft",
  "為甚麼 Nokia 特別脆弱": "为甚么 Nokia 特别脆弱",
  "為甚麼 economics 在最上游": "为甚么 economics 在最上游",
  "為甚麼一定先看這裡": "为甚么一定先看这里",
  "為甚麼它對期末特別重要": "为甚么它对期末特别重要",
  "為甚麼要保留這個附錄": "为甚么要保留这个附录",
  "物流與客製化常要求在地化": "物流与客制化常要求在地化",
  "獎勵風險與障礙的回報，而不是只獎勵 progress。": "奖励风险与障碍的回报，而不是只奖励 progress。",
  "獨佔": "独占",
  "獲利潛力": "获利潜力",
  "獲利結構排序圖": "获利结构排序图",
  "環境": "环境",
  "環境究竟在獎勵甚麼、懲罰甚麼？": "环境究竟在奖励甚么、惩罚甚么？",
  "甚麼成本組合主導行為與退出？": "甚么成本组合主导行为与退出？",
  "生態系警告": "生态系统提醒",
  "產業": "产业",
  "產業定義": "产业定义",
  "產業層次": "行业层面",
  "產業結構": "产业结构",
  "產業經濟問題板": "产业经济问题板",
  "產業邊界工具": "产业边界工具",
  "產業長者": "产业长者",
  "產量增加時平均成本是否下降？": "产量增加时平均成本是否下降？",
  "用 evidence 推導出帶有校準信心程度的 conclusion。": "用 evidence 推导出带有校准信心程度的 conclusion。",
  "用 progress 持續激勵": "用 progress 持续激励",
  "用客戶面向的輸出畫產業邊界，不要用 technology label 畫。": "用客户面向的输出画产业边界，不要用 technology label 画。",
  "用對工具，不要把整座 framework library 全搬上來。": "用对工具，不要把整座 framework library 全搬上来。",
  "界定策略性產業": "界定策略性产业",
  "異類": "异类",
  "當 evidence 傾向某方向但仍有限時，用 POE 型語氣。": "当 evidence 倾向某方向但仍有限时，用 POE 型语气。",
  "當證據很強、可行替代解釋極少時，用 BARD 型語氣。": "当证据很强、可行替代解释极少时，用 BARD 型语气。",
  "病理": "病理",
  "相近業務一起做是否能降總成本或提升品質？": "相近业务一起做是否能降总成本或提升品质？",
  "看見問題": "看见问题",
  "真實 bargaining outcome 取決於三軸交互，而不是只看表面 strength。": "真实 bargaining outcome 取决于三轴交互，而不是只看表面 strength。",
  "真正的抗拒來自哪裡？": "真正的抗拒来自哪里？",
  "眾多玩家、差異化弱、價格競爭重。": "众多玩家、差异化弱、价格竞争重。",
  "研究與 prototype 訊號早已存在，但沒有轉成行動。": "研究与 prototype 讯号早已存在，但没有转成行动。",
  "硬體導向的領導結構": "硬体导向的领导结构",
  "競爭三維分析": "竞争三维分析",
  "競爭型態": "竞争型态",
  "競爭型態光譜": "竞争型态光谱",
  "競爭激烈度九宮格": "竞争激烈度九宫格",
  "競爭變數": "竞争变数",
  "第一個問題": "第一个问题",
  "等 useful output 與 direct rivals 都清楚後，再劃定邊界。這能避免用分類代碼或品牌印象來誤判。": "等 useful output 与 direct rivals 都清楚后，再划定边界。这能避免用分类代码或品牌印象来误判。",
  "答題建構流程": "答题建构流程",
  "策略哲學": "策略哲学",
  "管理者明知時程不合理，仍持續回報樂觀進度。": "管理者明知时程不合理，仍持续回报乐观进度。",
  "範疇經濟": "范畴经济",
  "累積經驗是否能改善成本或品質？": "累积经验是否能改善成本或品质？",
  "組織到底沒看見甚麼？": "组织到底没看见甚么？",
  "結果": "结果",
  "結構傾向較少玩家，常推向 oligopoly 或 monopoly。": "结构倾向较少玩家，常推向 oligopoly 或 monopoly。",
  "結構含意": "结构含意",
  "經典對比：Swatch 從 Flik Flak 到 Breguet 橫跨多個 segment，而 Rolex 集中在高端區段。": "经典对比：Swatch 从 Flik Flak 到 Breguet 横跨多个 segment，而 Rolex 集中在高端区段。",
  "維度": "维度",
  "網路經濟": "网路经济",
  "總體條件、所得分布、數位轉移與消費行為變化同時作用。": "总体条件、所得分布、数位转移与消费行为变化同时作用。",
  "缺了甚麼": "缺了甚么",
  "群聚 / 中觀": "群聚 / 中观",
  "群聚可以源自自然資源、市場接近性、勞動力池、專業投入供應商、共享基礎設施、較低交易成本與知識外溢。": "群聚可以源自自然资源、市场接近性、劳动力池、专业投入供应商、共享基础设施、较低交易成本与知识外溢。",
  "考場攻擊系統": "考场作答系统",
  "考試 framing": "考试 framing",
  "考試檢驗方式": "考试检验方式",
  "考試訊號": "考试信号",
  "能否指出真實、可量化的共用成本或品質效益？": "能否指出真实、可量化的共用成本或品质效益？",
  "自述與實際行為差距": "自述与实际行为差距",
  "致命錯誤清單": "致命错误清单",
  "航空": "航空",
  "若是 business-facing case，先做快速 underlying-economics 掃描。": "若是 business-facing case，先做快速 underlying-economics 扫描。",
  "若連結真實存在，支持整合或多角化結構。": "若连结真实存在，支持整合或多角化结构。",
  "落地執行與組織病理": "落地执行与组织病理",
  "落地與執行": "落地与执行",
  "虧損公司仍被維持存活，價格壓力持續。": "亏损公司仍被维持存活，价格压力持续。",
  "行為實驗錨點與它們的意義": "行为实验锚点与它们的意义",
  "補貼競爭": "补贴竞争",
  "製藥": "制药",
  "覆蓋檢查": "覆盖检查",
  "規則執行者": "规则执行者",
  "規格制定者、採購者與付款者分離；成本占比小，但低估計量風險很大。": "规格制定者、采购者与付款者分离；成本占比小，但低估计量风险很大。",
  "規模經濟": "规模经济",
  "觸發字樣": "触发字样",
  "訊息是否具體到足以被執行？": "讯息是否具体到足以被执行？",
  "設 red-team 或外部 review window 去推翻主流看法。": "设 red-team 或外部 review window 去推翻主流看法。",
  "誰在直接爭奪同一種輸出？": "谁在直接争夺同一种输出？",
  "誰掌握技術或介面標準？": "谁掌握技术或介面标准？",
  "課程訊號": "课程讯号",
  "講 performance 卻沒有說 comparator。": "讲 performance 却没有说 comparator。",
  "議價力是三軸診斷": "议价力是三轴诊断",
  "讀者導向": "读者导向",
  "變動成本會隨產量改變。只要價格高於變動成本，短期內多賣通常仍有誘因。": "变动成本会随产量改变。只要价格高于变动成本，短期内多卖通常仍有诱因。",
  "貼入骨架原文完整保留": "完整保留粘贴骨架原文",
  "資本密集，具有差異化，但競爭依然激烈。": "资本密集，具有差异化，但竞争依然激烈。",
  "超出國界": "超出国界",
  "超國家 / 全球": "超国家 / 全球",
  "超國家 / 全球層次": "超国家 / 全球层面",
  "超競爭": "超竞争",
  "趨勢": "趋势",
  "跨層": "跨层",
  "轉成可執行語言": "转成可执行语言",
  "追蹤落地": "追踪落地",
  "這一節比起八組文字，更適合記成 ecosystem map。": "这一节比起八组文字，更适合记成 ecosystem map。",
  "這也是 future competition 與 CEA 特別重要的地方。": "这也是 future competition 与 CEA 特别重要的地方。",
  "這些 businesses 是 related 還是 unrelated？": "这些 businesses 是 related 还是 unrelated？",
  "這些國家彼此相似，還是有本質差異？": "这些国家彼此相似，还是有本质差异？",
  "這些國家相似還是本質不同？": "这些国家相似还是本质不同？",
  "這份考試真正測甚麼": "这份考试真正测甚么",
  "這個 industry 在 form、function、direct competition 上到底做甚麼？": "这个 industry 在 form、function、direct competition 上到底做甚么？",
  "這個 multi-business company 要如何組織？": "这个 multi-business company 要如何组织？",
  "這家國際企業有沒有大於 parts 的總和？": "这家国际企业有没有大于 parts 的总和？",
  "這常直接決定削價壓力、退出障礙與獲利劇烈程度。": "这常直接决定削价压力、退出障碍与获利剧烈程度。",
  "這是 Tier 1 內容，但在 final exam 的優先度低於 economics、CEA、international、corporate、implementation。": "这是 Tier 1 内容，但在 final exam 的优先度低于 economics、CEA、international、corporate、implementation。",
  "這是結構性解釋，還不是 firm-specific 解釋。": "这是结构性解释，还不是 firm-specific 解释。",
  "這會把產業推向哪種 competition type？": "这会把产业推向哪种 competition type？",
  "這門課的目的，是讓你更接近 strategy-related work 的 job-ready 狀態，而不只是更會背課堂內容。": "这门课的目的，是让你更接近 strategy-related work 的 job-ready 状态，而不只是更会背课堂内容。",
  "連到行動": "连到行动",
  "遇到 sustainability 或 future competition 題，卻沒用 CEA。": "遇到 sustainability 或 future competition 题，却没用 CEA。",
  "關鍵洞察：即便同是 oligopoly，真正影響 profit 的是在哪個 variable 上競爭。香港地產靠位置與產品特徵獲利，香港行動電信則常因過剩產能而走向價格競爭。": "关键洞察：即便同是 oligopoly，真正影响 profit 的是在哪个 variable 上竞争。香港地产靠位置与产品特征获利，香港行动电信则常因过剩产能而走向价格竞争。",
  "附錄": "附录",
  "預設層次": "预设层次",
  "預設工具": "预设工具",
  "預設答題骨架": "预设答题骨架",
  "預設配對": "预设配对",
  "題目 trigger → 工具對應": "题目 trigger → 工具对应",
  "類別": "类别",
  "類型": "类型",
  "香港銀行業中的 HSBC": "香港银行业中的 HSBC",
  "高 fixed 與 sunk cost 加上低差異化，形成結構性低獲利。": "高 fixed 与 sunk cost 加上低差异化，形成结构性低获利。",
  "高固定加低變動成本常引出削價。高沉沒成本會困住玩家。低固定加高變動成本則更接近 perfect competition 邏輯。": "高固定加低变动成本常引出削价。高沉没成本会困住玩家。低固定加高变动成本则更接近 perfect competition 逻辑。",
  "高層持續把 Nokia 當成 hardware company，而不是 software-platform 競爭問題。": "高层持续把 Nokia 当成 hardware company，而不是 software-platform 竞争问题。",
  "高權重": "高权重",
  "高權重作答藍圖": "高权重作答蓝图",
  "高權重焦點": "高权重焦点",
  "高權重組織診斷": "高权重组织诊断"
};


const PT_MAP = {
  "Exam Signals": "Sinais da prova",
  "Analytical Spine": "Espinha analítica",
  "Underlying Economics": "Economia de base",
  "Industry Level": "Nível da indústria",
  "Firm Level": "Nível da empresa",
  "Cluster / Meso Level": "Nível de cluster / meso",
  "National / Macro Level": "Nível nacional / macro",
  "Supranational / Meta Level": "Nível supranacional / meta",
  "International Strategy": "Estratégia internacional",
  "Corporate Strategy": "Estratégia corporativa",
  "Implementation": "Implementação",
  "Case Grid": "Mapa de casos",
  "Exam Attack System": "Sistema de ataque da prova",
  "Source Fidelity Appendix": "Apêndice de fidelidade ao material-base",
  "All": "Tudo",
  "High Weight": "Maior peso",
  "Frameworks": "Frameworks",
  "Cases": "Casos",
  "Appendix": "Apêndice",
  "STRT 6200 Final Exam Infrastructure": "Infraestrutura da prova final de STRT 6200",
  "Strategic Decision-Making Review System": "Sistema de revisão de tomada de decisão estratégica",
  "Search keyword, case, or tool…": "Buscar palavra-chave, caso ou ferramenta…",
  "Reading map": "Mapa de leitura",
  "Language": "Idioma",
  "Language switch": "Trocar idioma",
  "Sources": "Fontes",
  "Show source appendix": "Mostrar apêndice da fonte",
  "Hide source appendix": "Ocultar apêndice da fonte",
  "Original pasted master review": "Master review original colado",
  "No sections match the current filter.": "Nenhuma seção corresponde ao filtro atual.",
  "Try a broader search term or switch the chip filter back to All.": "Tente um termo mais amplo ou volte o filtro para Tudo.",
  "EN": "EN",
  "中": "中文",
  "BI": "Bilíngue",
  "Tiếng Việt": "Tiếng Việt",
  "Português": "Português",
  "Professional standard, not student display": "Padrão profissional, não vitrine de estudante",
  "Core exam behavior": "Comportamento central da prova",
  "Weighted toward international, corporate, and implementation": "Peso maior em internacional, corporativo e implementação",
  "The four literal rubric lines": "As quatro linhas literais da rubrica",
  "What this really means in practice": "O que isso realmente significa na prática",
  "Strategic mindset, not lecture recall": "Mentalidade estratégica, não memória de aula",
  "The paper is closed-book, time-boxed, and several short essays. Cases, lecture notes, and videos are required inputs, not optional extras.": "A prova é sem consulta, com tempo fechado e composta por várias questões dissertativas curtas. Casos, lecture notes e vídeos são insumos obrigatórios, não extras opcionais.",
  "This section matters because it clarifies what Enright is actually grading. The safest framing is not 'show everything you know,' but 'show disciplined strategic judgment under time pressure.'": "Esta seção importa porque esclarece o que Enright realmente avalia. O enquadramento mais seguro não é 'mostrar tudo o que você sabe', mas 'mostrar julgamento estratégico disciplinado sob pressão de tempo'.",
  "Answer the question in front of you, not the one you hoped to get.": "Responda à pergunta que está na sua frente, não à que você gostaria que tivesse caído.",
  "Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger.": "Não use framework como vocabulário de exibição. Escolha a ferramenta analítica certa para o gatilho do caso.",
  "Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades.": "Trabalhe apenas com os níveis realmente vinculantes. Teoria desnecessária, casos extras e enchimento genérico enfraquecem a nota.",
  "The exam rewards disciplined triage, not maximum text volume.": "A prova recompensa triagem disciplinada, não o maior volume de texto.",
  "Search": "Buscar",
  "Sort": "Organizar",
  "Analyze": "Analisar",
  "Hypothesize": "Hipotetizar",
  "Test": "Testar",
  "Conclude": "Concluir",
  "Formulate": "Formular",
  "Implement": "Implementar",
  "Analytical flow": "Fluxo analítico",
  "Confidence calibration": "Calibração de confiança",
  "Detail-to-big-picture zoom": "Zoom do detalhe para o quadro geral",
  "Do not use BARD language unless the facts nearly eliminate reasonable alternative explanations.": "Não use linguagem de BARD a menos que os fatos quase eliminem explicações alternativas razoáveis.",
  "Use POE when the evidence tilts in one direction but remains materially incomplete.": "Use POE quando a evidência aponta para uma direção, mas ainda permanece materialmente incompleta.",
  "Underlying economics should appear early in the answer, not as an afterthought. Enright repeatedly teaches that industry profit patterns come from structural economics first, then competition, then firm modifiers.": "A economia de base deve aparecer cedo na resposta, não como um complemento tardio. Enright repete que os padrões de lucro da indústria vêm primeiro da estrutura econômica, depois da competição e por fim dos modificadores da firma.",
  "Competition spectrum": "Espectro competitivo",
  "Industry boundary method": "Método de fronteira da indústria",
  "Industry economics board": "Quadro da economia da indústria",
  "Firm architecture": "Arquitetura da firma",
  "SPARK architecture": "Arquitetura SPARK",
  "Relative performance discipline": "Disciplina de performance relativa",
  "Cluster ecosystem": "Ecossistema de cluster",
  "Meso ecosystem board": "Quadro do ecossistema meso",
  "Macro scan": "Varredura macro",
  "Macro board": "Quadro macro",
  "Meta pressure board": "Quadro de pressão meta",
  "International architecture": "Arquitetura internacional",
  "Corporate architecture": "Arquitetura corporativa",
  "Implementation diagnosis": "Diagnóstico de implementação",
  "Fast case-to-level scan": "Leitura rápida caso-nível",
  "Answer construction flow": "Fluxo de construção da resposta",
  "What this build is for": "Para que serve esta versão",
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "Esta versão foi desenhada como um sistema de revisão voltado ao usuário final, não como um memorando de andamento. Ela parte da premissa de que você precisa ler rápido, enxergar a estrutura de imediato e passar do conceito para a aplicação em caso sem perder fidelidade.",
  "Why this appendix remains": "Por que este apêndice continua aqui",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "A interface principal reorganiza o material para leitura e execução de prova. Este apêndice mantém o master review original colado dentro do arquivo para que a infraestrutura aprimorada não omita silenciosamente essa espinha dorsal.",
  "This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix.": "Esta infraestrutura foi construída a partir da espinha dorsal do final review colado e conferida com o texto do curso, o enquadramento da Session 1, o deck do Last Day, a aula de implementation, as practice questions e os principais materiais de caso. As notas originais completas permanecem preservadas no apêndice.",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "A lógica da prova é explícita: antes da linguagem de estratégia, entenda como o negócio ganha dinheiro. A economia de base molda a estrutura da indústria, que molda a competição, que molda o potencial de lucro, e isso depois é modificado pelo SPARK, pela posição de barganha, pela liderança e pela execução da firma focal.",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "Um insight de alto nível sobre a Nokia é que ela já funcionou como definidora de padrão porque os padrões nórdicos viraram padrões europeus e depois globais. Mais tarde, a Apple redefiniu o padrão ao redor da plataforma de software, tornou-se a quebradora do enquadramento e esvaziou a vantagem anterior da Nokia.",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "Não pare nos rivais atuais. Inclua entrantes de indústrias relacionadas e segmentos de demanda ainda não atendidos. Muitas das maiores ameaças vêm exatamente dessas duas direções.",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "Coopetition significa que o mesmo conjunto de players pode cooperar em uma atividade e competir em outra. Na resposta de prova, separe a relação no nível da atividade em vez de declarar o outro lado simplesmente amigo ou inimigo.",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "Qualquer afirmação de que uma firma está indo bem ou mal deve identificar primeiro o comparador. Dizer que 'o desempenho é fraco' sem nomear o ponto de referência é mecanicamente inseguro.",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "Externalização não é automaticamente boa. A estratégia asset-light de uma empresa normalmente depende de outra carregando o peso asset-heavy. Se você não consegue identificar onde o valor é criado, apropriado e defendido, talvez esteja entregando esse valor.",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "O mundo não é plano da forma como certos textos populares sugerem. A criação de ideias continua altamente concentrada em pessoas, empresas e lugares específicos, enquanto os recursos de execução são mais distribuídos. A pergunta estratégica central é quem vira o flattener e quem acaba achatado, competindo só em execução.",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "Drivers supranacionais não apenas mudam níveis de lucro. Eles podem reescrever quem pode entrar, sob quais regras, com quais tecnologias e sob quais restrições geopolíticas. É por isso que pesam tanto em perguntas de estratégia internacional e corporativa.",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "A empresa vale mais do que a soma das partes? Se a resposta for não, os investidores podem diversificar sozinhos e a estrutura corporativa pode estar destruindo valor em vez de criá-lo.",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "O erro gerencial está em subestimar sistematicamente o ambiente. O ponto didático é que o comportamento é explicado muito mais pela situação do que os gestores costumam supor. Se você quer mudar comportamento, redesenhe o ambiente em vez de dar sermão sobre personalidade.",
  "Use the right tool for the job": "Use a ferramenta certa para o trabalho",
  "Do not include extraneous material": "Não inclua material irrelevante",
  "Use your time wisely": "Use o tempo com inteligência",
  "Reading the question correctly is itself a grading event": "Ler a pergunta corretamente já faz parte da nota",
  "Weighted areas": "Áreas de maior peso",
  "EugeneYip.com": "EugeneYip.com"
};

const PT_DEEP_MAP = {
  "This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output.": "Este é o método mais seguro para a prova, porque evita que a definição da indústria escorregue para rótulos no estilo SIC ou para categorias tecnológicas. O teste correto é concorrência direta por um output semelhante voltado ao cliente.",
  "Availability, quality, cost, concentration, bargaining power, and collaboration all shape what the focal business can do.": "Disponibilidade, qualidade, custo, concentração, poder de barganha e colaboração moldam diretamente o que o negócio focal consegue fazer.",
  "Knowledge spillovers, common channels, and scope economies can lower cost or improve the offer without changing the focal firm itself.": "Knowledge spillovers, canais compartilhados e economias de escopo podem reduzir custo ou melhorar a oferta sem que a firma focal mude por completo.",
  "Performance depends on how well the focal player fits into the surrounding system, not just on what it does alone.": "A performance depende de quão bem o player focal se encaixa no sistema ao redor, e não apenas do que ele faz isoladamente.",
  "Size, growth, sophistication, segmentation, bargaining power, and price sensitivity determine the revenue side of the system.": "Tamanho, crescimento, sofisticação, segmentação, poder de barganha e sensibilidade a preço determinam o lado da receita dentro do sistema.",
  "Complements expand demand or willingness to pay. Substitutes cap upside and can compress margins quickly.": "Complementos ampliam a demanda ou a disposição a pagar. Substitutos limitam o upside e podem comprimir margens com rapidez.",
  "Cluster policies, training systems, and public-private institutions can strengthen or weaken the whole ecosystem over time.": "Políticas de cluster, sistemas de formação e instituições público-privadas podem fortalecer ou enfraquecer todo o ecossistema ao longo do tempo.",
  "Meta forces matter when they change who may enter, with what technology, under what political constraints, and on what global terms.": "As forças meta importam quando mudam quem pode entrar, com qual tecnologia, sob quais restrições políticas e em que termos globais.",
  ": run five-level home-versus-host contrast.": ": faça o contraste home versus host pelos cinco níveis.",
  ": define SPARK and the global-local split.": ": defina SPARK e a divisão global-local.",
  ": decide whether the company is worth more integrated than separate.": ": decida se a empresa vale mais integrada do que separada.",
  "If none of these mechanisms is real and defensible, the corporate structure may be destroying rather than creating value.": "Se nenhum desses mecanismos for real e defensável, a estrutura corporativa pode estar destruindo valor em vez de criá-lo.",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "Insight de alta pontuação sobre a Nokia: a Nokia já funcionou como standard setter porque os padrões nórdicos viraram padrões europeus e depois globais. Mais tarde, a Apple redefiniu o padrão em torno da plataforma de software, virou a frame-breaker e esvaziou a vantagem anterior da Nokia.",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "Externalization não é automaticamente algo bom. A estratégia asset-light de uma empresa normalmente depende de outra carregar o peso asset-heavy. Se você não consegue identificar onde o valor é criado, onde é apropriado e onde é defendido, talvez esteja simplesmente entregando esse valor.",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "Guia final em uma frase: comece pela underlying economics, identifique os níveis vinculantes, teste SPARK junto com leadership e execution, faça um pressure test da future competition com CEA e depois pergunte se organization e implementation permitem que a firma realize e defenda o valor que deveria estar disponível."
};


const ES_MAP = {
  "STRT 6200 Final Exam Infrastructure": "Infraestructura del examen final STRT 6200",
  "Strategic Decision-Making Review System": "Sistema de repaso de Strategic Decision-Making",
  "Exam Signals": "Señales del examen",
  "Analytical Spine": "Columna analítica",
  "Underlying Economics": "Economía subyacente",
  "Industry Level": "Nivel industria",
  "Firm Level": "Nivel empresa",
  "Cluster / Meso Level": "Nivel clúster / meso",
  "National / Macro Level": "Nivel nacional / macro",
  "Supranational / Meta Level": "Nivel supranacional / meta",
  "International Strategy": "Estrategia internacional",
  "Corporate Strategy": "Estrategia corporativa",
  "Implementation": "Implementación",
  "Case Grid": "Mapa de casos",
  "Exam Attack System": "Sistema de ataque para el examen",
  "Source Fidelity Appendix": "Apéndice de fidelidad de fuente",
  "All": "Todo",
  "High Weight": "Mayor peso",
  "Frameworks": "Frameworks",
  "Cases": "Casos",
  "Appendix": "Apéndice",
  "Reading map": "Mapa de lectura",
  "No sections match the current filter.": "No hay secciones que coincidan con el filtro actual.",
  "Try a broader search term or switch the chip filter back to All.": "Prueba con un término más amplio o regresa el filtro de chips a Todo.",
  "What useful output does the customer actually receive?": "¿Qué resultado útil recibe realmente el cliente?",
  "Who is directly competing to supply that same output?": "¿Quién compite directamente por ofrecer ese mismo resultado?",
  "Draw the industry boundary from that customer-facing output, not from the technology label.": "Traza la frontera de la industria desde ese resultado visible para el cliente, no desde la etiqueta tecnológica.",
  "Scope": "Alcance",
  "Positioning": "Posicionamiento",
  "Activities": "Actividades",
  "Resources": "Recursos",
  "Knowledge": "Conocimiento",
  "Leadership": "Liderazgo",
  "Execution": "Ejecución",
  "Organization & management": "Organización y gestión",
  "Governance": "Gobernanza",
  "Start with the industry. Define the strategically meaningful competitive field first.": "Empieza por la industria. Primero define el campo competitivo con sentido estratégico.",
  "Move outward to the cluster or ecosystem that shapes suppliers, customers, complements, and substitutes.": "Después abre el análisis hacia el clúster o ecosistema que moldea proveedores, clientes, complementos y sustitutos.",
  "Then test the country context that enables or blocks the business model.": "Luego prueba el contexto país que habilita o bloquea el modelo de negocio.",
  "Then layer in supranational pressures that rewrite the rules above the nation state.": "Después suma las presiones supranacionales que reescriben las reglas por encima del Estado nacional.",
  "Only then judge the firm itself. Strong firms inside bad structures still struggle.": "Solo entonces juzga a la empresa. Una empresa fuerte dentro de una mala estructura igual va a sufrir.",
  "Sources": "Fuentes",
  "Language": "Idioma",
  "Search keyword, case, or tool…": "Busca una palabra clave, caso o herramienta…",
  "Show source appendix": "Mostrar apéndice de fuente",
  "Hide source appendix": "Ocultar apéndice de fuente",
  "Original pasted master review": "Master review original pegado",
  "Language switch": "Cambiar idioma",
  "EN": "EN",
  "中": "中文",
  "BI": "Bilingüe",
  "Tiếng Việt": "Tiếng Việt",
  "Português": "Português",
  "Español": "Español",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "La interfaz principal reorganiza el material para que sea más legible y más útil al contestar el examen. Este apéndice conserva dentro del archivo el master review original pegado, para que la infraestructura mejorada no omita en silencio esa columna vertebral.",
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "Esta versión está pensada como un sistema de repaso orientado al usuario final, no como un memo de avance. Parte de que necesitas leer rápido, ver la estructura de inmediato y pasar del concepto a la aplicación en casos sin perder fidelidad.",
  "Answer the question in front of you, not the one you hoped to get.": "Responde la pregunta que tienes enfrente, no la que te hubiera gustado que saliera.",
  "Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger.": "No muestres frameworks como si fueran vocabulario. Selecciona la herramienta analítica correcta según el disparador del caso.",
  "Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades.": "Solo los niveles que realmente amarran. La teoría innecesaria, los casos extra y el relleno genérico te diluyen la calificación.",
  "The exam rewards disciplined triage, not maximum text volume.": "El examen premia el triage disciplinado, no el mayor volumen de texto.",
  "This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix.": "Esta infraestructura se construyó a partir de la columna vertebral del final review pegado y se cotejó con el texto del curso, el encuadre de la Session 1, el deck de Last Day, la clase de implementation, las practice questions y los materiales de caso clave. Las notas originales completas siguen preservadas en el apéndice.",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "La lógica del examen es explícita: antes de usar lenguaje de strategy, hay que entender cómo gana dinero el negocio. La economía subyacente moldea la estructura de la industria; la estructura moldea la competencia; la competencia moldea el potencial de ganancia; y eso después se modifica por el SPARK, la posición de negociación, el liderazgo y la ejecución de la empresa focal.",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "Un insight de alto puntaje sobre Nokia es que llegó a funcionar como standard setter porque los estándares nórdicos se volvieron europeos y luego globales. Después Apple redefinió el estándar alrededor de la plataforma de software, convirtió a Apple en el frame-breaker y vació la ventaja previa de Nokia.",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "No te quedes solo con los rivales actuales. Suma entrantes de industrias relacionadas y segmentos de demanda no atendida. Muchas de las amenazas más grandes vienen justo de esos dos lados.",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "Coopetition significa que el mismo grupo de jugadores puede cooperar en una actividad y competir en otra. En una respuesta de examen, separa la relación al nivel de la actividad en lugar de etiquetar al otro lado simplemente como amigo o enemigo.",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "Cualquier afirmación de que una empresa está funcionando bien o mal debe identificar primero el comparador. Decir que 'el desempeño es débil' sin nombrar el punto de referencia es mecánicamente inseguro.",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "Externalizar no es automáticamente bueno. La estrategia asset-light de una empresa normalmente depende de que otra cargue con el peso asset-heavy. Si no puedes identificar dónde se crea el valor, dónde se apropia y dónde se defiende, es posible que estés regalando ese valor.",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "El mundo no es flat de la manera en que a veces lo plantea la divulgación popular. La creación de ideas sigue muy concentrada en personas, empresas y lugares específicos, mientras que los recursos de ejecución están mucho más distribuidos. La pregunta estratégica clave es quién se vuelve el flattener y quién termina aplanado, compitiendo solo en ejecución.",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "Los drivers supranacionales no solo cambian niveles de ganancia. Pueden reescribir quién puede entrar, bajo qué reglas, con qué tecnologías y con qué restricciones geopolíticas. Por eso pesan de manera desproporcionada en preguntas de estrategia internacional y corporativa.",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "¿La empresa vale más que la suma de sus partes? Si la respuesta es no, los inversionistas pueden diversificarse por su cuenta y la estructura corporativa podría estar destruyendo valor en lugar de crearlo.",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "El error gerencial está en subestimar sistemáticamente el entorno. La enseñanza aquí es que el comportamiento se explica mucho más por la situación de lo que los gerentes suelen asumir por instinto. Si quieres cambiar conductas, rediseña el entorno en vez de sermonear sobre personalidad.",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "Guía final en una sola frase: empieza por la economía subyacente, identifica los niveles que realmente amarran, prueba SPARK más liderazgo y ejecución, somete la competencia futura a presión con CEA y luego pregunta si la organización y la implementación permiten que la empresa capture y defienda el valor que debería estar disponible.",
  "Use the right tool for the job": "Usa la herramienta correcta para el trabajo",
  "Do not include extraneous material": "No incluyas material irrelevante",
  "Use your time wisely": "Usa bien tu tiempo",
  "Reading the question correctly is itself a grading event": "Leer bien la pregunta ya es parte de la calificación",
  "Weighted areas": "Áreas de mayor peso",
  "Competition spectrum": "Espectro de competencia",
  "Industry boundary method": "Método para delimitar la industria",
  "Industry economics board": "Panel de economía de la industria",
  "Firm architecture": "Arquitectura de la empresa",
  "SPARK architecture": "Arquitectura SPARK",
  "Relative performance discipline": "Disciplina de desempeño relativo",
  "Cluster ecosystem": "Ecosistema del clúster",
  "Meso ecosystem board": "Panel del ecosistema meso",
  "Macro scan": "Barrido macro",
  "Macro board": "Panel macro",
  "Meta pressure board": "Panel de presión meta",
  "International architecture": "Arquitectura internacional",
  "Corporate architecture": "Arquitectura corporativa",
  "Implementation diagnosis": "Diagnóstico de implementación",
  "Fast case-to-level scan": "Lectura rápida caso a nivel",
  "Answer construction flow": "Flujo de construcción de respuesta",
  "What this build is for": "Para qué sirve esta versión",
  "Why this appendix remains": "Por qué se conserva este apéndice",
  "EugeneYip.com": "EugeneYip.com"
};


const JP_MAP = {
  "STRT 6200 Final Exam Infrastructure": "STRT 6200 ファイナル試験インフラストラクチャ",
  "Strategic Decision-Making Review System": "Strategic Decision-Making レビューシステム",
  "Search keyword, case, or tool…": "キーワード、ケース、ツールを検索…",
  "Language": "言語",
  "Language switch": "言語切替",
  "Reading map": "読み方マップ",
  "Source appendix": "ソース付録",
  "Original source appendix": "元のソース付録",
  "What this build is for": "このビルドの使い方",
  "Weighted areas": "重点領域",
  "Frameworks": "フレームワーク",
  "Cases": "ケース",
  "Appendix": "付録",
  "All": "すべて",
  "English-first interface with permanent mode switch": "英語を主軸にした常設切替インターフェース",
  "Source fidelity preserved inside the file": "ソースの忠実性をファイル内で保持",
  "Improved for desktop, tablet, and phone reading": "PC、タブレット、スマホで読みやすいよう最適化",
  "Exam execution before decoration": "装飾より試験での使いやすさを優先",
  "Built for fast scanning, structured recall, and case application": "高速スキャン、構造化された想起、ケースへの適用を重視して設計",
  "Built from the final pasted backbone, then checked against course files": "貼り付けられた最終バックボーンを土台にし、コース資料で照合して構築",
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "このビルドは進捗メモではなく、実際に使うための復習システムとして設計されています。素早く読み、構造をすぐ把握し、内容の忠実性を落とさずに概念からケース適用へ移れることを前提にしています。",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "メイン画面は読みやすさと試験での使いやすさを重視して再構成されています。この付録には、貼り付けられた元の master review をそのまま保持しており、アップグレード版のインフラが元のバックボーンを見えない形で落としてしまわないようにしています。",
  "Answer the question in front of you, not the one you hoped to get.": "自分が出てほしかった問いではなく、目の前の設問に答える。",
  "Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger.": "フレームワークを用語集のように並べない。ケースのトリガーに合った分析ツールを選ぶ。",
  "Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades.": "書くのは binding するレベルだけ。不要な理論、余分なケース、一般論の filler は得点を薄める。",
  "The exam rewards disciplined triage, not maximum text volume.": "この試験で評価されるのは文字量ではなく、規律ある triage です。",
  "This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix.": "このインフラは、貼り付けられた final review のバックボーンを土台にし、course text、Session 1 の course framing、Last Day deck、implementation lecture、practice questions、主要ケース資料と照合して作成しています。元のノート全文は付録に保持されています。",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "試験のロジックは明確です。strategy language に入る前に、その business がどう稼ぐのかを理解すること。Underlying economics が industry structure を決め、industry structure が competition を決め、competition が profit potential を決め、その上で focal firm の SPARK、交渉力、leadership、execution が修正を加えます。",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "高得点につながる Nokia の insight はこうです。Nokia はかつて Nordic standards が European、さらに global standards へ広がる流れの中で standard setter として機能していました。その後 Apple が software platform を中心に標準そのものを再定義し、Apple が frame-breaker となり、Nokia の従来の優位を空洞化させました。",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "現在の rivals だけで止めない。related industry からの entrants と unmet demand segments を必ず加える。大きな脅威の多くはこの二方向から来る。",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "Coopetition とは、同じプレイヤー群がある activity では協力し、別の activity では競争することです。試験答案では、相手を単純に味方か敵かで決めるのではなく、activity レベルで関係を分けて書く。",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "企業の performance が良い悪いと述べるなら、まず comparator を明示すること。基準を示さずに『performance is weak』と書くのは答案として危険です。",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "Externalization は自動的に良いわけではありません。ある会社の asset-light strategy は、通常ほかの会社が asset-heavy の負担を引き受けることに依存しています。value がどこで創られ、どこで appropriated され、どこで defended されるかを特定できないなら、その value を手放している可能性があります。",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "世の中は一般向けの議論が言うほど flat ではありません。ideas の創出は今でも特定の人、企業、場所に強く集中しており、execution resources の方がより広く分散しています。戦略上の重要な問いは、誰が flattener になるのか、そして誰が execution だけで競争する側に押し込まれるのかです。",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "Supranational drivers は単に profit level を変えるだけではありません。誰が参入できるのか、どの rules の下で、どの technologies を使い、どの geopolitical constraints を受けるのかまで書き換えます。だからこそ international strategy や corporate strategy の設問で比重が大きいのです。",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "その company は parts の総和以上の存在か。答えが no なら、投資家は自分で分散投資できるので、corporate structure は value を創るどころか壊しているかもしれません。",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "managerial mistake は environment を体系的に過小評価することです。ここでの teaching point は、behavior は managers が直感的に思う以上に situation によって説明されるということ。行動を変えたいなら personality を説教するより environment を設計し直すべきです。",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "最後の一文ガイド。underlying economics から始め、binding する levels を特定し、SPARK に leadership と execution を加えて検証し、CEA で future competition を pressure-test し、そのうえで organization と implementation が本来得られるはずの value を実現し守れるかを問う。",
  "Use the right tool for the job": "設問に合ったツールを使う",
  "Do not include extraneous material": "余計な材料を入れない",
  "Use your time wisely": "時間配分を誤らない",
  "Reading the question correctly is itself a grading event": "設問を正しく読むこと自体が採点対象",
  "Competition spectrum": "競争スペクトラム",
  "Industry boundary method": "業界境界の切り方",
  "Industry economics board": "業界エコノミクス・ボード",
  "Firm architecture": "企業アーキテクチャ",
  "SPARK architecture": "SPARK アーキテクチャ",
  "Relative performance discipline": "相対 performance の規律",
  "Cluster ecosystem": "クラスター・エコシステム",
  "Meso ecosystem board": "メソ・エコシステム・ボード",
  "Macro scan": "マクロ・スキャン",
  "Macro board": "マクロ・ボード",
  "Meta pressure board": "メタ圧力ボード",
  "International architecture": "国際戦略アーキテクチャ",
  "Corporate architecture": "コーポレート戦略アーキテクチャ",
  "Implementation diagnosis": "実行診断",
  "Fast case-to-level scan": "ケースとレベルの高速照合",
  "Answer construction flow": "答案構築フロー",
  "Why this appendix remains": "この付録を残している理由",
  "EN": "EN",
  "中": "中文",
  "BI": "バイリンガル",
  "Tiếng Việt": "Tiếng Việt",
  "Português": "Português",
  "Español": "Español",
  "日本語": "日本語",
  "Sources": "ソース",
  "Show source appendix": "ソース付録を表示",
  "Hide source appendix": "ソース付録を非表示",
  "Original pasted master review": "元の pasted master review",
  "No sections match the current filter.": "現在のフィルター条件に一致する section はありません。",
  "Try a broader search term or switch the chip filter back to All.": "より広い検索語を試すか、chip filter を All に戻してください。",
  "Select": "選択",
  "Compare": "比較",
  "Configure": "設計",
  "Organize": "整理",
  "Central test": "中心テスト",
  "Rule rewrite": "ルールの書き換え",
  "Four workstreams": "4つの作業線",
  "Structure": "構造",
  "Exam mechanics": "試験の作法",
  "Exam build order": "答案の組み立て順",
  "High-yield reminders": "高頻出の注意点",
  "EugeneYip.com": "EugeneYip.com"
};

const JP_DEEP_MAP = {
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "このビルドは進捗報告用のメモではなく、実際に使うための復習システムとして設計されています。素早く読み、構造をすぐ把握し、内容の忠実性を落とさずに concept から case application へ移れることを前提にしています。",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "メイン画面は、読みやすさと試験本番での使いやすさを重視して再構成されています。この appendix には、貼り付けられた元の master review をそのまま保持しており、アップグレードしたインフラがその backbone を気づかないうちに落としてしまわないようにしています。",
  "This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output.": "これは試験でより安全な方法です。industry definition が SIC 型の labels や単なる technology categories に流れてしまうのを防げるからです。見るべき基準は、似た customer-facing output をめぐる direct competition があるかどうかです。",
  "Availability, quality, cost, concentration, bargaining power, and collaboration all shape what the focal business can do.": "availability、quality、cost、concentration、bargaining power、そして collaboration は、focal business が実際に何をできるかを左右します。",
  "Knowledge spillovers, common channels, and scope economies can lower cost or improve the offer without changing the focal firm itself.": "knowledge spillovers、common channels、scope economies は、focal firm 自体を大きく変えなくても、cost を下げたり offer を改善したりできます。",
  "Performance depends on how well the focal player fits into the surrounding system, not just on what it does alone.": "performance は、その player が単独で何をするかだけではなく、周囲の system にどれだけうまく fit しているかにも左右されます。",
  "Size, growth, sophistication, segmentation, bargaining power, and price sensitivity determine the revenue side of the system.": "size、growth、sophistication、segmentation、bargaining power、price sensitivity が、その system の revenue side を決めます。",
  "Complements expand demand or willingness to pay. Substitutes cap upside and can compress margins quickly.": "complements は demand や willingness to pay を広げます。substitutes は upside に上限をかけ、margins を急速に圧縮することがあります。",
  "Cluster policies, training systems, and public-private institutions can strengthen or weaken the whole ecosystem over time.": "cluster policies、training systems、public-private institutions は、時間をかけて ecosystem 全体を強くも弱くもします。",
  "Meta forces matter when they change who may enter, with what technology, under what political constraints, and on what global terms.": "meta forces が重要になるのは、誰が entry できるのか、どの technology を使えるのか、どの political constraints の下で動くのか、どの global terms に従うのかを変えてしまうときです。",
  ": run five-level home-versus-host contrast.": ": five-level の home-versus-host contrast を回す。",
  ": define SPARK and the global-local split.": ": SPARK と global-local split を定義する。",
  ": decide whether the company is worth more integrated than separate.": ": その company が integrated の方が価値が高いのか、separate の方が高いのかを判断する。",
  "If none of these mechanisms is real and defensible, the corporate structure may be destroying rather than creating value.": "これらの mechanisms のどれも real で defensible でないなら、その corporate structure は value を創っているのではなく壊している可能性があります。",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "高得点につながる Nokia の insight はこうです。Nokia は一時期 standard setter として機能していました。Nordic standards が European、さらに global standards へ広がったからです。その後 Apple が software platform を中心に standard を再定義し、Apple が frame-breaker となって、Nokia のそれまでの advantage を空洞化させました。",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "externalization は自動的に good になるわけではありません。ある company の asset-light strategy は、たいてい別の company が asset-heavy burden を負っていることに依存しています。もし value がどこで created され、どこで appropriated され、どこで defended されるのかを identify できないなら、その value を手放している可能性があります。",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "最後の一文ガイド。underlying economics から始め、binding する levels を特定し、SPARK に leadership と execution を加えて test し、future competition を CEA で pressure-test し、そのうえで organization と implementation が本来得られるはずの value を realize し defend できるかを問う。",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "試験の logic は明確です。strategy language に入る前に、その business がどうやって money を make しているのかを理解すること。underlying economics が industry structure を shape し、industry structure が competition を shape し、competition が profit potential を shape し、その上で focal firm の SPARK、bargaining position、leadership、execution がそれを modify します。",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "current rivals だけで止まらないこと。related-industry entrants と unmet demand segments を加える。大きな threats の多くはこの二方向から来ます。",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "coopetition とは、同じ set of players が、ある activity では cooperate し、別の activity では compete することです。試験答案では、相手を単純に friend か foe かで決めるのではなく、activity level で relationship を split して書くべきです。",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "firm の performance が良いか悪いかを述べるなら、まず comparator を明示すること。reference point を示さずに『performance is weak』と書くのは mechanically unsafe です。",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "popular writing が示すほど、世界は flat ではありません。ideas の creation は今でも特定の people、firms、places に強く集中しており、一方で execution resources の方がより広く distributed しています。戦略上の重要な問いは、誰が flattener になるのか、そして誰が execution だけで compete する側へ flattened されるのかです。",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "supranational drivers は単に profit levels を変えるだけではありません。誰が entry を許されるのか、どの rules の下で、どの technologies を使い、どの geopolitical constraints を受けるのかまで書き換えます。だからこそ international strategy や corporate strategy の設問で disproportionate に重要になるのです。",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "その company は parts の sum 以上の存在か。答えが no なら、investors は自分で diversify できるので、その corporate structure は value を create するどころか destroy しているかもしれません。",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "managerial mistake は environment を systematic に過小評価することです。teaching point は、behavior は managers が instinctively 想定する以上に situation によって説明されるということ。behavior change を起こしたいなら、personality を説教するのではなく environment を redesign するべきです。"
};


const UR_MAP = {
  "STRT 6200 Final Exam Infrastructure": "STRT 6200 فائنل امتحان انفراسٹرکچر",
  "Strategic Decision-Making Review System": "اسٹریٹجک ڈسیژن میکنگ ریویو سسٹم",
  "Search keyword, case, or tool…": "کلیدی لفظ، کیس یا ٹول تلاش کریں…",
  "Language": "زبان",
  "Language switch": "زبان تبدیل کریں",
  "Reading map": "مطالعہ کا نقشہ",
  "Original pasted master review": "اصل پیسٹ کیا گیا ماسٹر ریویو",
  "Sources": "ذرائع",
  "Show source appendix": "ماخذی ضمیمہ دکھائیں",
  "Hide source appendix": "ماخذی ضمیمہ چھپائیں",
  "Exam Signals": "امتحانی اشارے",
  "Analytical Spine": "تحلیلی ڈھانچہ",
  "Underlying Economics": "بنیادی معاشی منطق",
  "Industry Level": "انڈسٹری لیول",
  "Firm Level": "فرم لیول",
  "Cluster / Meso Level": "کلسٹر / میسو لیول",
  "National / Macro Level": "قومی / میکرو لیول",
  "Supranational / Meta Level": "فوق القومی / میٹا لیول",
  "International Strategy": "بین الاقوامی حکمتِ عملی",
  "Corporate Strategy": "کارپوریٹ حکمتِ عملی",
  "Implementation": "عمل درآمد",
  "Case Grid": "کیس گرڈ",
  "Exam Attack System": "امتحانی اٹیک سسٹم",
  "Source Fidelity Appendix": "اصل مواد کا ضمیمہ",
  "All": "سب",
  "High Weight": "زیادہ وزن",
  "Frameworks": "فریم ورک",
  "Cases": "کیسز",
  "Appendix": "ضمیمہ",
  "EN": "EN",
  "中": "中文",
  "BI": "دو لسانی",
  "Tiếng Việt": "Tiếng Việt",
  "Português": "Português",
  "Español": "Español",
  "日本語": "日本語",
  "اردو": "اردو",
  "No sections match the current filter.": "موجودہ فلٹر کے مطابق کوئی سیکشن نہیں ملا۔",
  "Try a broader search term or switch the chip filter back to All.": "زیادہ وسیع تلاش کا لفظ آزمائیں یا چِپ فلٹر کو واپس سب پر لے جائیں۔",
  "What this build is for": "یہ بلڈ کس مقصد کے لیے ہے",
  "Why this appendix remains": "یہ ضمیمہ کیوں برقرار ہے",
  "Competition spectrum": "مقابلے کا طیف",
  "Fast case-to-level scan": "کیس سے لیول تک فوری جائزہ",
  "Answer construction flow": "جواب بنانے کا فلو",
  "Industry boundary method": "انڈسٹری کی حد بندی کا طریقہ",
  "SPARK": "SPARK",
  "Firm architecture": "فرم کا ڈھانچہ",
  "Macro board": "میکرو بورڈ",
  "Meta pressure board": "میٹا پریشر بورڈ",
  "International architecture": "بین الاقوامی آرکیٹیکچر",
  "Corporate architecture": "کارپوریٹ آرکیٹیکچر",
  "Implementation diagnosis": "عمل درآمد کی تشخیص",
  "Use the right tool for the job": "صحیح سوال کے لیے صحیح ٹول استعمال کریں",
  "Do not include extraneous material": "غیر ضروری مواد شامل نہ کریں",
  "Use your time wisely": "وقت سمجھ داری سے استعمال کریں",
  "Reading the question correctly is itself a grading event": "سوال کو درست پڑھنا بھی گریڈنگ کا حصہ ہے",
  "EugeneYip.com": "EugeneYip.com"
};

const ES_DEEP_MAP = {
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "Esta versión está pensada como un sistema de repaso de cara al usuario, no como un memo de avance. Parte de que necesitas leer rápido, captar la estructura al instante y pasar del concepto a la aplicación en casos sin perder fidelidad.",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "La interfaz principal reorganiza el material para que sea más legible y más útil al contestar el examen. Este apéndice mantiene dentro del archivo el master review original pegado, para que la infraestructura mejorada no deje fuera en silencio esa columna vertebral.",
  "This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output.": "Este es el método más seguro para el examen porque evita que la definición de industria se desvíe hacia etiquetas tipo SIC o categorías tecnológicas. La prueba real es la competencia directa por un resultado similar de cara al cliente.",
  "Availability, quality, cost, concentration, bargaining power, and collaboration all shape what the focal business can do.": "La disponibilidad, la calidad, el costo, la concentración, el poder de negociación y la colaboración moldean lo que el negocio focal realmente puede hacer.",
  "Knowledge spillovers, common channels, and scope economies can lower cost or improve the offer without changing the focal firm itself.": "Los knowledge spillovers, los canales compartidos y las economías de alcance pueden bajar costos o mejorar la oferta sin cambiar por completo a la empresa focal.",
  "Performance depends on how well the focal player fits into the surrounding system, not just on what it does alone.": "El desempeño depende de qué tan bien encaja el jugador focal dentro del sistema que lo rodea, no solo de lo que haga por sí mismo.",
  "Size, growth, sophistication, segmentation, bargaining power, and price sensitivity determine the revenue side of the system.": "El tamaño, el crecimiento, la sofisticación, la segmentación, el poder de negociación y la sensibilidad al precio determinan el lado de ingresos del sistema.",
  "Complements expand demand or willingness to pay. Substitutes cap upside and can compress margins quickly.": "Los complementos amplían la demanda o la disposición a pagar. Los sustitutos ponen techo al upside y pueden apretar los márgenes muy rápido.",
  "Cluster policies, training systems, and public-private institutions can strengthen or weaken the whole ecosystem over time.": "Las políticas de clúster, los sistemas de formación y las instituciones público-privadas pueden fortalecer o debilitar con el tiempo a todo el ecosistema.",
  "Meta forces matter when they change who may enter, with what technology, under what political constraints, and on what global terms.": "Las fuerzas meta importan cuando cambian quién puede entrar, con qué tecnología, bajo qué restricciones políticas y en qué términos globales.",
  ": run five-level home-versus-host contrast.": ": corre un contraste home-versus-host a cinco niveles.",
  ": define SPARK and the global-local split.": ": define SPARK y la separación global-local.",
  ": decide whether the company is worth more integrated than separate.": ": decide si la empresa vale más integrada que por separado.",
  "If none of these mechanisms is real and defensible, the corporate structure may be destroying rather than creating value.": "Si ninguno de estos mecanismos es real y defendible, la estructura corporativa puede estar destruyendo valor en lugar de crearlo.",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "Un insight de alto puntaje sobre Nokia es que llegó a funcionar como standard setter porque los estándares nórdicos se volvieron europeos y luego globales. Después Apple redefinió el estándar alrededor de la plataforma de software, convirtió a Apple en el frame-breaker y vació la ventaja previa de Nokia.",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "La externalización no es buena por definición. La estrategia asset-light de una empresa normalmente depende de que otra cargue con el peso asset-heavy. Si no puedes identificar dónde se crea el valor, dónde se apropia y dónde se defiende, es muy probable que lo estés regalando.",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "Guía final en una sola frase: empieza por la economía subyacente, identifica los niveles vinculantes, prueba SPARK junto con liderazgo y ejecución, haz pressure-test de la competencia futura con CEA y luego pregunta si la organización y la implementación permiten que la empresa capture y defienda el valor que en teoría debería estar disponible.",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "La lógica del examen es explícita: antes de hablar en lenguaje de strategy, entiende cómo gana dinero el negocio. La economía subyacente moldea la estructura de la industria; la estructura moldea la competencia; la competencia moldea el potencial de utilidad; y eso después se modifica por el SPARK, la posición de negociación, el liderazgo y la ejecución de la empresa focal.",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "No te detengas solo en los rivales actuales. Suma entrantes de industrias relacionadas y segmentos de demanda no atendida. Muchas de las amenazas más fuertes vienen precisamente de esos dos frentes.",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "Coopetition significa que el mismo grupo de jugadores puede cooperar en una actividad y competir en otra. En una respuesta de examen, separa la relación al nivel de la actividad en lugar de declarar al otro lado simplemente amigo o enemigo.",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "Cualquier afirmación de que una empresa está funcionando bien o mal debe identificar primero el comparador. Decir que 'el desempeño es débil' sin nombrar el punto de referencia es mecánicamente inseguro.",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "El mundo no es flat en el sentido en que a veces lo pinta la literatura popular. La creación de ideas sigue estando muy concentrada en personas, empresas y lugares específicos, mientras que los recursos de ejecución están mucho más distribuidos. La pregunta estratégica clave es quién se vuelve el flattener y quién termina flattened, compitiendo solo en execution.",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "Los drivers supranacionales no solo cambian el nivel de utilidades. También pueden reescribir quién puede entrar, bajo qué reglas, con qué tecnologías y con qué restricciones geopolíticas. Por eso pesan de manera desproporcionada en preguntas de estrategia internacional y corporativa.",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "¿La empresa vale más que la suma de sus partes? Si la respuesta es no, los inversionistas pueden diversificarse por su cuenta y la estructura corporativa puede estar destruyendo valor en lugar de crearlo.",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "El error gerencial suele ser subestimar de forma sistemática el peso del entorno. El punto docente es que la conducta se explica mucho más por la situación de lo que los gerentes suponen por instinto. Si quieres cambiar el comportamiento, rediseña el entorno en vez de dar sermones sobre la personalidad."
};

const UR_DEEP_MAP = {
  "This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity.": "یہ بلڈ ایک user-facing revision system کے طور پر تیار کی گئی ہے، progress memo کے طور پر نہیں۔ اس کا مفروضہ یہ ہے کہ آپ کو تیزی سے پڑھنا ہے، فوراً structure سمجھنی ہے، اور concept سے case application تک اس طرح جانا ہے کہ اصل fidelity برقرار رہے۔",
  "The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone.": "مین interface مواد کو readability اور exam execution کے لیے دوبارہ منظم کرتی ہے۔ یہ appendix اصل pasted master review کو فائل کے اندر محفوظ رکھتی ہے تاکہ upgraded infrastructure خاموشی سے اس backbone کو حذف نہ کر دے۔",
  "This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output.": "امتحان میں یہ نسبتاً محفوظ طریقہ ہے، کیونکہ اس سے industry definition، SIC طرز کے labels یا صرف technology categories کی طرف نہیں پھسلتی۔ اصل test یہ ہے کہ کیا ایک جیسے customer-facing output پر direct competition ہو رہی ہے یا نہیں۔",
  "Availability, quality, cost, concentration, bargaining power, and collaboration all shape what the focal business can do.": "availability، quality، cost، concentration، bargaining power اور collaboration مل کر یہ طے کرتے ہیں کہ متعلقہ business حقیقت میں کیا کر سکتا ہے۔",
  "Knowledge spillovers, common channels, and scope economies can lower cost or improve the offer without changing the focal firm itself.": "knowledge spillovers، common channels اور scope economies، خود focal firm کو مکمل طور پر بدلے بغیر بھی cost کم کر سکتے ہیں یا offer کو بہتر بنا سکتے ہیں۔",
  "Performance depends on how well the focal player fits into the surrounding system, not just on what it does alone.": "performance صرف اس بات پر منحصر نہیں ہوتی کہ focal player خود کیا کرتا ہے، بلکہ اس پر بھی کہ وہ surrounding system میں کتنی اچھی طرح fit بیٹھتا ہے۔",
  "Size, growth, sophistication, segmentation, bargaining power, and price sensitivity determine the revenue side of the system.": "size، growth، sophistication، segmentation، bargaining power اور price sensitivity مل کر system کے revenue side کو طے کرتے ہیں۔",
  "Complements expand demand or willingness to pay. Substitutes cap upside and can compress margins quickly.": "complements demand یا willingness to pay کو بڑھاتے ہیں۔ substitutes upside کو محدود کرتے ہیں اور margins کو تیزی سے دبا سکتے ہیں۔",
  "Cluster policies, training systems, and public-private institutions can strengthen or weaken the whole ecosystem over time.": "cluster policies، training systems اور public-private institutions وقت کے ساتھ پورے ecosystem کو مضبوط بھی بنا سکتے ہیں اور کمزور بھی۔",
  "Meta forces matter when they change who may enter, with what technology, under what political constraints, and on what global terms.": "meta forces اُس وقت خاص اہمیت اختیار کرتی ہیں جب وہ یہ بدل دیں کہ کون enter کر سکتا ہے، کس technology کے ساتھ، کن political constraints کے تحت، اور کن global terms پر۔",
  ": run five-level home-versus-host contrast.": ": five-level home-versus-host contrast چلائیں۔",
  ": define SPARK and the global-local split.": ": SPARK اور global-local split واضح کریں۔",
  ": decide whether the company is worth more integrated than separate.": ": طے کریں کہ integrated حالت میں کمپنی کی قدر زیادہ ہے یا الگ الگ parts کی صورت میں۔",
  "If none of these mechanisms is real and defensible, the corporate structure may be destroying rather than creating value.": "اگر ان میں سے کوئی mechanism واقعی موجود اور defensible نہ ہو تو corporate structure value create کرنے کے بجائے value destroy کر رہی ہو سکتی ہے۔",
  "High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia's earlier advantage.": "اعلیٰ درجے کے جواب کے لیے Nokia پر اہم insight یہ ہے کہ Nokia ایک وقت میں standard setter کے طور پر کام کرتی تھی، کیونکہ Nordic standards پہلے European اور پھر global standards بن گئے تھے۔ بعد میں Apple نے software platform کے گرد standard کو دوبارہ define کیا، خود frame-breaker بن گئی، اور Nokia کی پہلے والی advantage کو کھوکھلا کر دیا۔",
  "Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away.": "externalization خود بخود اچھی چیز نہیں ہوتی۔ ایک کمپنی کی asset-light strategy عموماً اس بات پر کھڑی ہوتی ہے کہ کوئی دوسری کمپنی asset-heavy burden اٹھا رہی ہو۔ اگر آپ یہ identify نہیں کر سکتے کہ value کہاں create ہو رہی ہے، کہاں appropriated ہو رہی ہے، اور کہاں defend ہو رہی ہے، تو ممکن ہے آپ وہ value خود ہی دے رہے ہوں۔",
  "Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available.": "آخری ایک سطری guide یہ ہے: underlying economics سے آغاز کریں، binding levels identify کریں، SPARK کے ساتھ leadership اور execution کو test کریں، future competition کو CEA سے pressure-test کریں، اور پھر یہ پوچھیں کہ organization اور implementation کمپنی کو وہ value حاصل اور defend کرنے دیتی ہیں یا نہیں جو اصولاً دستیاب ہونی چاہیے۔",
  "The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution.": "امتحان کی logic بالکل واضح ہے: strategy language استعمال کرنے سے پہلے یہ سمجھیں کہ business پیسہ کیسے بناتی ہے۔ underlying economics industry structure کو shape کرتی ہے، industry structure competition کو shape کرتی ہے، competition profit potential کو shape کرتی ہے، اور پھر focal firm کا SPARK، bargaining position، leadership اور execution اس کو modify کرتے ہیں۔",
  "Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions.": "صرف current rivals پر نہ رکیں۔ related industry سے آنے والے entrants اور unmet demand segments کو بھی شامل کریں۔ بہت سے بڑے threats انہی دو سمتوں سے آتے ہیں۔",
  "Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe.": "coopetition کا مطلب یہ ہے کہ ایک ہی set of players ایک activity میں cooperation اور دوسری activity میں competition کر سکتے ہیں۔ امتحانی جواب میں تعلق کو activity level پر توڑ کر دکھائیں، صرف دوست یا دشمن قرار نہ دیں۔",
  "Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe.": "اگر آپ یہ دعویٰ کریں کہ firm اچھی یا بری performance دے رہی ہے، تو پہلے comparator واضح کریں۔ reference point بتائے بغیر صرف یہ لکھ دینا کہ 'performance weak ہے' جواب کو mechanically unsafe بنا دیتا ہے۔",
  "The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution.": "دنیا اُس معنی میں flat نہیں ہے جس طرح بعض popular writing میں دکھایا جاتا ہے۔ ideas کی creation اب بھی مخصوص لوگوں، firms اور places میں بہت زیادہ concentrated ہے، جبکہ execution resources نسبتاً زیادہ پھیلی ہوئی ہیں۔ اہم strategic سوال یہ ہے کہ flattener کون بنتا ہے اور execution تک محدود مقابلے میں flattened کون ہو جاتا ہے۔",
  "Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions.": "supranational drivers صرف profit levels نہیں بدلتے۔ وہ یہ بھی دوبارہ لکھ سکتے ہیں کہ کون enter کر سکتا ہے، کن rules کے تحت، کن technologies کے ساتھ، اور کن geopolitical constraints کے اندر۔ اسی لیے international اور corporate strategy کے سوالات میں ان کی disproportionate اہمیت ہوتی ہے۔",
  "Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it.": "کیا کمپنی اپنے parts کے مجموعے سے زیادہ ہے؟ اگر جواب نہیں ہے تو investors خود diversification کر سکتے ہیں، اور corporate structure value create کرنے کے بجائے value destroy کر رہی ہو سکتی ہے۔",
  "The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality.": "managerial mistake اکثر environment کو systematic طور پر کم سمجھنے میں ہوتی ہے۔ teaching point یہ ہے کہ behavior کو managers کی instinct کے مقابلے میں کہیں زیادہ situation explain کرتی ہے۔ اگر آپ behavior change چاہتے ہیں تو personality پر لیکچر دینے کے بجائے environment کو redesign کریں۔"
};

function urText(input) {
  if (typeof input !== 'string') return input;
  if (UR_DEEP_MAP[input]) return UR_DEEP_MAP[input];
  if (UR_MAP[input]) return UR_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `اس وقت ${match[1]} سیکشن دکھائی دے رہے ہیں۔ فلٹر چپس اور سرچ باکس استعمال کر کے نظام کو زیادہ وزن والے حصوں، فریم ورکس، کیسز یا ضمیمے تک محدود کریں۔`;
  return input;
}

function ptText(input) {
  if (typeof input !== 'string') return input;
  if (PT_DEEP_MAP[input]) return PT_DEEP_MAP[input];
  if (PT_MAP[input]) return PT_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `Há ${match[1]} seções visíveis no momento. Use os chips de filtro e a busca para focar nas áreas de maior peso, nos frameworks, nos casos ou no apêndice.`;
  return input;
}

function zhCnText(input) {
  if (typeof input !== 'string') return input;
  if (CN_DEEP_MAP[input]) return CN_DEEP_MAP[input];
  if (CN_MAP[input]) return CN_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `当前显示 ${match[1]} 个 section。可使用筛选 chips 和搜索框，把系统聚焦到高权重区域、框架、案例或附录。`;
  return localizeZhCnFallback(input);
}

function viText(input) {
  if (typeof input !== 'string') return input;
  if (VI_DEEP_MAP[input]) return VI_DEEP_MAP[input];
  if (VI_MAP[input]) return VI_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `Hiện đang hiển thị ${match[1]} section. Hãy dùng các chip lọc và ô tìm kiếm để thu hẹp hệ thống vào các phần trọng số cao, framework, case hoặc appendix.`;
  return input;
}

function esText(input) {
  if (typeof input !== 'string') return input;
  if (ES_DEEP_MAP[input]) return ES_DEEP_MAP[input];
  if (ES_MAP[input]) return ES_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `En este momento hay ${match[1]} secciones visibles. Usa los chips de filtro y el buscador para concentrarte en las áreas de mayor peso, los frameworks, los casos o el apéndice.`;
  return input;
}

function jpText(input) {
  if (typeof input !== 'string') return input;
  if (JP_DEEP_MAP[input]) return JP_DEEP_MAP[input];
  if (JP_MAP[input]) return JP_MAP[input];
  const match = input.match(/^(\d+) sections currently visible\. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix\.$/);
  if (match) return `現在表示中の section は ${match[1]} 件です。filter chips と検索ボックスを使って、重点領域、frameworks、cases、または appendix に絞り込んでください。`;
  return input;
}

function uiText(mode, en, zh, vi, pt, ur, es, jp) {
  if (mode === 'en') return en;
  if (mode === 'zh') return zh;
  if (mode === 'zh-cn') return zhCnText(zh ?? en);
  if (mode === 'vi') return vi ?? viText(en) ?? en;
  if (mode === 'pt') return pt ?? ptText(en) ?? en;
  if (mode === 'ur') return ur ?? urText(en) ?? en;
  if (mode === 'es') return es ?? esText(en) ?? en;
  if (mode === 'jp') return jp ?? jpText(en) ?? en;
  return en;
}

function BiText({ mode, en, zh, vi, pt, ur, es, jp, className = "", block = false, subtleZh = false }) {
  const resolvedVi = vi ?? viText(en);
  const resolvedPt = pt ?? ptText(en);
  const resolvedUr = ur ?? urText(en);
  const resolvedEs = es ?? esText(en);
  const resolvedJp = jp ?? jpText(en);
  if (mode === "en") return block ? <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>{en}</div> : <span className={className}>{en}</span>;
  if (mode === "zh") return block ? <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>{zh}</div> : <span className={className}>{zh}</span>;
  if (mode === "zh-cn") {
    const resolvedCn = zhCnText(zh ?? en);
    return block ? <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>{resolvedCn}</div> : <span className={className}>{resolvedCn}</span>;
  }
  if (mode === "vi") {
    if (block) {
      return (
        <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>
          <div>{resolvedVi || en}</div>
        </div>
      );
    }
    return (
      <span className={className}>
        {resolvedVi || en}
      </span>
    );
  }

  if (mode === "ur") {
    if (block) {
      return (
        <div className={cn('min-w-0 break-words [overflow-wrap:anywhere] text-right', className)} dir="rtl">
          <div>{resolvedUr || en}</div>
          {resolvedUr && resolvedUr !== en ? <div className="mt-1 text-[0.94em] text-slate-600" dir="ltr">{en}</div> : null}
        </div>
      );
    }
    return (
      <span className={className} dir="rtl">
        {resolvedUr || en}
      </span>
    );
  }
  if (mode === "es") {
    if (block) {
      return (
        <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>
          <div>{resolvedEs || en}</div>
          {resolvedEs && resolvedEs !== en ? <div className="mt-1 text-[0.94em] text-slate-600">{en}</div> : null}
        </div>
      );
    }
    return (
      <span className={className}>
        {resolvedEs || en}
      </span>
    );
  }
  if (mode === "jp") {
    if (block) {
      return (
        <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>
          <div>{resolvedJp || en}</div>
          {resolvedJp && resolvedJp !== en ? <div className="mt-1 text-[0.94em] text-slate-600">{en}</div> : null}
        </div>
      );
    }
    return (
      <span className={className}>
        {resolvedJp || en}
      </span>
    );
  }
  if (mode === "pt") {
    if (block) {
      return (
        <div className={cn('min-w-0 break-words [overflow-wrap:anywhere]', className)}>
          <div>{resolvedPt || en}</div>
          {resolvedPt && resolvedPt !== en ? <div className="mt-1 text-[0.94em] text-slate-600">{en}</div> : null}
        </div>
      );
    }
    return (
      <span className={className}>
        {resolvedPt || en}
      </span>
    );
  }
  return (
    <div className={className}>
      <div>{en}</div>
      <div className={cn("mt-1", subtleZh ? "text-[0.94em] text-slate-600" : "text-[0.94em] text-slate-700")}>{zh}</div>
    </div>
  );
}

function SectionShell({ id, mode, titleEn, titleZh, kickerEn, kickerZh, refs = [], children }) {
  return (
    <section id={id} className="min-w-0 max-w-full scroll-mt-28 overflow-hidden rounded-[28px] border p-4 md:p-6 xl:p-7" style={{ background: theme.card, borderColor: theme.line }}>
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.teal }}>
            <BiText mode={mode} en={kickerEn} zh={kickerZh} />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: theme.ink }}>
            <BiText mode={mode} en={titleEn} zh={titleZh} />
          </h2>
        </div>
        <div className="w-full max-w-full md:max-w-[360px] rounded-2xl border px-3 py-2 text-xs leading-relaxed break-words [overflow-wrap:anywhere]" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
          <div className="mb-1 font-semibold uppercase tracking-[0.16em]" style={{ color: theme.plum }}>{uiText(mode, "Sources", "來源", "Nguồn")}</div>
          <div className="flex flex-wrap gap-2">
            {refs.map((ref) => (
              <span key={ref} className="rounded-full px-2 py-1" style={{ background: theme.soft }}>{ref}</span>
            ))}
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

function InfoCard({ titleEn, titleZh, mode, children, tone = "default" }) {
  const tones = {
    default: { bg: "#FBF8F0", border: theme.line, ink: theme.ink },
    teal: { bg: "#EDF4F6", border: "#BCD0D8", ink: theme.teal },
    plum: { bg: "#F4EDF3", border: "#D8C3D4", ink: theme.plum },
    gold: { bg: "#FBF5E8", border: "#E1D1A8", ink: "#7A5A18" },
    danger: { bg: "#F8EFEC", border: "#D8BBB2", ink: theme.danger },
    ok: { bg: "#EEF5F0", border: "#C5D7CA", ink: theme.ok },
  };
  const t = tones[tone] || tones.default;
  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-3xl border p-4" style={{ background: t.bg, borderColor: t.border }}>
      <div className="mb-2 text-sm font-semibold" style={{ color: t.ink }}>
        <BiText mode={mode} en={titleEn} zh={titleZh} />
      </div>
      <div className="text-sm leading-6" style={{ color: theme.subInk }}>
        {children}
      </div>
    </div>
  );
}

function BulletList({ mode, items, compact = false }) {
  return (
    <ul className={cn('list-disc pl-5 break-words [overflow-wrap:anywhere]', compact ? 'space-y-1.5 text-sm' : 'space-y-2 text-sm md:text-[15px]')}>
      {items.map((item, idx) => (
        <li key={idx} className="leading-6" style={{ color: theme.subInk }}>
          <BiText mode={mode} en={item.en} zh={item.zh} />
        </li>
      ))}
    </ul>
  );
}

function SimpleTable({ mode, columns, rows, size = "normal" }) {
  const cellClass = size === "compact" ? "text-xs leading-5" : "text-sm leading-6";
  const headerClass = size === "compact" ? "text-[11px]" : "text-sm";
  const renderCell = (value) => {
    if (typeof value === "object" && value !== null && ("en" in value || "zh" in value)) {
      return <BiText mode={mode} en={value.en} zh={value.zh} />;
    }
    return value;
  };
  return (
    <div className="w-full max-w-full rounded-3xl border overflow-hidden" style={{ borderColor: theme.line }}>
      <div className="lg:hidden divide-y" style={{ background: "#FFFDF8", borderColor: theme.line }}>
        {rows.map((row, idx) => (
          <div key={idx} className="p-4" style={{ borderColor: theme.line }}>
            <div className="grid gap-3">
              {columns.map((col, cIdx) => (
                <div key={col.key} className={cn("grid gap-1", cIdx === 0 ? "" : "pt-2 border-t") } style={cIdx === 0 ? undefined : { borderColor: theme.line }}>
                  <div className="text-[10px] uppercase tracking-[0.16em] font-semibold" style={{ color: theme.plum }}>
                    <BiText mode={mode} en={col.en} zh={col.zh} />
                  </div>
                  <div className={cellClass} style={{ color: theme.subInk }}>{renderCell(row[col.key])}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-full max-w-full overflow-x-auto overscroll-x-contain" style={{ background: '#FFFDF8' }}>
        <table className="min-w-[640px] xl:min-w-[720px] w-full border-collapse text-left">
          <thead style={{ background: "#F2ECE0" }}>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={cn("border-b px-4 py-3 font-semibold align-bottom", headerClass)} style={{ borderColor: theme.line, color: theme.ink }}>
                  <BiText mode={mode} en={col.en} zh={col.zh} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="align-top">
                {columns.map((col) => (
                  <td key={col.key} className={cn("border-b px-4 py-3", cellClass)} style={{ borderColor: theme.line, color: theme.subInk }}>
                    {renderCell(row[col.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StageRibbon({ mode, items }) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-3xl border p-4" style={{ background: idx % 2 === 0 ? "#FBF8F0" : "#F4F0E6", borderColor: theme.line }}>
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.plum }}>
            {String(idx + 1).padStart(2, "0")}
          </div>
          <div className="mb-2 font-semibold text-sm" style={{ color: theme.ink }}>
            <BiText mode={mode} en={item.en} zh={item.zh} />
          </div>
          {item.note ? <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={item.note.en} zh={item.note.zh} /></div> : null}
        </div>
      ))}
    </div>
  );
}

function MetricBar({ mode, titleEn, titleZh, value, max = 100, suffix = "%", tone = "teal", subEn, subZh }) {
  const tones = { teal: theme.teal, plum: theme.plum, gold: theme.gold, danger: theme.danger, ok: theme.ok };
  const color = tones[tone] || theme.teal;
  return (
    <div className="rounded-3xl border p-4" style={{ background: "#FBF8F0", borderColor: theme.line }}>
      <div className="mb-1 text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={titleEn} zh={titleZh} /></div>
      <div className="mb-2 text-2xl font-semibold" style={{ color }}>{value}{suffix}</div>
      <div className="h-2 w-full overflow-hidden rounded-full" style={{ background: "#E7DDCC" }}>
        <div className="h-full rounded-full" style={{ width: `${Math.max(0, Math.min(100, (value / max) * 100))}%`, background: color }} />
      </div>
      {(subEn || subZh) ? <div className="mt-3 text-xs leading-5" style={{ color: theme.subInk }}><BiText mode={mode} en={subEn} zh={subZh} /></div> : null}
    </div>
  );
}

function TinyProcess({ mode, items }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item, idx) => (
        <React.Fragment key={item.en}>
          <span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></span>
          {idx < items.length - 1 ? <span style={{ color: theme.gold }}>→</span> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function FiveLevelDriverMap({ mode }) {
  const levels = [
    { no: "01", en: "Industry", zh: "產業", color: theme.gold, noteEn: "Start with the economically meaningful industry.", noteZh: "先從經濟上真正有意義的產業開始。" },
    { no: "02", en: "Meso / Cluster", zh: "群聚 / 中觀", color: theme.ok, noteEn: "Then test the ecosystem around the focal business.", noteZh: "再測試圍繞 focal business 的 ecosystem。" },
    { no: "03", en: "Macro / National", zh: "國家 / 總體", color: theme.teal, noteEn: "Check the national environment and its trendline.", noteZh: "檢查國家環境及其趨勢線。" },
    { no: "04", en: "Meta / Supranational", zh: "超國家 / 全球", color: theme.plum, noteEn: "Add the cross-border forces outside national control.", noteZh: "再加上國家無法控制的跨國力量。" },
    { no: "05", en: "Firm", zh: "公司", color: theme.danger, noteEn: "Only then judge SPARK, leadership, execution, and fit.", noteZh: "最後才評估 SPARK、leadership、execution 與 fit。" },
  ];
  return (
    <InfoCard titleEn="Five-level reading map" titleZh="五層閱讀地圖" mode={mode} tone="gold">
      <div className="grid gap-3 xl:grid-cols-[0.78fr_1.22fr] xl:items-center">
        <div className="rounded-[28px] border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
          <svg viewBox="0 0 320 280" className="w-full h-auto">
            <defs>
              <linearGradient id="lvlGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFDF8" />
                <stop offset="100%" stopColor="#F4F0E6" />
              </linearGradient>
            </defs>
            <rect x="56" y="16" width="208" height="208" rx="28" fill="url(#lvlGrad)" stroke="#D9D0BE" />
            <circle cx="160" cy="120" r="32" fill="#FFF" stroke="#D9D0BE" />
            <text x="160" y="114" textAnchor="middle" fontSize="11" fill="#748067" fontWeight="600">Firm</text>
            <text x="160" y="131" textAnchor="middle" fontSize="13" fill="#1E2732" fontWeight="700">Performance</text>
            {[
              { x: 160, y: 34, c: theme.teal, t1: 'Macro', t2: '國家' },
              { x: 86, y: 84, c: theme.ok, t1: 'Meso', t2: '群聚' },
              { x: 114, y: 198, c: theme.gold, t1: 'Industry', t2: '產業' },
              { x: 206, y: 198, c: theme.danger, t1: 'Firm', t2: '公司' },
              { x: 234, y: 84, c: theme.plum, t1: 'Meta', t2: '超國家' },
            ].map((n) => (
              <g key={n.t1}>
                <circle cx={n.x} cy={n.y} r="18" fill={n.c} opacity="0.14" />
                <circle cx={n.x} cy={n.y} r="9" fill={n.c} />
                <text x={n.x} y={n.y - 28} textAnchor="middle" fontSize="10" fill={n.c} fontWeight="700">{n.t1}</text>
                <text x={n.x} y={n.y - 15} textAnchor="middle" fontSize="9" fill={n.c}>{n.t2}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {levels.map((level, idx) => (
            <div key={level.no} className="rounded-3xl border px-4 py-3" style={{ borderColor: theme.line, background: idx % 2 === 0 ? "#FBF8F0" : "#FFFDF8" }}>
              <div className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: `${level.color}22`, color: level.color }}>{level.no}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={level.en} zh={level.zh} /></div>
                  <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={level.noteEn} zh={level.noteZh} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfoCard>
  );
}

function EconomicsCascade({ mode }) {
  const steps = [
    { en: "Underlying economics", zh: "底層經濟" },
    { en: "Industry structure", zh: "產業結構" },
    { en: "Type of competition", zh: "競爭型態" },
    { en: "Competitive variables", zh: "競爭變數" },
    { en: "Ferocity", zh: "激烈程度" },
    { en: "Profit potential", zh: "獲利潛力" },
    { en: "Firm performance", zh: "企業績效" },
  ];
  return (
    <InfoCard titleEn="Why economics sits upstream" titleZh="為甚麼 economics 在最上游" mode={mode} tone="plum">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
        {steps.map((step, idx) => (
          <div key={step.en} className="relative rounded-3xl border px-4 py-4 text-sm leading-6" style={{ borderColor: theme.line, background: idx === 0 ? "#F4EDF3" : idx === steps.length - 1 ? "#EDF4F6" : "#FBF8F0", color: theme.subInk }}>
            <div className="mb-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: idx === 0 ? theme.plum : idx === steps.length - 1 ? theme.teal : theme.gold }}>{String(idx + 1).padStart(2, "0")}</div>
            <BiText mode={mode} en={step.en} zh={step.zh} />
            {idx < steps.length - 1 ? <div className="hidden xl:block absolute -right-[11px] top-1/2 -translate-y-1/2 text-lg" style={{ color: theme.gold }}>→</div> : null}
          </div>
        ))}
      </div>
    </InfoCard>
  );
}

function IndustryBoundaryMethod({ mode }) {
  const rows = [
    { no: "1", en: "What useful output does the customer actually receive?", zh: "客戶實際收到甚麼有用輸出？" },
    { no: "2", en: "Who is directly competing to supply that same output?", zh: "誰在直接爭奪同一種輸出？" },
    { no: "3", en: "Draw the industry boundary from that customer-facing output, not from the technology label.", zh: "用客戶面向的輸出畫產業邊界，不要用 technology label 畫。" },
  ];
  return (
    <InfoCard titleEn="Three-step industry boundary method" titleZh="三步產業邊界法" mode={mode} tone="teal">
      <div className="grid gap-3 md:grid-cols-3">
        {rows.map((row) => (
          <div key={row.no} className="rounded-3xl border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
            <div className="mb-2 h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: `${theme.teal}18`, color: theme.teal }}>{row.no}</div>
            <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={row.en} zh={row.zh} /></div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
        <BiText mode={mode} en="This is the safer exam method because it prevents industry definition from drifting into SIC-style labels or technology categories. The test is direct competition over a similar customer-facing output." zh="這種寫法在考場上更安全，因為它能防止 industry definition 滑向 SIC 式分類或 technology categories。真正標準是：是否在爭奪相似的 customer-facing output。" />
      </div>
    </InfoCard>
  );
}

function SparkArchitecture({ mode }) {
  const spark = [
    { key: "S", en: "Scope", zh: "Scope", noteEn: "Where we compete", noteZh: "在哪裡競爭" },
    { key: "P", en: "Positioning", zh: "Positioning", noteEn: "How we compete", noteZh: "如何競爭" },
    { key: "A", en: "Activities", zh: "Activities", noteEn: "What we do", noteZh: "做甚麼" },
    { key: "R", en: "Resources", zh: "Resources", noteEn: "What we use", noteZh: "用甚麼" },
    { key: "K", en: "Knowledge", zh: "Knowledge", noteEn: "What we know", noteZh: "知道甚麼" },
  ];
  const outer = [
    { en: "Leadership", zh: "Leadership" },
    { en: "Execution", zh: "Execution" },
    { en: "Organization & management", zh: "Organization & Management" },
    { en: "Governance", zh: "Governance" },
  ];
  return (
    <InfoCard titleEn="SPARK is the core, not the whole answer" titleZh="SPARK 是核心，但不是完整答案" mode={mode} tone="gold">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
        <div className="rounded-[28px] border p-4" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
          <svg viewBox="0 0 280 280" className="w-full h-auto">
            <circle cx="140" cy="140" r="102" fill="#FBF8F0" stroke="#D9D0BE" />
            <circle cx="140" cy="140" r="62" fill="#FFF" stroke="#D9D0BE" />
            {spark.map((item, idx) => {
              const angle = (Math.PI * 2 * idx) / spark.length - Math.PI / 2;
              const x = 140 + 66 * Math.cos(angle);
              const y = 140 + 66 * Math.sin(angle);
              return (
                <g key={item.key}>
                  <circle cx={x} cy={y} r="18" fill={theme.plum} opacity="0.16" />
                  <circle cx={x} cy={y} r="11" fill={theme.plum} />
                  <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fill="#FFF" fontWeight="700">{item.key}</text>
                </g>
              );
            })}
            <text x="140" y="137" textAnchor="middle" fontSize="14" fill="#1E2732" fontWeight="700">SPARK</text>
            <text x="140" y="153" textAnchor="middle" fontSize="10" fill="#485665">core strategic logic</text>
          </svg>
        </div>
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {spark.map((item) => (
              <div key={item.key} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FFFDF8" }}>
                <div className="font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>
                <div style={{ color: theme.subInk }}><BiText mode={mode} en={item.noteEn} zh={item.noteZh} /></div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {outer.map((item) => (
              <div key={item.en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}>
                <BiText mode={mode} en={item.en} zh={item.zh} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfoCard>
  );
}

function QuickCaseLevelMatrix({ mode }) {
  const cols = [
    { key: "firm", labelEn: "Firm", labelZh: "公司" },
    { key: "industry", labelEn: "Industry", labelZh: "產業" },
    { key: "meso", labelEn: "Meso", labelZh: "群聚" },
    { key: "macro", labelEn: "Macro", labelZh: "國家" },
    { key: "meta", labelEn: "Meta", labelZh: "超國家" },
  ];
  const rows = [
    { caseEn: "NEC-GTE", caseZh: "NEC-GTE", hit: "firm" },
    { caseEn: "Airline industry", caseZh: "Airline Industry", hit: "industry" },
    { caseEn: "ETA / Swatch", caseZh: "ETA / Swatch", hit: "industry" },
    { caseEn: "P&G in China", caseZh: "P&G in China", hit: "macro" },
    { caseEn: "RTZ / Chinalco", caseZh: "RTZ / Chinalco", hit: "meta" },
    { caseEn: "WPP", caseZh: "WPP", hit: "meta" },
    { caseEn: "Nokia", caseZh: "Nokia", hit: "firm" },
  ];
  return (
    <InfoCard titleEn="Fast case-to-level scan" titleZh="案例對層次快速掃描" mode={mode} tone="plum">
      <div className="xl:hidden grid gap-3">
        {rows.map((row) => (
          <div key={row.caseEn} className="rounded-[22px] border p-4" style={{ background: '#FFFDF8', borderColor: theme.line }}>
            <div className="mb-2 text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={row.caseEn} zh={row.caseZh} /></div>
            <div className="grid gap-2 sm:grid-cols-2">
              {cols.filter((col) => row.hit === col.key).map((col) => (
                <div key={col.key} className="rounded-2xl border px-3 py-2 text-sm leading-6" style={{ borderColor: `${theme.teal}55`, background: '#EDF4F6', color: theme.teal }}>
                  <BiText mode={mode} en={col.labelEn} zh={col.labelZh} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden xl:block w-full max-w-full overflow-x-auto overscroll-x-contain">
        <div className="min-w-[720px] grid" style={{ gridTemplateColumns: `200px repeat(${cols.length}, minmax(90px, 1fr))`, gap: '10px' }}>
          <div></div>
          {cols.map((col) => <div key={col.key} className="rounded-2xl border px-3 py-2 text-center text-xs font-semibold" style={{ borderColor: theme.line, background: "#F4F0E6", color: theme.ink }}><BiText mode={mode} en={col.labelEn} zh={col.labelZh} /></div>)}
          {rows.map((row) => (
            <React.Fragment key={row.caseEn}>
              <div className="rounded-2xl border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.ink }}><BiText mode={mode} en={row.caseEn} zh={row.caseZh} /></div>
              {cols.map((col) => <div key={col.key} className="rounded-2xl border flex items-center justify-center px-3 py-3 text-sm font-semibold" style={{ borderColor: row.hit === col.key ? `${theme.teal}55` : theme.line, background: row.hit === col.key ? "#EDF4F6" : "#FBF8F0", color: row.hit === col.key ? theme.teal : "#B9B0A0" }}>{row.hit === col.key ? "●" : "·"}</div>)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </InfoCard>
  );
}

function AnchorNav({ mode, activeTag, setActiveTag, query, setQuery }) {
  return (
    <div className="sticky top-0 z-30 max-w-full overflow-x-clip border-b backdrop-blur" style={{ background: "rgba(252,250,242,0.88)", borderColor: theme.line }}>
      <div className="mx-auto max-w-[1600px] px-4 py-3 md:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.teal }}>{uiText(mode, "STRT 6200 Final Exam Infrastructure", "STRT 6200 期末考 Infrastructure", "STRT 6200 Final Exam Infrastructure")}</div>
              <div className="mt-1 text-xl md:text-2xl font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en="Strategic Decision-Making Review System" zh="策略決策期末複習系統" /></div>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={uiText(mode, "Search keyword, case, or tool…", "搜尋關鍵字、案例、工具…", "Tìm từ khóa, case hoặc công cụ…", undefined, "کلیدی لفظ، کیس یا ٹول تلاش کریں…", "Busca una palabra clave, caso o herramienta…")} dir={mode === "ur" ? "rtl" : "ltr"} className={cn("w-full md:w-[340px] max-w-full rounded-full border px-4 py-2 text-sm outline-none", mode === "ur" ? "text-right" : "text-left")} style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.ink }} />
              <div className="flex flex-wrap gap-2">{chips.map((chip) => <button key={chip.key} onClick={() => setActiveTag(chip.key)} className="rounded-full border px-3 py-2 text-xs font-semibold tracking-[0.14em]" style={{ borderColor: activeTag === chip.key ? theme.teal : theme.line, background: activeTag === chip.key ? "#EDF4F6" : "#FBF8F0", color: activeTag === chip.key ? theme.teal : theme.subInk }}><BiText mode={mode} en={chip.en} zh={chip.zh} /></button>)}</div>
            </div>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1">{sectionMeta.map((item) => <a key={item.id} href={`#${item.id}`} className="whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={item.en} zh={item.zh} /></a>)}</div>
        </div>
      </div>
    </div>
  );
}

function FloatingLanguageToggle({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const options = [{ key: "en", label: "EN" }, { key: "zh", label: "繁體" }, { key: "zh-cn", label: "简体" }, { key: "bi", label: "EN + 中文" }, { key: "vi", label: "Tiếng Việt" }, { key: "pt", label: "Português" }, { key: "ur", label: "اردو" }, { key: "es", label: "Español" }, { key: "jp", label: "日本語" }];
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5">
      {open ? <div className="mb-2 rounded-3xl border p-2 shadow-xl" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="mb-2 px-2 pt-1 text-[10px] uppercase tracking-[0.2em]" style={{ color: theme.plum }}>{uiText(mode, "Language", "語言", "Ngôn ngữ", undefined, undefined, undefined, "Idioma", "言語")}</div><div className="flex flex-col gap-1">{options.map((option) => <button key={option.key} onClick={() => { setMode(option.key); setOpen(false); }} className={cn("rounded-2xl px-3 py-2 text-sm font-semibold", mode === "ur" ? "text-right" : "text-left")} style={{ background: mode === option.key ? "#EDF4F6" : "transparent", color: mode === option.key ? theme.teal : theme.ink }}>{option.label}</button>)}</div></div> : null}
      <button onClick={() => setOpen((v) => !v)} className="h-14 w-14 rounded-full border text-xl shadow-lg" style={{ background: "#FFFDF8", borderColor: theme.line, color: theme.plum }} aria-label={uiText(mode, "Language switch", "切換語言", "Chuyển ngôn ngữ", undefined, undefined, undefined, "Cambiar idioma", "言語切替")} title={uiText(mode, "Language switch", "切換語言", "Chuyển ngôn ngữ", undefined, undefined, undefined, "Cambiar idioma", "言語切替")}>◎</button>
    </div>
  );
}



function VisualPanel({ mode, titleEn, titleZh, subEn, subZh, children, tone = "teal" }) {
  const tones = {
    teal: { bg: "#F4F8F8", border: theme.teal, sub: theme.teal },
    plum: { bg: "#F8F4FA", border: theme.plum, sub: theme.plum },
    gold: { bg: "#FBF7EE", border: theme.gold, sub: theme.gold },
    olive: { bg: "#F6F7F3", border: theme.olive, sub: theme.olive },
    danger: { bg: "#FBF3F1", border: theme.danger, sub: theme.danger },
  };
  const t = tones[tone] || tones.teal;
  return (
    <div className="min-w-0 max-w-full overflow-hidden rounded-[28px] border p-4 md:p-5" style={{ background: t.bg, borderColor: theme.line }}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em]" style={{ color: t.sub }}><BiText mode={mode} en={titleEn} zh={titleZh} /></div>
          {(subEn || subZh) ? <div className="mt-1 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={subEn || ""} zh={subZh || ""} /></div> : null}
        </div>
        <div className="mt-1 h-2.5 w-2.5 rounded-full" style={{ background: t.border, flexShrink: 0 }} />
      </div>
      {children}
    </div>
  );
}

function FiveLevelPentagonVisual({ mode }) {
  const levels = [
    { key: "macro", order: "03", x: 150, y: 35, en: "National / macro", zh: "National / Macro", color: "#2563EB" },
    { key: "meso", order: "02", x: 50, y: 108, en: "Cluster / meso", zh: "Cluster / Meso", color: "#059669" },
    { key: "industry", order: "01", x: 88, y: 225, en: "Industry", zh: "產業層次", color: "#D97706" },
    { key: "firm", order: "05", x: 212, y: 225, en: "Firm", zh: "公司層次", color: "#DC2626" },
    { key: "meta", order: "04", x: 250, y: 108, en: "Supranational / meta", zh: "Supranational / Meta", color: "#7C3AED" },
  ];
  const points = levels.map((p) => `${p.x},${p.y}`).join(" ");
  const cards = [
    { order: "01", en: "Start with the industry. Define the strategically meaningful competitive field first.", zh: "先從產業下手。先界定具有策略意義的競爭範圍。", color: "#D97706" },
    { order: "02", en: "Move outward to the cluster or ecosystem that shapes suppliers, customers, complements, and substitutes.", zh: "再往外看 cluster 或 ecosystem，理解 suppliers、customers、complements 與 substitutes。", color: "#059669" },
    { order: "03", en: "Then test the country context that enables or blocks the business model.", zh: "接著檢驗國家條件，看它如何支撐或阻礙 business model。", color: "#2563EB" },
    { order: "04", en: "Then layer in supranational pressures that rewrite the rules above the nation state.", zh: "再加上超國家壓力，理解其如何改寫 nation state 之上的規則。", color: "#7C3AED" },
    { order: "05", en: "Only then judge the firm itself. Strong firms inside bad structures still struggle.", zh: "最後才回到 firm 本身。再強的 firm，若結構錯誤，一樣會吃虧。", color: "#DC2626" },
  ];
  return (
    <VisualPanel mode={mode} tone="plum" titleEn="Five-level reading order" titleZh="五層閱讀順序" subEn="A visual reminder of the professor's default analytical sequence." subZh="把教授偏好的預設分析順序做成視覺入口。">
      <div className="grid gap-4 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-center">
        <div className="mx-auto w-full max-w-[360px] rounded-[24px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
          <svg viewBox="0 0 300 260" className="w-full h-auto" role="img" aria-label="Five-level pentagon">
            <polygon points={points} fill="none" stroke="#C9BEA9" strokeWidth="2.5" />
            {levels.map((level) => (
              <g key={level.key}>
                <circle cx={level.x} cy={level.y} r="20" fill={level.color} />
                <text x={level.x} y={level.y + 4} textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">{level.order}</text>
              </g>
            ))}
            {levels.map((level) => (
              <text key={`${level.key}-label`} x={level.x} y={level.key === "macro" ? level.y - 28 : level.y + (level.key === "industry" || level.key === "firm" ? 34 : 0)} textAnchor="middle" fontSize="10.5" fill="#334155" fontWeight="600">
                {level.en}
              </text>
            ))}
          </svg>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-1">
          {cards.map((card) => (
            <div key={card.order} className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
              <div className="mb-2 flex items-center gap-3">
                <div className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.18em]" style={{ background: `${card.color}14`, color: card.color }}>{card.order}</div>
                <div className="h-px flex-1" style={{ background: `${card.color}55` }} />
              </div>
              <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={card.en} zh={card.zh} /></div>
            </div>
          ))}
        </div>
      </div>
    </VisualPanel>
  );
}

function IndustryVisualizationSuite({ mode }) {
  const steps = [
    { n: "01", enH: "Useful output", zhH: "有用輸出", en: "Identify what the customer actually receives in use, not the internal technology stack or the statistical industry code.", zh: "先辨認客戶實際收到甚麼，不要先看技術堆疊，也不要先看統計產業代碼。" },
    { n: "02", enH: "Direct competition", zhH: "直接競爭", en: "Ask who else is fighting for that same customer outcome. Different technologies can still belong to the same industry if the useful output is the same.", zh: "再問誰也在爭奪同一個 customer outcome。即使底層技術不同，只要 useful output 相同，仍可能屬同一產業。" },
    { n: "03", enH: "Boundary", zhH: "產業邊界", en: "Draw the boundary only after you know the output and the direct rivals. This avoids code-based or brand-based misclassification.", zh: "等 useful output 與 direct rivals 都清楚後，再劃定邊界。這能避免用分類代碼或品牌印象來誤判。" },
  ];
  const spectrum = [
    { en: "Subsidized", zh: "補貼競爭", color: "#DC2626" },
    { en: "Perfect", zh: "完全競爭", color: "#EA580C" },
    { en: "Hyper", zh: "超競爭", color: "#D97706" },
    { en: "Oligopoly", zh: "寡佔", color: "#2563EB" },
    { en: "Monopoly", zh: "獨佔", color: "#7C3AED" },
  ];
  const boards = [
    { tone: "gold", titleEn: "Why is profit possible?", titleZh: "利潤為何可能存在？", bullets: [
      { en: "Look for departures from perfect competition: barriers, differentiation, information asymmetry, switching costs, transport costs, collusion, standards.", zh: "找出偏離完全競爭之處：障礙、差異化、資訊不對稱、switching costs、運輸成本、collusion、standards。" },
      { en: "This is the structural explanation, not yet the firm explanation.", zh: "這是結構性解釋，還不是 firm-specific 解釋。" },
    ]},
    { tone: "teal", titleEn: "Where does profit come from?", titleZh: "利潤從哪裡來？", bullets: [
      { en: "Price premium, cost advantage, bargaining leverage, standards control, installed base, customer lock-in, or scarce complementary assets.", zh: "可能來自價格溢價、成本優勢、議價優勢、標準控制、installed base、customer lock-in，或稀缺的 complementary assets。" },
      { en: "State the source explicitly rather than saying the industry is simply 'good.'", zh: "不要只說這個 industry '很好'，要明白說出利潤來源。" },
    ]},
    { tone: "danger", titleEn: "What could shift the structure?", titleZh: "哪些因素會改寫結構？", bullets: [
      { en: "Entry, substitutes, regulation, buyer concentration, supplier consolidation, new standards, or adjacent-industry invasion can move the industry on the competition spectrum.", zh: "新進者、替代品、法規、買方集中、供應商整合、新標準或相鄰產業入侵，都可能讓競爭類型在光譜上移動。" },
      { en: "This is where future competition and CEA become especially important.", zh: "這也是 future competition 與 CEA 特別重要的地方。" },
    ]},
  ];
  return (
    <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <VisualPanel mode={mode} tone="teal" titleEn="Industry boundary tools" titleZh="產業邊界工具" subEn="Convert the definition paragraph into a quick three-step method." subZh="把定義段落轉成三步驟工具。">
        <div className="grid gap-3 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
              <div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.teal }}>{step.n}</div>
              <div className="mb-2 text-sm font-semibold break-words [overflow-wrap:anywhere]" style={{ color: theme.ink }}><BiText mode={mode} en={step.enH} zh={step.zhH} /></div>
              <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={step.en} zh={step.zh} /></div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[22px] border p-4" style={{ background: "#FBF8F0", borderColor: theme.line }}>
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.gold }}><BiText mode={mode} en="Competition spectrum" zh="競爭光譜" /></div>
          <div className="grid gap-2 md:grid-cols-5">
            {spectrum.map((item, idx) => (
              <div key={item.en} className="rounded-[18px] p-3 text-center text-sm font-semibold" style={{ background: `${item.color}14`, color: item.color, border: `1px solid ${item.color}33` }}>
                <div className="mb-1 text-[11px] tracking-[0.18em]">{String(idx + 1).padStart(2, "0")}</div>
                <BiText mode={mode} en={item.en} zh={item.zh} />
              </div>
            ))}
          </div>
        </div>
      </VisualPanel>
      <VisualPanel mode={mode} tone="plum" titleEn="Industry economics question board" titleZh="產業經濟問題板" subEn="A visual upgrade for paragraphs that should really be diagnostic prompts." subZh="把本來應該是診斷問題的文字塊，改成可掃描的問題板。">
        <div className="space-y-3">
          {boards.map((board) => (
            <div key={board.titleEn} className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
              <div className="mb-2 text-sm font-semibold" style={{ color: board.tone === "danger" ? theme.danger : board.tone === "gold" ? theme.gold : theme.teal }}><BiText mode={mode} en={board.titleEn} zh={board.titleZh} /></div>
              <BulletList mode={mode} items={board.bullets} />
            </div>
          ))}
        </div>
      </VisualPanel>
    </div>
  );
}

function FirmArchitectureBoard({ mode }) {
  const strategy = [
    { en: "Scope", zh: "Scope" }, { en: "Positioning", zh: "Positioning" }, { en: "Activities", zh: "Activities" }, { en: "Resources", zh: "Resources" }, { en: "Knowledge", zh: "Knowledge" }, { en: "Leadership", zh: "Leadership" },
  ];
  const execution = [
    { en: "Execution", zh: "Execution" }, { en: "Organization & management", zh: "Organization & Management" }, { en: "Governance", zh: "Governance" }, { en: "Firm-specific policies", zh: "Firm-Specific Policies" }, { en: "Firm-specific institutions", zh: "Firm-Specific Institutions" },
  ];
  return (
    <VisualPanel mode={mode} tone="danger" titleEn="Firm architecture" titleZh="Firm architecture" subEn="SPARK is not the whole answer. The full firm-level diagnosis must separate strategic logic from organizational realization." subZh="SPARK 不是全部答案。完整的 firm-level diagnosis 必須把 strategic logic 與 organizational realization 分開看。">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_120px_1fr] xl:items-center">
        <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.plum }}><BiText mode={mode} en="Strategy side" zh="策略面" /></div>
          <div className="grid gap-2 sm:grid-cols-2">
            {strategy.map((item) => <div key={item.en} className="rounded-[18px] border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>)}
          </div>
        </div>
        <div className="hidden xl:flex items-center justify-center">
          <div className="rounded-full border px-4 py-6 text-center text-sm font-semibold leading-6" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.danger }}><BiText mode={mode} en="Relative performance" zh="Relative performance" /></div>
        </div>
        <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.teal }}><BiText mode={mode} en="Execution side" zh="執行面" /></div>
          <div className="grid gap-2 sm:grid-cols-2">
            {execution.map((item) => <div key={item.en} className="rounded-[18px] border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>)}
          </div>
        </div>
      </div>
    </VisualPanel>
  );
}

function MesoEcosystemBoard({ mode }) {
  return (
    <VisualPanel mode={mode} tone="olive" titleEn="Cluster logic map" titleZh="Cluster 邏輯圖" subEn="This section is easier to retain as an ecosystem map than as eight separate bullet clusters." subZh="這一節比起八組文字，更適合記成 ecosystem map。">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_180px_1fr] xl:items-stretch">
        <div className="grid gap-3">
          <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="text-sm font-semibold" style={{ color: theme.ok }}><BiText mode={mode} en="Inputs & suppliers" zh="Inputs 與 Suppliers" /></div><div className="mt-2 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Availability, quality, cost, concentration, bargaining power, and collaboration all shape what the focal business can do." zh="投入的可得性、品質、成本、集中度、議價力與合作可能性，會直接影響 focal business 的行動空間。" /></div></div>
          <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="text-sm font-semibold" style={{ color: theme.gold }}><BiText mode={mode} en="Shared resources & activities" zh="Shared Resources 與 Activities" /></div><div className="mt-2 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Knowledge spillovers, common channels, and scope economies can lower cost or improve the offer without changing the focal firm itself." zh="Knowledge spillovers、common channels 與 scope economies 可能在不改變 focal firm 本身的情況下，降低成本或改善 offer。" /></div></div>
        </div>
        <div className="rounded-[28px] border p-4 text-center" style={{ background: "#FBF8F0", borderColor: theme.line }}>
          <div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.teal }}><BiText mode={mode} en="Focal industry / firm" zh="Focal Industry / Firm" /></div>
          <div className="rounded-[22px] border px-4 py-8 text-sm font-semibold leading-6" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.ink }}><BiText mode={mode} en="Performance depends on how well the focal player fits into the surrounding system, not just on what it does alone." zh="績效取決於 focal player 與周圍系統的配合程度，不只是它自己單獨做了甚麼。" /></div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="text-sm font-semibold" style={{ color: theme.plum }}><BiText mode={mode} en="Demand & customers" zh="Demand 與 Customers" /></div><div className="mt-2 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Size, growth, sophistication, segmentation, bargaining power, and price sensitivity determine the revenue side of the system." zh="需求規模、成長、成熟度、區隔、議價力與價格敏感度，決定了系統的收入面。" /></div></div>
          <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="text-sm font-semibold" style={{ color: theme.danger }}><BiText mode={mode} en="Complements & substitutes" zh="Complementarities 與 Substitutes" /></div><div className="mt-2 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Complements expand demand or willingness to pay. Substitutes cap upside and can compress margins quickly." zh="互補會擴張 demand 或 willingness to pay；替代則會壓縮上行空間，甚至迅速擠壓 margins。" /></div></div>
          <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="text-sm font-semibold" style={{ color: theme.olive }}><BiText mode={mode} en="Meso policies & institutions" zh="Meso Policies 與 Institutions" /></div><div className="mt-2 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Cluster policies, training systems, and public-private institutions can strengthen or weaken the whole ecosystem over time." zh="Cluster policies、訓練體系與公私協作制度，會在時間中強化或削弱整個 ecosystem。" /></div></div>
        </div>
      </div>
    </VisualPanel>
  );
}

function MacroDiagnosticBoard({ mode }) {
  const rows = [
    { en: "Level", zh: "水準", exEn: "How large, rich, liquid, stable, or institutionally strong is the market now?", exZh: "這個市場此刻到底有多大、多富、多有流動性、多穩定、制度多強？" },
    { en: "Trend", zh: "趨勢", exEn: "Is the direction improving, stagnating, or deteriorating?", exZh: "方向是在改善、停滯，還是在惡化？" },
    { en: "Volatility / disruption", zh: "波動 / 斷裂", exEn: "Could macro shocks or non-linear change break the current logic?", exZh: "總體衝擊或非線性變化，會不會打斷現有邏輯？" },
  ];
  return (
    <VisualPanel mode={mode} tone="teal" titleEn="Macro diagnostic board" titleZh="Macro 診斷板" subEn="The macro level is usually easier to remember as a three-pass scan than as a static list." subZh="Macro level 與其背靜態清單，不如記成三輪掃描。">
      <div className="grid gap-3 md:grid-cols-3">
        {rows.map((row) => (
          <div key={row.en} className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
            <div className="mb-2 text-sm font-semibold" style={{ color: theme.teal }}><BiText mode={mode} en={row.en} zh={row.zh} /></div>
            <div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={row.exEn} zh={row.exZh} /></div>
          </div>
        ))}
      </div>
    </VisualPanel>
  );
}

function MetaPressureBoard({ mode }) {
  const drivers = [
    { en: "Geopolitics", zh: "地緣政治" }, { en: "Global economics", zh: "全球經濟" }, { en: "Technology shifts", zh: "技術變動" }, { en: "Trade blocs / supranational policy", zh: "區域集團 / 超國家政策" }, { en: "Foreign governments", zh: "外國政府" }, { en: "Foreign MNCs / other groups", zh: "外國 MNC 與其他群體" },
  ];
  return (
    <VisualPanel mode={mode} tone="plum" titleEn="Meta pressure map" titleZh="Meta 壓力圖" subEn="Use this to convert a long descriptive paragraph into a rule-rewriting map." subZh="把長段敘述轉成『誰在改寫規則』的圖。">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_180px_1fr] xl:items-center">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {drivers.slice(0,3).map((d) => <div key={d.en} className="rounded-[18px] border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={d.en} zh={d.zh} /></div>)}
        </div>
        <div className="rounded-[24px] border p-4 text-center" style={{ borderColor: theme.line, background: "#FBF8F0" }}>
          <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.plum }}><BiText mode={mode} en="Rule rewrite" zh="規則改寫" /></div>
          <div className="mt-2 text-sm leading-6" style={{ color: theme.ink }}><BiText mode={mode} en="Meta forces matter when they change who may enter, with what technology, under what political constraints, and on what global terms." zh="Meta forces 真正重要，是因為它們會改寫誰能進場、用甚麼技術進場、承受甚麼政治限制，以及在甚麼全球條件下進場。" /></div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {drivers.slice(3).map((d) => <div key={d.en} className="rounded-[18px] border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={d.en} zh={d.zh} /></div>)}
        </div>
      </div>
    </VisualPanel>
  );
}

function InternationalArchitectureBoard({ mode }) {
  const questions = [
    { en: "How many countries?", zh: "有幾個國家？" }, { en: "Which countries?", zh: "是哪一些國家？" }, { en: "How do the five levels differ from home?", zh: "五個層次相對母國有何差異？" }, { en: "What SPARK is needed in each country?", zh: "每個國家需要甚麼 SPARK？" }, { en: "How should SPARK fit country conditions?", zh: "如何讓 SPARK 對上國家條件？" }, { en: "How should the company be organized?", zh: "公司要如何組織？" }, { en: "Are the countries similar or different?", zh: "這些國家相似還是本質不同？" }, { en: "Is the international company more than the sum of the parts?", zh: "國際公司有沒有大於 parts 的總和？" },
  ];
  return (
    <VisualPanel mode={mode} tone="gold" titleEn="International architecture" titleZh="國際策略架構" subEn="The eight-question blueprint becomes easier to apply when grouped into select, compare, configure, and organize." subZh="八問藍圖改成 select、compare、configure、organize 之後更容易實戰。">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[220px_minmax(0,1fr)] xl:items-start">
        <div className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}>
          <div className="mb-3 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.gold }}><BiText mode={mode} en="Four workstreams" zh="四條工作線" /></div>
          <div className="space-y-2 text-sm leading-6" style={{ color: theme.subInk }}>
            <div><b style={{ color: theme.ink }}><BiText mode={mode} en="Select" zh="選擇" /></b><BiText mode={mode} en=": choose country count and identity." zh="：決定國家數量與國家名單。" /></div>
            <div><b style={{ color: theme.ink }}><BiText mode={mode} en="Compare" zh="比較" /></b><BiText mode={mode} en=": run five-level home-versus-host contrast." zh="：做 home versus host 的五層對照。" /></div>
            <div><b style={{ color: theme.ink }}><BiText mode={mode} en="Configure" zh="配置" /></b><BiText mode={mode} en=": define SPARK and the global-local split." zh="：定義 SPARK 與 global-local split。" /></div>
            <div><b style={{ color: theme.ink }}><BiText mode={mode} en="Organize" zh="組織" /></b><BiText mode={mode} en=": decide whether the company is worth more integrated than separate." zh="：判斷整合後是否真的比拆開更有價值。" /></div>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {questions.map((q, idx) => <div key={q.en} className="rounded-[20px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.teal }}>{String(idx + 1).padStart(2, "0")}</div><div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={q.en} zh={q.zh} /></div></div>)}
        </div>
      </div>
    </VisualPanel>
  );
}

function CorporateMechanismBoard({ mode }) {
  const mechanisms = [
    { en: "Scope economies", zh: "Scope Economies" },
    { en: "Shared resources", zh: "Shared Resources" },
    { en: "Knowledge transfer", zh: "Knowledge Transfer" },
    { en: "Internal capital market", zh: "Internal Capital Market" },
    { en: "Managerial discipline", zh: "Managerial Discipline" },
    { en: "Bargaining leverage", zh: "Bargaining Leverage" },
  ];
  return (
    <VisualPanel mode={mode} tone="plum" titleEn="Corporate value creation board" titleZh="Corporate value creation board" subEn="A visual version of the 'more than the sum of its parts' test." subZh="把『是否大於 parts 總和』變成一眼可掃的機制板。">
      <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_200px_1fr] xl:items-center">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {mechanisms.slice(0,3).map((m) => <div key={m.en} className="rounded-[18px] border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={m.en} zh={m.zh} /></div>)}
        </div>
        <div className="rounded-[24px] border p-4 text-center" style={{ borderColor: theme.line, background: "#FBF8F0" }}>
          <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.plum }}><BiText mode={mode} en="Central test" zh="中心測試" /></div>
          <div className="mt-2 text-sm leading-6" style={{ color: theme.ink }}><BiText mode={mode} en="If none of these mechanisms is real and defensible, the corporate structure may be destroying rather than creating value." zh="如果這些機制沒有一項是真實且可防守的，corporate structure 很可能是在毀值，而不是創值。" /></div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-1">
          {mechanisms.slice(3).map((m) => <div key={m.en} className="rounded-[18px] border px-3 py-3 text-sm" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={m.en} zh={m.zh} /></div>)}
        </div>
      </div>
    </VisualPanel>
  );
}

function ImplementationDiagnosisBoard({ mode }) {
  const stages = [
    { en: "Seeing", zh: "看見問題", qEn: "What is the organization not recognizing?", qZh: "組織沒有看見甚麼？", color: theme.teal },
    { en: "Translating", zh: "轉成可執行語言", qEn: "Was the strategy translated into specific operating instructions?", qZh: "策略有沒有被翻成可執行指令？", color: theme.gold },
    { en: "Resistance", zh: "抵抗", qEn: "Who loses, fears, or simply prefers inertia?", qZh: "誰會失去利益、害怕改變，或偏好 inertia？", color: theme.danger },
    { en: "Environment", zh: "環境", qEn: "What is being rewarded or punished inside the system?", qZh: "系統內到底在獎勵或懲罰甚麼？", color: theme.plum },
    { en: "Follow-through", zh: "追蹤落地", qEn: "How will the organization know whether the change is actually working?", qZh: "組織如何知道改變是否真的在運作？", color: theme.ok },
  ];
  return (
    <VisualPanel mode={mode} tone="danger" titleEn="Implementation diagnosis flow" titleZh="Implementation diagnosis flow" subEn="This turns a long implementation narrative into a stepwise diagnostic path." subZh="把 implementation 的長篇敘述改成逐步診斷流程。">
      <div className="grid gap-3 xl:grid-cols-5">
        {stages.map((stage, idx) => <div key={stage.en} className="rounded-[22px] border p-4" style={{ background: "#FFFDF8", borderColor: theme.line }}><div className="mb-2 flex items-center justify-between gap-2"><div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: stage.color }}>{String(idx + 1).padStart(2, "0")}</div><div className="h-px flex-1" style={{ background: `${stage.color}44` }} /></div><div className="mb-2 text-sm font-semibold break-words [overflow-wrap:anywhere]" style={{ color: theme.ink }}><BiText mode={mode} en={stage.en} zh={stage.zh} /></div><div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={stage.qEn} zh={stage.qZh} /></div></div>)}
      </div>
    </VisualPanel>
  );
}

function ExamFlowBoard({ mode }) {
  const steps = [
    { en: "Define the question", zh: "定義題目", outEn: "What is actually being asked?", outZh: "題目到底要你回答甚麼？" },
    { en: "Define the strategically meaningful industry", zh: "界定策略性產業", outEn: "Form, function, direct competition.", outZh: "form、function、direct competition。" },
    { en: "Select the binding levels", zh: "挑出 binding levels", outEn: "Do not force all five levels into every answer.", outZh: "不要硬把五層全部塞進每一題。" },
    { en: "Run the right tool", zh: "使用正確工具", outEn: "Economics, SPARK, bargaining, CEA, implementation, or international logic as needed.", outZh: "依題目需要使用 economics、SPARK、bargaining、CEA、implementation 或 international logic。" },
    { en: "Use case evidence", zh: "使用案例證據", outEn: "Numbers, facts, events, quotes, relationships.", outZh: "數字、事實、事件、quotes、關係。" },
    { en: "State the conclusion", zh: "下結論", outEn: "Use BARD or POE calibration.", outZh: "用 BARD 或 POE 做信心校準。" },
    { en: "Connect to action", zh: "連到行動", outEn: "Only if the prompt requires strategy or implementation implications.", outZh: "只有題目要求 strategy 或 implementation implication 時再延伸。" },
  ];
  return (
    <VisualPanel mode={mode} tone="gold" titleEn="Answer construction flow" titleZh="答題建構流程" subEn="A flow version of the default answer shape for use under time pressure." subZh="把預設答題骨架轉成壓力下更好操作的流程版。">
      <div className="grid gap-3 xl:grid-cols-7">
        {steps.map((step, idx) => <div key={step.en} className="rounded-[22px] border p-4" style={{ background: idx % 2 === 0 ? "#FFFDF8" : "#FBF8F0", borderColor: theme.line }}><div className="mb-2 text-[11px] uppercase tracking-[0.18em]" style={{ color: theme.gold }}>{String(idx + 1).padStart(2, "0")}</div><div className="mb-2 text-sm font-semibold break-words [overflow-wrap:anywhere]" style={{ color: theme.ink }}><BiText mode={mode} en={step.en} zh={step.zh} /></div><div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={step.outEn} zh={step.outZh} /></div></div>)}
      </div>
    </VisualPanel>
  );
}

function OverviewSection({ mode }) {
  return (
    <SectionShell id="overview" mode={mode} titleEn="What the exam is really testing" titleZh="這份考試真正測甚麼" kickerEn="Course signals" kickerZh="課程訊號" refs={["Session 1", "Last Day", "Master Review"]}>
      <div className="grid min-w-0 gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-4">
          <InfoCard titleEn="Reader orientation" titleZh="讀者導向" mode={mode} tone="teal"><BiText mode={mode} block en="This build is designed as a user-facing revision system, not a progress memo. It assumes you need to read quickly, see structure immediately, and move from concept to case application without losing fidelity." zh="這個版本是給讀者直接使用的複習系統，不是向任何人匯報進度。它假設你需要快速閱讀、立刻看見結構，並能在概念與案例應用之間切換，同時不犧牲內容完整性。" /></InfoCard>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <InfoCard titleEn="Read the question" titleZh="先讀清楚題目" mode={mode} tone="gold"><BiText mode={mode} block en="Answer the question in front of you, not the one you hoped to get." zh="答眼前這一題，不是答你原本希望出現的那一題。" /></InfoCard>
            <InfoCard titleEn="Use the right tool" titleZh="工具要用對" mode={mode} tone="plum"><BiText mode={mode} block en="Do not display frameworks as vocabulary. Select the right analytical tool for the case trigger." zh="不要把框架當名詞展示。要根據題目 trigger 選對分析工具。" /></InfoCard>
            <InfoCard titleEn="No extraneous material" titleZh="不要塞無關內容" mode={mode} tone="danger"><BiText mode={mode} block en="Binding levels only. Unnecessary theory, extra cases, and generic filler dilute grades." zh="只寫真正 binding 的層次。多餘理論、額外案例、空泛填充都會稀釋分數。" /></InfoCard>
            <InfoCard titleEn="Use time wisely" titleZh="時間要精準分配" mode={mode} tone="ok"><BiText mode={mode} block en="The exam rewards disciplined triage, not maximum text volume." zh="考試獎勵的是有紀律的取捨，不是字數最大化。" /></InfoCard>
          </div>
          <InfoCard titleEn="Professional standard, not student display" titleZh="不是學生表演，而是專業判斷" mode={mode}><BulletList mode={mode} items={[
            { en: "The course is meant to make you job-ready for strategy-related work, not simply better at classroom recall.", zh: "這門課的目的，是讓你更接近 strategy-related work 的 job-ready 狀態，而不只是更會背課堂內容。" },
            { en: "Cases are primary teaching vehicles, not decorative examples.", zh: "案例是主要教學載體，不是裝飾性的例子。" },
            { en: "The text, lecture notes, and videos are required because much of that material is used in case analysis without being repeated in class.", zh: "教科書、講義與影片都是必讀，因為大量內容會直接進入案例分析，而不會在課堂上重講。" },
            { en: "The final may use fewer questions and a longer reading so multiple issues can be addressed from the same case.", zh: "期末可能採較少題目、較長閱讀，讓多個議題都從同一個 reading 被處理。" },
          ]} /></InfoCard>
          <FiveLevelDriverMap mode={mode} />
          <FiveLevelPentagonVisual mode={mode} />
        </div>
        <div className="space-y-4">
          <InfoCard titleEn="Weighted focus" titleZh="高權重焦點" mode={mode} tone="plum"><BulletList mode={mode} items={[{ en: "International strategy", zh: "國際策略" }, { en: "Corporate strategy", zh: "企業總體策略" }, { en: "Implementation and organizational pathologies", zh: "落地執行與組織病理" }]} /></InfoCard>
          <InfoCard titleEn="Core exam behavior" titleZh="核心作答行為" mode={mode}><BulletList mode={mode} items={[
            { en: "Identify the focal firm and the strategically meaningful industry.", zh: "先辨認 focal firm 與具有策略意義的 industry。" },
            { en: "State the performance comparator before judging performance.", zh: "在評論 performance 前，先說明 comparator。" },
            { en: "Name only the levels that are truly binding.", zh: "只點出真正 binding 的層次。" },
            { en: "Use evidence to reach a conclusion with calibrated confidence.", zh: "用 evidence 推導出帶有校準信心程度的 conclusion。" },
            { en: "If the prompt asks for action, connect diagnosis to strategy and implementation barriers.", zh: "如果題目要求 action，就必須把 diagnosis 連到 strategy 與 implementation barrier。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Coverage check" titleZh="覆蓋檢查" mode={mode} tone="gold"><BiText mode={mode} block en="This infrastructure is built from the pasted final-review backbone and checked against the course text, Session 1 course framing, the Last Day deck, the implementation lecture, practice questions, and key case materials. The full original pasted notes are preserved in the appendix." zh="這個 infrastructure 以貼入的期末總整為主骨架，並交叉檢查課本文本、Session 1 課程 framing、Last Day 投影片、implementation 講義、practice questions 與關鍵案例材料。完整原始貼入內容保留在附錄。" /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function SpineSection({ mode }) {
  const process = [
    { en: "Search", zh: "Search" }, { en: "Sort", zh: "Sort" }, { en: "Analyze", zh: "Analyze" }, { en: "Hypothesize", zh: "Hypothesize" }, { en: "Test", zh: "Test" }, { en: "Conclude", zh: "Conclude" }, { en: "Formulate Strategy", zh: "Formulate Strategy" }, { en: "Implement", zh: "Implement" },
  ];
  return (
    <SectionShell id="spine" mode={mode} titleEn="The analytical spine" titleZh="分析脊椎" kickerEn="Method" kickerZh="方法" refs={["Last Day", "Chapter 2", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Full chain" titleZh="完整鏈條" mode={mode} tone="teal"><TinyProcess mode={mode} items={process} /></InfoCard>
        <div className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr]">
          <InfoCard titleEn="BARD and POE" titleZh="BARD 與 POE" mode={mode}><BulletList mode={mode} items={[
            { en: "Use BARD-style language when the evidence is strong and viable alternatives are minimal.", zh: "當證據很強、可行替代解釋極少時，用 BARD 型語氣。" },
            { en: "Use POE-style language when the balance of evidence points in one direction but remains limited.", zh: "當 evidence 傾向某方向但仍有限時，用 POE 型語氣。" },
            { en: "No conclusion means no score. Over-hedging strong evidence or overstating weak evidence both lose precision.", zh: "沒有 conclusion 幾乎等於沒有分數。強證據過度保守、弱證據過度自信，兩者都會失分。" },
          ]} /></InfoCard>
          <InfoCard titleEn="6 inches, 3 meters, 10 meters" titleZh="6 吋、3 公尺、10 公尺" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "6 inches away: organize facts, numbers, quotes, and events into the framework.", zh: "6 吋距離：把 facts、數字、quotes 與事件放進框架。" },
            { en: "3 meters away: extract the major conclusion from each analytical block.", zh: "3 公尺距離：從每一塊分析抽出 major conclusion。" },
            { en: "10 meters away: solve the puzzle of value creation, competitive advantage, and appropriability.", zh: "10 公尺距離：解整個 puzzle，也就是 value creation、competitive advantage 與 appropriability。" },
          ]} /></InfoCard>
          <InfoCard titleEn="The four commandments" titleZh="四條總戒律" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Understand the industry and what it does.", zh: "先理解這個 industry 到底在做甚麼。" },
            { en: "Draw the pictures.", zh: "把圖畫出來。" },
            { en: "Turn one complicated thing into many simple things.", zh: "把一個複雜問題拆成很多簡單問題。" },
            { en: "Build the puzzle, then solve the puzzle.", zh: "先把 puzzle 拼好，再解它。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Strategy philosophy" titleZh="策略哲學" mode={mode}><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          { en: "¼ showing up", zh: "四分之一是到場並投入" },
          { en: "¼ knowing what questions to ask", zh: "四分之一是知道要問甚麼問題" },
          { en: "¼ not stopping until the questions are answered", zh: "四分之一是不停下來，直到問題被真正回答" },
          { en: "¼ making strategy work in the organization", zh: "四分之一是讓策略在組織內真的運作" },
        ].map((item) => <div key={item.en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={item.en} zh={item.zh} /></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function EconomicsSection({ mode }) {
  const econRows = [
    { driver: { en: "Scale economies", zh: "規模經濟" }, question: { en: "Does average cost fall as output rises?", zh: "產量增加時平均成本是否下降？" }, implication: { en: "Pushes structure toward fewer players, often oligopoly or monopoly.", zh: "結構傾向較少玩家，常推向 oligopoly 或 monopoly。" } },
    { driver: { en: "Scope economies", zh: "範疇經濟" }, question: { en: "Do related businesses lower total cost or improve quality together?", zh: "相近業務一起做是否能降總成本或提升品質？" }, implication: { en: "Supports integrated or diversified structures when links are real.", zh: "若連結真實存在，支持整合或多角化結構。" } },
    { driver: { en: "Learning economies", zh: "學習經濟" }, question: { en: "Do cost or quality improve with cumulative experience?", zh: "累積經驗是否能改善成本或品質？" }, implication: { en: "Early movers can create durable cost advantage and deter entry.", zh: "先行者可能建立持久成本優勢並阻擋進入。" } },
    { driver: { en: "Network economies", zh: "網路經濟" }, question: { en: "Does user value rise with installed base?", zh: "使用者價值是否隨 installed base 擴大？" }, implication: { en: "Can create self-reinforcing outcomes and winner-take-most logic.", zh: "可能形成自我強化與 winner-take-most 邏輯。" } },
    { driver: { en: "Nexus economies", zh: "樞紐經濟" }, question: { en: "Is there a must-pass control point?", zh: "是否存在必經關鍵節點？" }, implication: { en: "The controller approaches quasi-monopoly; others risk commoditization.", zh: "控制者接近 quasi-monopoly，其他人則容易 commodity 化。" } },
    { driver: { en: "Standards", zh: "標準" }, question: { en: "Who controls key technical or interface standards?", zh: "誰掌握技術或介面標準？" }, implication: { en: "Standards holders can shape market architecture and appropriability.", zh: "掌握標準者可改寫市場架構與 appropriability。" } },
    { driver: { en: "Fixed / sunk / variable cost", zh: "固定 / 沉沒 / 變動成本" }, question: { en: "What cost mix governs behavior and exit?", zh: "甚麼成本組合主導行為與退出？" }, implication: { en: "This often determines price pressure, exit barriers, and profit violence.", zh: "這常直接決定削價壓力、退出障礙與獲利劇烈程度。" } },
  ];
  const profitRows = [
    { industry: { en: "Water meters", zh: "水表" }, rank: 1, logic: { en: "Buyer, specifier, and payer are split; cost share is trivial but under-measurement risk is material.", zh: "規格制定者、採購者與付款者分離；成本占比小，但低估計量風險很大。" } },
    { industry: { en: "Pharmaceuticals", zh: "製藥" }, rank: 2, logic: { en: "Historically helped by IP, health urgency, and buying processes.", zh: "歷史上常受惠於智慧財產、健康急迫性與購買流程。" } },
    { industry: { en: "Automobiles", zh: "汽車" }, rank: 3, logic: { en: "Capital intensive, differentiated, but still highly competitive.", zh: "資本密集，具有差異化，但競爭依然激烈。" } },
    { industry: { en: "Semiconductors", zh: "半導體" }, rank: 4, logic: { en: "Strong economics but sharp cyclicality and segment differences.", zh: "底層經濟很強，但景氣循環與細分差異很大。" } },
    { industry: { en: "Personal computers", zh: "個人電腦" }, rank: 5, logic: { en: "Price pressure and limited defensibility in many segments.", zh: "多數區段價格壓力大，可防禦性有限。" } },
    { industry: { en: "Airlines", zh: "航空" }, rank: 6, logic: { en: "Low differentiation plus high fixed and sunk cost make exit hard and competition brutal.", zh: "低差異化加上高固定與沉沒成本，使退出困難、競爭殘酷。" } },
  ];
  return (
    <SectionShell id="economics" mode={mode} titleEn="Underlying economics" titleZh="Underlying economics" kickerEn="Start here" kickerZh="先從這裡開始" refs={["Last Day", "Chapter 4", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Why this section comes first" titleZh="為甚麼一定先看這裡" mode={mode} tone="teal"><BiText mode={mode} block en="The exam logic is explicit: before strategy language, understand how the business makes money. Underlying economics shape industry structure, which shapes competition, which shapes profit potential, which then gets modified by the focal firm's SPARK, bargaining position, leadership, and execution." zh="考試邏輯很清楚：在進入 strategy language 前，先看這個 business 怎麼賺錢。Underlying economics 先決定 industry structure，再決定 competition，再決定 profit potential，最後才由 focal firm 的 SPARK、議價位置、領導與執行能力做修正。" /></InfoCard>
        <EconomicsCascade mode={mode} />
        <SimpleTable mode={mode} columns={[{ key: "driver", en: "Dimension", zh: "維度" }, { key: "question", en: "Core question", zh: "核心問題" }, { key: "implication", en: "Structural implication", zh: "結構含意" }]} rows={econRows} />
        <div className="grid gap-4 xl:grid-cols-2">
          <InfoCard titleEn="Three cost types and what they do" titleZh="三種成本，以及它們如何影響競爭" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Variable cost moves with output. If price stays above variable cost, selling more can still make sense in the short run.", zh: "變動成本會隨產量改變。只要價格高於變動成本，短期內多賣通常仍有誘因。" },
            { en: "Fixed cost is fixed in the short run but avoidable in the long run. It drives break-even pressure and scale logic.", zh: "固定成本短期固定、長期可避免。它主導 break-even 壓力與規模邏輯。" },
            { en: "Sunk cost is unrecoverable. It should not drive future logic, but it creates exit barriers in the real world.", zh: "沉沒成本無法回收。理論上不該主導未來決策，但在真實世界會形成退出障礙。" },
            { en: "High fixed plus low variable cost often invites price cuts. High sunk cost traps players. Low fixed plus high variable cost tends toward perfect-competition logic.", zh: "高固定加低變動成本常引出削價。高沉沒成本會困住玩家。低固定加高變動成本則更接近 perfect competition 邏輯。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Six fast industry-economics questions" titleZh="六個快速經濟結構問題" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "What does the industry actually do in form, function, and direct competition terms?", zh: "這個 industry 在 form、function、direct competition 上到底做甚麼？" },
            { en: "What is the cost structure: capital, labor, knowledge, marketing, and fixed / sunk / variable mix?", zh: "成本結構是甚麼：capital、labor、knowledge、marketing 以及 fixed / sunk / variable 比例？" },
            { en: "Where do scale, scope, and learning hold?", zh: "Scale、scope、learning 這些經濟在哪裡成立？" },
            { en: "Do network, nexus, standards, or installed-base effects exist?", zh: "是否存在 network、nexus、standards 或 installed-base effects？" },
            { en: "What type of competition does this push the industry toward?", zh: "這會把產業推向哪種 competition type？" },
            { en: "Where is value captured, and by whom?", zh: "價值最後在哪裡被 capture，又是被誰 capture？" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Profitability ranking visual" titleZh="獲利結構排序圖" mode={mode}><div className="space-y-3">{profitRows.map((row) => <div key={row.industry.en} className="grid gap-2 md:grid-cols-[140px_1fr_2fr] md:items-center"><div className="text-sm font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={row.industry.en} zh={row.industry.zh} /></div><div className="flex items-center gap-3"><div className="h-3 flex-1 overflow-hidden rounded-full" style={{ background: "#E7DDCC" }}><div className="h-full rounded-full" style={{ width: `${((7 - row.rank) / 6) * 100}%`, background: theme.teal }} /></div><div className="w-6 text-sm font-semibold" style={{ color: theme.teal }}>{row.rank}</div></div><div className="text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={row.logic.en} zh={row.logic.zh} /></div></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function IndustrySection({ mode }) {
  const compTypeRows = [
    { type: { en: "Monopoly", zh: "Monopoly" }, feature: { en: "Single supplier. Most favorable unless constrained by regulation or politics.", zh: "單一供應者。若未被管制或政治限制，通常最有利。" } },
    { type: { en: "Oligopoly", zh: "Oligopoly" }, feature: { en: "A limited number of firms competing with interdependence.", zh: "少數幾家互相依賴地競爭。" } },
    { type: { en: "Hypercompetition", zh: "Hypercompetition" }, feature: { en: "Several firms plus plausible related-industry entrants; advantages are short-lived.", zh: "多家廠商加上來自相關產業的潛在進入者；優勢壽命較短。" } },
    { type: { en: "Perfect competition", zh: "Perfect competition" }, feature: { en: "Many firms, weak differentiation, heavy price competition.", zh: "眾多玩家、差異化弱、價格競爭重。" } },
    { type: { en: "Subsidized competition", zh: "Subsidized competition" }, feature: { en: "Loss-making firms are kept alive, so price pressure persists.", zh: "虧損公司仍被維持存活，價格壓力持續。" } },
  ];
  const leadRows = [
    { lead: { en: "Standard setter", zh: "標準制定者" }, example: { en: "IBM System 360, IBM PC", zh: "IBM System 360、IBM PC" } },
    { lead: { en: "Statesman", zh: "產業長者" }, example: { en: "HSBC in Hong Kong banking", zh: "香港銀行業中的 HSBC" } },
    { lead: { en: "Enforcer", zh: "規則執行者" }, example: { en: "Saudi Aramco in OPEC context", zh: "OPEC 脈絡中的 Saudi Aramco" } },
    { lead: { en: "Predator", zh: "掠食者" }, example: { en: "Microsoft in the browser wars", zh: "瀏覽器戰爭中的 Microsoft" } },
    { lead: { en: "Frame-breaker", zh: "框架打破者" }, example: { en: "Dell, Southwest Airlines", zh: "Dell、Southwest Airlines" } },
    { lead: { en: "Outlier", zh: "異類" }, example: { en: "Ben & Jerry's, Body Shop", zh: "Ben & Jerry's、Body Shop" } },
  ];
  return (
    <SectionShell id="industry" mode={mode} titleEn="Industry level" titleZh="產業層次" kickerEn="Micro drivers" kickerZh="微觀驅動" refs={["Chapter 4", "Lecture Notes Ch.4", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Industry definition" titleZh="產業定義" mode={mode} tone="teal"><BiText mode={mode} block en='An industry consists of products or services with similar form and function that are in direct competition with each other, and the firms that supply them. This is a strategic definition, not a statistical one. Boundaries can merge or fragment over time.' zh='產業是指具有相似 form 與 function、彼此直接競爭的產品或服務，以及提供它們的 firms。這是策略性定義，不是統計分類。邊界會隨時間整合或分裂。' /></InfoCard>
        <IndustryBoundaryMethod mode={mode} />
        <IndustryVisualizationSuite mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <InfoCard titleEn="Competition type spectrum" titleZh="競爭型態光譜" mode={mode} tone="gold">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em]" style={{ color: theme.subInk }}><span>Low profitability</span><span>→</span><span>High profitability</span></div>
            <div className="flex flex-wrap items-center gap-2">{["Subsidized", "Perfect", "Hyper", "Oligopoly", "Monopoly"].map((item, idx) => <React.Fragment key={item}><span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: idx >= 3 ? "#EDF4F6" : "#FBF1ED", color: idx >= 3 ? theme.teal : theme.danger }}>{item}</span>{idx < 4 ? <span style={{ color: theme.gold }}>→</span> : null}</React.Fragment>)}</div>
            <div className="mt-4"><SimpleTable mode={mode} size="compact" columns={[{ key: "type", en: "Type", zh: "類型" }, { key: "feature", en: "What it means", zh: "核心特徵" }]} rows={compTypeRows} /></div>
          </InfoCard>
          <InfoCard titleEn="Three dimensions of competition" titleZh="競爭三維分析" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Type: where the industry sits on the five-type spectrum.", zh: "Type：產業落在五種競爭型態中的哪一種。" },
            { en: "Competitive variables: price, quality / performance, brand, service, speed, access, and ecosystem / platform.", zh: "Competitive variables：price、quality / performance、brand、service、speed、access、ecosystem / platform。" },
            { en: "Ferocity: the nine drivers tell you how violent competition is likely to become.", zh: "Ferocity：九個驅動因素決定競爭有多激烈。" },
            { en: "Key insight: even within oligopoly, profit depends on where firms compete. Hong Kong property competed on location and features; Hong Kong mobile telecom often competed on price because of overcapacity.", zh: "關鍵洞察：即便同是 oligopoly，真正影響 profit 的是在哪個 variable 上競爭。香港地產靠位置與產品特徵獲利，香港行動電信則常因過剩產能而走向價格競爭。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Ferocity checklist" titleZh="競爭激烈度九宮格" mode={mode}><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{[["Low concentration", "Industry concentration 低"],["Low collusion possibility", "Collusion 可能性低"],["Low or negative growth", "Industry growth 低或負"],["High homogeneity", "Product homogeneity 高"],["Low differentiation", "Differentiation 低"],["Low capacity utilization", "Capacity utilization 低"],["High corporate stakes", "Corporate stakes 高"],["High exit barriers", "Exit barriers 高"],["Low entry barriers", "Entry barriers 低"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div></InfoCard>
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Lead firm logic" titleZh="Lead firm 邏輯" mode={mode} tone="teal"><SimpleTable mode={mode} size="compact" columns={[{ key: "lead", en: "Lead firm type", zh: "類型" }, { key: "example", en: "Illustration", zh: "例子" }]} rows={leadRows} /><div className="mt-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="High-scoring Nokia insight: Nokia once functioned as a standard setter because Nordic standards became European and then global. Apple later redefined the standard around the software platform, turning Apple into the frame-breaker and hollowing out Nokia’s earlier advantage." zh="Nokia 的高分洞察：早期的 Nokia 因北歐標準進入歐洲再成為世界標準，而扮演了 standard setter。Apple 後來把標準改寫成 software platform，於是 Apple 成了 frame-breaker，Nokia 的舊優勢立刻被掏空。" /></div></InfoCard>
          <InfoCard titleEn="Competitor Envelope Analysis™" titleZh="Competitor Envelope Analysis™" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "What if competitors optimize activities?", zh: "如果 competitors 把 activities 優化到最好會怎樣？" },
            { en: "What if they fully leverage resources and knowledge?", zh: "如果他們把 resources 與 knowledge 發揮到極致會怎樣？" },
            { en: "What if they overcome strategic shortcomings?", zh: "如果他們補上自己的短板會怎樣？" },
            { en: "What if they add new resources or knowledge?", zh: "如果他們新增 resources 或 knowledge 會怎樣？" },
            { en: "What if they are acquired by savvy, deep-pocketed firms?", zh: "如果他們被更聰明且資金更深的公司接手會怎樣？" },
            { en: "What would we do if we managed them?", zh: "如果我們來管理 competitors，會怎麼做？" },
            { en: "How tough could they become if they are smart?", zh: "如果 competitors 夠聰明，未來可能變多難纏？" },
          ]} /><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Do not stop with current rivals. Add related-industry entrants and unmet demand segments. Many of the biggest threats come from those two directions." zh="不要只停在今天的對手。還要加進來自 related industries 的新進者，以及尚未被滿足的 demand segments。很多最大威脅都來自這兩邊。" /></div></InfoCard>
        </div>
        <InfoCard titleEn="Coopetition" titleZh="Coopetition" mode={mode}><BiText mode={mode} block en="Coopetition means the same set of players can cooperate in one activity and compete in another. In an exam answer, split the relationship at the activity level rather than declaring the other side simply friend or foe." zh="Coopetition 的意思是，同一組 players 可能在某個活動合作，在另一個活動競爭。考試作答時，要在 activity level 上拆解，而不是把對方單純貼成 partner 或 competitor。" /></InfoCard>
      </div>
    </SectionShell>
  );
}

function FirmSection({ mode }) {
  return (
    <SectionShell id="firm" mode={mode} titleEn="Firm level" titleZh="公司層次" kickerEn="SPARK and beyond" kickerZh="SPARK 與其延伸" refs={["Chapter 3", "Practice Questions", "Master Review"]}>
      <div className="space-y-5">
        <div className="grid min-w-0 gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <InfoCard titleEn="Performance is relative" titleZh="Performance 永遠是相對概念" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2">{[["Competitors", "Competitors"],["Benchmarks", "Benchmarks"],["History", "History"],["Expectations", "Expectations"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.ink }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div><div className="mt-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en="Any claim that a firm is performing well or poorly should identify the comparator first. Saying 'performance is weak' without naming the reference point is mechanically unsafe." zh="任何 'firm performs well / poorly' 的句子，都要先說 relative to whom。若沒先交代 comparator，作答在機械上就不安全。" /></div></InfoCard>
          <InfoCard titleEn="SPARK" titleZh="SPARK" mode={mode} tone="plum"><div className="grid gap-3 md:grid-cols-5">{[["Scope","Where we compete","Scope","在哪裡競爭"],["Positioning","How we compete","Positioning","如何競爭"],["Activities","What we do","Activities","做甚麼"],["Resources","What we use","Resources","用甚麼"],["Knowledge","What we know","Knowledge","知道甚麼"]].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
        </div>
        <SparkArchitecture mode={mode} />
        <FirmArchitectureBoard mode={mode} />
        <InfoCard titleEn="Do not stop at SPARK" titleZh="不能只停在 SPARK" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{[
          ["SPARK","SPARK","Where, how, what, with what, and with what knowledge.","在哪裡、如何、做甚麼、用甚麼、靠甚麼知識。"],["Leadership","Leadership","Direction, motivation, ethics, standards, external face.","方向、動機、倫理、標準、對外面貌。"],["Execution","Execution","Knowing what to do and getting it done despite inertia.","知道要做甚麼，並且能對抗 inertia 把事做成。"],["Organization & management","Organization & Management","Division of labor, structures, systems, HR, capabilities.","分工、結構、系統、人力、組織能力。"],["Governance","Governance","Governance standards, compliance cost, decision impact.","治理標準、合規成本、對決策的影響。"],["Firm-specific policies & institutions","Firm-Specific Policies & Institutions","Subsidies, support, dedicated training bodies, special institutions.","補貼、支持、專屬訓練體系、特殊制度安排。"],
        ].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><BiText mode={mode} en={en2} zh={zh2} /></div>)}</div></InfoCard>
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Scope logic" titleZh="Scope 邏輯" mode={mode}><BulletList mode={mode} items={[
            { en: "Corporate / industry scope: how many industries the company competes in.", zh: "Corporate / industry scope：公司參與多少個產業。" },
            { en: "Within-industry scope: which segments inside the industry the company serves.", zh: "Within-industry scope：在同一產業內服務哪些 segments。" },
            { en: "Geographic scope: which geographic markets the firm serves.", zh: "Geographic scope：公司服務哪些地理市場。" },
            { en: "There is no universally correct scope. The test is internal consistency and fit with opportunity.", zh: "沒有普遍正確的 scope。真正的檢驗標準是內部一致性與市場機會匹配。" },
            { en: "Classic contrast: Swatch broadlines from Flik Flak to Breguet, while Rolex focuses on the upper segments.", zh: "經典對比：Swatch 從 Flik Flak 到 Breguet 橫跨多個 segment，而 Rolex 集中在高端區段。" },
          ]} /></InfoCard>
          <InfoCard titleEn="The three dysfunction formulas" titleZh="三個 dysfunction 公式" mode={mode} tone="danger"><SimpleTable mode={mode} size="compact" columns={[{ key: "missing", en: "What is missing", zh: "缺了甚麼" },{ key: "result", en: "Result", zh: "結果" }]} rows={[
            { missing: { en: "Action is missing from analysis + leadership", zh: "Analysis + Leadership 少了 Action" }, result: { en: "Paralysis", zh: "Paralysis" } },
            { missing: { en: "Analysis is missing from action + leadership", zh: "Action + Leadership 少了 Analysis" }, result: { en: "Random or misdirected", zh: "Random / Misdirected" } },
            { missing: { en: "Leadership is missing from analysis + action", zh: "Analysis + Action 少了 Leadership" }, result: { en: "Scattered and confused", zh: "Scattered and Confused" } },
          ]} /></InfoCard>
        </div>
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Leadership is a double-edged sword" titleZh="Leadership 是雙面刃" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Leadership can create firms, categories, and strategic direction.", zh: "Leadership 能建立公司、品類與策略方向。" },
            { en: "But leadership can also lock in a mental model that becomes vulnerability later.", zh: "但 leadership 也可能把公司鎖進一個之後變成弱點的 mental model。" },
            { en: "High-scoring NEC logic: analyze Kobayashi through Enright’s firm framework, not by defaulting to Prahalad and Hamel’s core competence framing.", zh: "NEC 的高分寫法：用 Enright 的 firm framework 分析 Kobayashi，而不是直接套 Prahalad-Hamel 的 core competence framing。" },
          ]} /></InfoCard>
          <InfoCard titleEn="VRIO applied to A, R, and K" titleZh="VRIO 要套在 A、R、K" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "VRIO is not only for resources. It can be applied to activities, resources, and knowledge.", zh: "VRIO 不只套 resources，也可以套 activities、resources、knowledge。" },
            { en: "Home Alone: the first movie did not yet prove value; the second proved value and scarcity; bargaining then shifted to Culkin; the third showed the studio was not organized to appropriate the value.", zh: "Home Alone：第一部還沒證明 value；第二部證明了 value 與稀缺性；接著 bargaining power 轉向 Culkin；第三部則顯示 studio 並沒有組織好去 appropriation 那份價值。" },
            { en: "Natalie Portman’s three-picture deal was an appropriability move: lock the resource before success rewrites the bargaining table.", zh: "Natalie Portman 的三部片合約，是 appropriation 管理：在成功改寫 bargaining table 之前先把資源鎖住。" },
            { en: "John Carter and The Lone Ranger remind you that valuable, rare, and hard-to-imitate ingredients can still fail when organization and overall fit are wrong.", zh: "John Carter 與 The Lone Ranger 提醒你：就算有 valuable、rare、hard-to-imitate 的要素，只要 organization 與整體配適錯誤，仍然會失敗。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Time dimension" titleZh="時間維度" mode={mode}><BulletList mode={mode} items={[
          { en: "Commitment strategy: large commitments when the environment rewards durability.", zh: "Commitment strategy：當環境獎勵持久性時，做大規模承諾。" },
          { en: "Hustle strategy: small, fast moves when temporary advantage matters more.", zh: "Hustle strategy：當短期優勢更重要時，用小而快的移動。" },
          { en: "Real options strategy: preserve flexibility in deep uncertainty.", zh: "Real options strategy：在高度不確定時保留彈性。" },
          { en: "This is Tier 1 material, but lower on final-exam priority than economics, CEA, international, corporate, and implementation.", zh: "這是 Tier 1 內容，但在 final exam 的優先度低於 economics、CEA、international、corporate、implementation。" },
        ]} /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MesoSection({ mode }) {
  return (
    <SectionShell id="meso" mode={mode} titleEn="Cluster / meso level" titleZh="Cluster / Meso Level" kickerEn="Business ecosystems" kickerZh="商業生態與群聚" refs={["Chapter 5", "Lecture Notes Ch.5", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight building blocks" titleZh="八個核心組成" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          ["Demand","Demand","Size, growth, segment structure, bundling, complementarities.","規模、成長、segment 結構、bundling、complementarities。"],["Customers","Customers","Identity, access, bargaining power, price sensitivity, competition potential.","身分、接觸、議價、價格敏感度、與我們競爭的可能性。"],["Inputs","Inputs","Factor, human, ecological, produced, technological, infrastructure inputs.","要素、人力、生態、製成、技術、基礎設施投入。"],["Suppliers","Suppliers","Number, identity, access, bargaining, price sensitivity, collaboration potential.","數量、身分、接觸、議價、價格敏感度、合作可能性。"],["Shared resources / activities","Shared Resources / Activities","Shared technologies, channels, customers, knowledge, scope economies.","共享技術、通路、客戶、知識與 scope economies。"],["Complementarities","Complementarities","Other industries or products that raise demand and willingness to pay.","能提升 demand 與 willingness to pay 的互補關係。"],["Substitutes","Substitutes","Indirect replacements that cap profit potential.","會壓制利潤上限的替代選項。"],["Meso policies / institutions","Meso Policies / Institutions","Cluster-specific policies and supporting institutions.","針對 cluster 的政策與支援制度。"],
        ].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
        <MesoEcosystemBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Bargaining power is a three-axis diagnosis" titleZh="議價力是三軸診斷" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Intrinsic bargaining strength: concentration, substitutes, switching costs, pull-through, vertical integration threat.", zh: "Intrinsic bargaining strength：集中度、替代品、switching costs、pull-through、垂直整合威脅。" },
            { en: "Price sensitivity: cost share, strategy, profitability, and quality impact.", zh: "Price sensitivity：成本占比、策略、獲利狀況與品質影響。" },
            { en: "Willingness to use power: even strong players do not always press as hard as they could.", zh: "Willingness to use power：就算很強，實際上也不一定會用到極致。" },
            { en: "Real bargaining outcome depends on the interaction of all three axes, not just abstract strength.", zh: "真實 bargaining outcome 取決於三軸交互，而不是只看表面 strength。" },
          ]} /></InfoCard>
          <InfoCard titleEn="Regional clusters and why they persist" titleZh="區域群聚以及為何它們難以被撼動" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Typical examples include Silicon Valley, Hollywood, London / New York finance, Swiss luxury watches, Bangalore, and Hsinchu.", zh: "常見例子包括 Silicon Valley、Hollywood、倫敦 / 紐約金融、瑞士奢華腕錶、Bangalore、Hsinchu。" },
            { en: "Clusters can arise from natural resources, market proximity, labor pooling, specialized input suppliers, shared infrastructure, reduced transaction cost, and knowledge spillovers.", zh: "群聚可以源自自然資源、市場接近性、勞動力池、專業投入供應商、共享基礎設施、較低交易成本與知識外溢。" },
            { en: "Once self-sustaining, they become hard to dislodge.", zh: "一旦形成自我維持，往往就很難被移除。" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Ecosystem warning" titleZh="生態系警告" mode={mode} tone="danger"><BiText mode={mode} block en="Externalization is not automatically good. One company’s asset-light strategy usually depends on another company carrying the asset-heavy burden. If you cannot identify where value is created, where it is appropriated, and where it is defended, you may be giving the value away." zh="Externalization 並不會自動是好事。一家公司的 asset-light 策略，通常建立在另一家公司承擔 asset-heavy burden 的基礎上。若你說不清 value 在哪裡被創造、在哪裡被 appropriated、又在哪裡被 defended，你很可能正在把價值送出去。" /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MacroSection({ mode }) {
  return (
    <SectionShell id="macro" mode={mode} titleEn="National / macro level" titleZh="National / Macro Level" kickerEn="Country conditions" kickerZh="國家條件" refs={["Chapter 6", "P&G in China", "Master Review"]}>
      <div className="space-y-5">
        <div className="grid gap-4 xl:grid-cols-4">{[
          ["Macroeconomic conditions","Macroeconomic Conditions","Aggregate demand, inflation, interest rates, exchange rates, unemployment, fiscal balances, capital markets, savings rates. Check level, growth, and volatility.","總體需求、通膨、利率、匯率、失業、財政平衡、資本市場、儲蓄率。要同時看 level、growth、volatility。"],["Macro government policies","Macro Government Policies","Monetary, fiscal, trade, investment, industrial, promotion, infrastructure, manpower, education, and science policies.","貨幣、財政、貿易、投資、產業、推廣、基礎建設、人力、教育與科技政策。"],["Macro institutions","Macro Institutions","Legal system, regulation, property rights, contract enforcement, and government quality.","法制、監管、產權、契約執行與政府品質。"],["Civil society and culture","Civil Society & Culture","Agendas, social acceptability, attitudes, structure, cohesion, cultural patterns.","議題取向、社會可接受性、態度、社會結構、凝聚力與文化模式。"],
        ].map(([en1, zh1, en2, zh2]) => <InfoCard key={en1} titleEn={en1} titleZh={zh1} mode={mode} tone="teal"><BiText mode={mode} block en={en2} zh={zh2} /></InfoCard>)}</div>
        <MacroDiagnosticBoard mode={mode} />
        <InfoCard titleEn="Income distribution matters more than headline averages suggest" titleZh="Income distribution 比平均數更重要" mode={mode} tone="gold"><BulletList mode={mode} items={[
          { en: "Large-population countries can sustain premium and luxury demand even at modest average income levels because the upper-income groups are large in absolute terms.", zh: "大型人口國家即使平均收入不高，也可能支撐 premium 與 luxury 需求，因為高所得族群的絕對數量很大。" },
          { en: "Bottom of the Pyramid logic matters: profitable models may require simpler products, smaller pack sizes, and informal channels.", zh: "Bottom of the Pyramid 的邏輯很重要：可獲利模式可能需要更簡單的產品、更小包裝與更非正式的渠道。" },
          { en: "P&G in China is the signature national-level case because macro conditions, income distribution, consumer change, and channel evolution all mattered simultaneously.", zh: "P&G in China 是代表性的 national-level case，因為總體條件、所得分布、消費者變化與通路演變同時作用。" },
        ]} /></InfoCard>
        <InfoCard titleEn="Exam framing" titleZh="考試 framing" mode={mode} tone="plum"><BiText mode={mode} block en='The macro-level question is not "Is this a good business in the abstract?" The better question is: "Is this a good business in this country, under this policy mix, with this institutional quality, this demography, and this social setting?"' zh='Macro-level 真正要問的，不是「抽象來看這是不是好 business」，而是「在這個國家、這套政策、這種制度品質、這個人口結構與社會條件下，這是不是好 business？」' /></InfoCard>
      </div>
    </SectionShell>
  );
}

function MetaSection({ mode }) {
  return (
    <SectionShell id="meta" mode={mode} titleEn="Supranational / meta level" titleZh="Supranational / Meta Level" kickerEn="Beyond the nation" kickerZh="超出國界" refs={["Chapter 1", "Chapter 7", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight supranational drivers" titleZh="八個超國家驅動因素" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[["International geopolitics","International Geo-politics"],["International economic conditions","International Economic Conditions"],["Global technology trends","Global Technology Trends"],["Social and environmental issues","Social and Environmental Issues"],["Multilateral organizations","Multilateral Organizations"],["Supranational policies and trade blocs","Supranational Policies & Trade Blocs"],["Foreign governments","Foreign Governments"],["Foreign multinationals and other supranational groups","Foreign Multinationals & Other Supranational Groups"]].map(([en, zh]) => <div key={en} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><BiText mode={mode} en={en} zh={zh} /></div>)}</div></InfoCard>
        <MetaPressureBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn='The "Inverted T" view of the world' titleZh='「倒 T 型」世界觀' mode={mode} tone="gold"><BiText mode={mode} block en="The world is not flat in the way popular writing sometimes implies. The creation of ideas remains highly concentrated in specific people, firms, and places, while execution resources are more widely distributed. The key strategic question is who becomes the flattener and who gets flattened into competing only on execution." zh="世界並不像某些流行說法那樣 flat。創造 ideas 的能力仍高度集中在特定的人、公司與地點；但執行資源則相對分散。關鍵策略問題是：誰會成為 flattener，誰又會被壓成只能在 execution 上競爭的 flattenee。" /></InfoCard>
          <InfoCard titleEn="Why this matters so much for the final" titleZh="為甚麼它對期末特別重要" mode={mode} tone="plum"><BiText mode={mode} block en="Supranational drivers do not merely change profit levels. They can rewrite who is allowed to enter, under what rules, with which technologies, and with what geopolitical constraints. That is why they matter disproportionately in international and corporate strategy questions." zh="Supranational drivers 不只是改變 profit 高低。它們甚至會直接改寫誰能進場、以甚麼規則進場、用甚麼技術進場，以及面對甚麼 geopolitical constraints。這也是它在 international 與 corporate strategy 題目中特別重要的原因。" /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function InternationalSection({ mode }) {
  const rows = [
    { q: { en: "How many countries?", zh: "有多少國家？" } }, { q: { en: "Which countries?", zh: "是哪一些國家？" } }, { q: { en: "How do the five levels differ from the home country?", zh: "五個層次相對母國有何不同？" } }, { q: { en: "What SPARK is needed in each country?", zh: "每個國家要有甚麼 SPARK？" } }, { q: { en: "How should SPARK be matched to country conditions?", zh: "如何把 SPARK 對上各國條件？" } }, { q: { en: "How should the international company be organized?", zh: "國際公司要如何組織？" } }, { q: { en: "Are the countries similar or meaningfully different?", zh: "這些國家彼此相似，還是有本質差異？" } }, { q: { en: "Is the international company more than the sum of the parts?", zh: "這家國際企業有沒有大於 parts 的總和？" } },
  ];
  return (
    <SectionShell id="international" mode={mode} titleEn="International strategy" titleZh="國際策略" kickerEn="High-weight playbook" kickerZh="高權重作答藍圖" refs={["Last Day", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Eight-question blueprint" titleZh="八問藍圖" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{rows.map((row, idx) => <div key={idx} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0", color: theme.subInk }}><div className="mb-1 text-[11px] uppercase tracking-[0.16em]" style={{ color: theme.plum }}>{String(idx + 1).padStart(2, "0")}</div><BiText mode={mode} en={row.q.en} zh={row.q.zh} /></div>)}</div></InfoCard>
        <InternationalArchitectureBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Global / local split" titleZh="Global / Local 切法" mode={mode} tone="gold"><SimpleTable mode={mode} size="compact" columns={[{ key: "bucket", en: "Bucket", zh: "類別" }, { key: "global", en: "What to globalize", zh: "應 globalize 的部分" }, { key: "local", en: "What to localize", zh: "應 localize 的部分" }]} rows={[
            { bucket: { en: "Financial / compliance", zh: "Financial / Compliance" }, global: { en: "Envelope, standards, control architecture", zh: "整體框架、標準、控制結構" }, local: { en: "Local legal expertise only", zh: "只保留必要的 local legal expertise" } },
            { bucket: { en: "Market-facing", zh: "Market-facing" }, global: { en: "Only broad brand consistency", zh: "只保留品牌一致性的大框架" }, local: { en: "Account management, BD, marketing, sales", zh: "Account management、BD、marketing、sales" } },
            { bucket: { en: "Production", zh: "Production" }, global: { en: "Depends on scale economies", zh: "取決於 scale economies" }, local: { en: "Often logistics and customization require local presence", zh: "物流與客製化常要求在地化" } },
          ]} /><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en='In an answer, present this as a reasoned split implied by the reading, not as a slogan.' zh='考場上不要把它講成口號，而要表述成 reading 所暗示出的合理切法。' /></div></InfoCard>
          <InfoCard titleEn="Case transfer" titleZh="案例轉移應用" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "WPP’s failure: localizing financial controls and compliance to founder-led units in high-risk markets made bribery highly likely.", zh: "WPP 的錯誤：把 financial controls 與 compliance 也下放給高風險市場中的 founder-led units，幾乎等於把 bribery 風險制度化。" },
            { en: "Corrective logic: keep compliance global, require multi-layer approval for cross-border payments, and use independent audit and whistleblower systems.", zh: "正確修正：compliance 要維持 global，跨境付款要多層審批，並搭配獨立審計與 whistleblower 機制。" },
            { en: "RTZ / Chinalco complexity: a country can simultaneously be customer, shareholder, partner, regulator, and geopolitical force. One-size-fits-all international strategy fails under that condition.", zh: "RTZ / Chinalco 的複雜性：同一個國家可能同時是 customer、shareholder、partner、regulator 與 geopolitical force。這種情況下，一套國際策略打天下一定失敗。" },
          ]} /></InfoCard>
        </div>
      </div>
    </SectionShell>
  );
}

function CorporateSection({ mode }) {
  return (
    <SectionShell id="corporate" mode={mode} titleEn="Corporate strategy" titleZh="企業總體策略" kickerEn="High-weight playbook" kickerZh="高權重作答藍圖" refs={["Last Day", "Chapter 3", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="First test" titleZh="第一個問題" mode={mode} tone="teal"><BiText mode={mode} block en="Is the company more than the sum of its parts? If the answer is no, investors can diversify on their own and the corporate structure may be destroying value rather than creating it." zh="第一個問題是：這家公司有沒有大於 parts 的總和？如果答案是否定的，投資人可以自己分散投資，這種 corporate structure 反而可能正在毀掉價值。" /></InfoCard>
        <CorporateMechanismBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Eight-question blueprint" titleZh="八問藍圖" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "How many industries?", zh: "有幾個 industries？" }, { en: "Which industries?", zh: "是哪一些 industries？" }, { en: "How do the five levels differ from the firm’s existing businesses?", zh: "新舊 business 在五個層次上有何差異？" }, { en: "What SPARK is needed in each business?", zh: "每個 business 需要甚麼 SPARK？" }, { en: "How should SPARK be matched to business conditions?", zh: "如何讓 SPARK 對應 business 條件？" }, { en: "How should the multi-business company be organized?", zh: "這個 multi-business company 要如何組織？" }, { en: "Where is value created: across subsidiaries, or between HQ and subsidiaries?", zh: "價值究竟是在 subsidiaries 之間，還是在 HQ 與 subsidiaries 之間被創造？" }, { en: "Are the businesses related or unrelated?", zh: "這些 businesses 是 related 還是 unrelated？" },
          ]} /></InfoCard>
          <InfoCard titleEn="Six value-creation mechanisms" titleZh="六種 corporate value creation 機制" mode={mode} tone="plum"><SimpleTable mode={mode} size="compact" columns={[{ key: "m", en: "Mechanism", zh: "機制" }, { key: "t", en: "How to test it", zh: "考試檢驗方式" }]} rows={[
            { m: { en: "Scope economies", zh: "Scope economies" }, t: { en: "Can you point to real, quantifiable shared cost or quality gains?", zh: "能否指出真實、可量化的共用成本或品質效益？" } },
            { m: { en: "Shared resources", zh: "Shared resources" }, t: { en: "Is the same brand, platform, or channel reused meaningfully across businesses?", zh: "同一品牌、平台或通路是否真的跨業務被重複使用？" } },
            { m: { en: "Knowledge transfer", zh: "Knowledge transfer" }, t: { en: "Is learning from one business improving another?", zh: "一個 business 的學習，有沒有真的改善另一個 business？" } },
            { m: { en: "Internal capital market", zh: "Internal capital market" }, t: { en: "Is HQ allocating capital better than the external market would?", zh: "HQ 的資本配置是否優於外部市場？" } },
            { m: { en: "Managerial discipline", zh: "Managerial discipline" }, t: { en: "Does HQ actually improve operational discipline after acquisition or integration?", zh: "HQ 在併購或整合後，是否真的提升 operational discipline？" } },
            { m: { en: "Bargaining leverage", zh: "Bargaining leverage" }, t: { en: "Can the corporation negotiate better terms because it aggregates scale or relationships?", zh: "公司是否因整合規模或關係而獲得更強議價力？" } },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Canonical case signals" titleZh="代表案例訊號" mode={mode}><BulletList mode={mode} items={[
          { en: "Walmart: focused retail scope can still create enough scope economies within a narrow domain.", zh: "Walmart：即使 corporate scope 不廣，只要在 retail 內部有足夠 scope economies，仍然成立。" },
          { en: "Mitsubishi: broad historical structure invites a sum-of-parts question.", zh: "Mitsubishi：廣泛的歷史性結構，天然會被問 sum-of-parts 問題。" },
          { en: "Acer / Wistron: when units inside the same corporation undermine each other, breakup can be the value-creating move.", zh: "Acer / Wistron：當同一 corporate structure 內的 business units 互相破壞，分拆反而才是創造價值的動作。" },
          { en: "Disney under Iger: related diversification worked because Pixar, Marvel, Lucasfilm, and Fox all deepened the IP content system.", zh: "Disney 在 Iger 時代：related diversification 成立，是因為 Pixar、Marvel、Lucasfilm、Fox 都在加深 IP content system。" },
          { en: "Newell: classic case of HQ value through managerial discipline.", zh: "Newell：典型的 HQ 透過 managerial discipline 加值。" },
        ]} /></InfoCard>
      </div>
    </SectionShell>
  );
}

function ImplementationSection({ mode }) {
  const stages = [
    { en: "Knowing-Not-Knowing", zh: "Knowing-Not-Knowing", note: { en: "What is the organization not seeing?", zh: "組織到底沒看見甚麼？" } },
    { en: "Knowing-Doing Gap", zh: "Knowing-Doing Gap", note: { en: "Why did behavior not change after knowledge existed?", zh: "明明知道了，為甚麼行為沒有改？" } },
    { en: "Generating Clarity", zh: "Generating Clarity", note: { en: "Was the instruction specific enough to act on?", zh: "訊息是否具體到足以被執行？" } },
    { en: "Overcoming Resistance", zh: "Overcoming Resistance", note: { en: "Where is the resistance really coming from?", zh: "真正的抗拒來自哪裡？" } },
    { en: "Creating the Right Environment", zh: "Creating the Right Environment", note: { en: "What is the environment rewarding or punishing?", zh: "環境究竟在獎勵甚麼、懲罰甚麼？" } },
  ];
  return (
    <SectionShell id="implementation" mode={mode} titleEn="Implementation" titleZh="Implementation" kickerEn="High-weight organizational diagnosis" kickerZh="高權重組織診斷" refs={["Implementation Lecture", "Last Day", "Nokia Reading", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="The five-block implementation system" titleZh="五段 implementation 系統" mode={mode} tone="teal"><StageRibbon mode={mode} items={stages} /></InfoCard>
        <ImplementationDiagnosisBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Knowing-Not-Knowing: seven reasons" titleZh="Knowing-Not-Knowing 的七個原因" mode={mode} tone="gold"><BulletList mode={mode} items={[
            { en: "Problems of framing", zh: "Problems of framing" }, { en: "Incorrect perceptions", zh: "Incorrect perceptions" }, { en: "Issues with reasoning", zh: "Issues with reasoning" }, { en: "Ignoring the obvious", zh: "Ignoring the obvious" }, { en: "Going along with the pack", zh: "Going along with the pack" }, { en: "Believing others have done the homework", zh: "Believing others have done the homework" }, { en: "Willful blindness", zh: "Willful blindness" },
          ]} /></InfoCard>
          <InfoCard titleEn="Resistance and the commitment ladder" titleZh="Resistance 與 commitment ladder" mode={mode} tone="plum"><div className="mb-4"><BulletList mode={mode} items={[
            { en: "Six common resistance sources: fear of the unknown, loss of control, habit, emotional attachments, cognitive dissonance, social influences.", zh: "六種常見 resistance 來源：fear of the unknown、loss of control、habit、emotional attachments、cognitive dissonance、social influences。" },
            { en: "Six practical responses: acknowledge feelings, gather information, take small steps, seek support, understand others, bring people along.", zh: "六種實務回應：acknowledge feelings、gather information、take small steps、seek support、understand others、bring people along。" },
          ]} /></div><div className="flex flex-wrap items-center gap-2">{["I know", "I understand", "I am considering", "I want to", "I will", "I commit"].map((step, idx) => <React.Fragment key={step}><span className="rounded-full border px-3 py-2 text-sm" style={{ borderColor: theme.line, background: idx === 5 ? "#EDF4F6" : "#FBF8F0", color: idx === 5 ? theme.teal : theme.ink }}>{step}</span>{idx < 5 ? <span style={{ color: theme.gold }}>→</span> : null}</React.Fragment>)}</div><div className="mt-3 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en='A memo and a meeting do not equal commitment. "I know" is nowhere near "I commit."' zh='發一封 memo、開一次 meeting，不代表 commitment 已經形成。從 "I know" 到 "I commit" 之間有很長的距離。' /></div></InfoCard>
        </div>
        <InfoCard titleEn="Behavioral anchors and why they matter" titleZh="行為實驗錨點與它們的意義" mode={mode}><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5"><MetricBar mode={mode} titleEn="Handwashing self-report" titleZh="洗手自述" value={73} subEn="Self-report vs observed behavior" subZh="自述與實際行為差距" /><MetricBar mode={mode} titleEn="Handwashing observed" titleZh="洗手觀察值" value={9} tone="danger" /><MetricBar mode={mode} titleEn="Asch conformity" titleZh="Asch 服從率" value={37} tone="gold" /><MetricBar mode={mode} titleEn="Asch with one ally" titleZh="Asch 單一同盟者" value={5} tone="ok" /><MetricBar mode={mode} titleEn="Private written response" titleZh="匿名書面回應" value={12} tone="plum" /></div><div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4"><MetricBar mode={mode} titleEn="Good Samaritan, early" titleZh="好撒瑪利亞人，提早" value={63} /><MetricBar mode={mode} titleEn="Good Samaritan, on time" titleZh="好撒瑪利亞人，準時" value={45} tone="gold" /><MetricBar mode={mode} titleEn="Good Samaritan, late" titleZh="好撒瑪利亞人，遲到" value={10} tone="danger" /><MetricBar mode={mode} titleEn="Telephone-game loss per pass" titleZh="傳話每次損失" value={20} tone="plum" /></div><div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]"><InfoCard titleEn="70 / 30 principle" titleZh="70 / 30 原則" mode={mode} tone="gold"><BiText mode={mode} block en="The managerial mistake is systematic underestimation of the environment. The teaching point is that behavior is explained far more by the situation than managers instinctively assume. If you want behavior change, redesign the environment rather than lecturing personality." zh="管理者最常犯的錯，是系統性低估環境力量。教學重點在於：行為更多是由情境而不是人格決定。若想改變行為，比起說教人格，先改環境。" /></InfoCard><InfoCard titleEn="Kotter’s eight accelerators" titleZh="Kotter 八項加速器" mode={mode} tone="plum"><BulletList mode={mode} items={[
          { en: "Create urgency and commitment", zh: "建立 urgency 與 commitment" }, { en: "Build a guiding coalition", zh: "建立 guiding coalition" }, { en: "Clarify the vision", zh: "把 vision 說清楚" }, { en: "Create a volunteer army", zh: "形成 volunteer army" }, { en: "Remove barriers", zh: "拆掉障礙" }, { en: "Motivate through progress", zh: "用 progress 持續激勵" }, { en: "Sustain and scale", zh: "持續並擴大" }, { en: "Solidify the new normal", zh: "固化成 new normal" },
        ]} /></InfoCard></div></InfoCard>
        <InfoCard titleEn="Nokia as the implementation transfer case" titleZh="Nokia 作為 implementation transfer 標準案例" mode={mode} tone="danger"><SimpleTable mode={mode} size="compact" columns={[{ key: "p", en: "Pathology", zh: "病理" }, { key: "e", en: "Reading signal", zh: "reading 證據" }]} rows={[
          { p: { en: "Knowing-Not-Knowing / willful blindness", zh: "Knowing-Not-Knowing / willful blindness" }, e: { en: "Research and prototype signals existed, but action did not follow.", zh: "研究與 prototype 訊號早已存在，但沒有轉成行動。" } },
          { p: { en: "Knowing-Doing Gap", zh: "Knowing-Doing Gap" }, e: { en: "Symbian problems were understood without corresponding strategic movement.", zh: "Symbian 的問題已被理解，但沒有對應的策略位移。" } },
          { p: { en: "Framing error", zh: "Framing error" }, e: { en: "Leadership kept treating Nokia as a hardware company rather than a software-platform competition problem.", zh: "高層持續把 Nokia 當成 hardware company，而不是 software-platform 競爭問題。" } },
          { p: { en: "Communication failure", zh: "Communication failure" }, e: { en: "Mid-level objections were not formally recorded or escalated.", zh: "中層反對意見沒有被正式記錄或有效上達。" } },
          { p: { en: "Pluralistic silence and fear", zh: "Pluralistic silence 與 fear" }, e: { en: "Managers gave optimistic progress reports despite knowing targets were unrealistic.", zh: "管理者明知時程不合理，仍持續回報樂觀進度。" } },
          { p: { en: "Wrong environment", zh: "Wrong environment" }, e: { en: "Quarterly pressure, consensus norms, and layered approvals punished truth-telling.", zh: "季度壓力、共識文化與多層核准制度都在懲罰真話。" } },
        ]} /><div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]"><InfoCard titleEn="Why Nokia was susceptible" titleZh="為甚麼 Nokia 特別脆弱" mode={mode}><BulletList mode={mode} items={[
          { en: "Success hardening", zh: "先前成功造成硬化" }, { en: "Path dependency from earlier standard-setting success", zh: "早年 standard-setting 成功帶來 path dependency" }, { en: "Hardware-heavy leadership composition", zh: "硬體導向的領導結構" }, { en: "Consensus culture", zh: "共識型文化" }, { en: "Quarterly shareholder pressure", zh: "季度股東壓力" }, { en: "Multi-layer approval systems", zh: "多層核准流程" },
        ]} /></InfoCard><InfoCard titleEn="What firms should do instead" titleZh="企業應如何避免重蹈覆轍" mode={mode}><BulletList mode={mode} items={[
          { en: "Use anonymous written judgment before discussion.", zh: "先做匿名書面判斷，再進入討論。" }, { en: "Run red-team or outside review windows to challenge the dominant view.", zh: "設 red-team 或外部 review window 去推翻主流看法。" }, { en: "Break multi-layer approval barriers for disruptive projects.", zh: "替顛覆型專案拆掉多層核准障礙。" }, { en: "Reward the reporting of risks and blockers, not just progress.", zh: "獎勵風險與障礙的回報，而不是只獎勵 progress。" }, { en: "Preserve institutional knowledge during reorganizations.", zh: "在 reorganization 中保留 institutional knowledge。" }, { en: "Create urgency before the crisis becomes visible to everyone.", zh: "在危機對所有人都變得明顯前，先建立 urgency。" },
        ]} /></InfoCard></div></InfoCard>
      </div>
    </SectionShell>
  );
}

function CasesSection({ mode }) {
  return (
    <SectionShell id="cases" mode={mode} titleEn="Case grid" titleZh="案例總表" kickerEn="Default mappings" kickerZh="預設配對" refs={["Last Day", "Practice Questions", "Case Files", "Master Review"]}>
      <div className="space-y-5">
        <QuickCaseLevelMatrix mode={mode} />
        <SimpleTable mode={mode} columns={[{ key: "case", en: "Case", zh: "案例" }, { key: "level", en: "Default level", zh: "預設層次" }, { key: "thesis", en: "One-sentence thesis", zh: "一句話 thesis" }]} rows={[
          { case: { en: "NEC-GTE", zh: "NEC-GTE" }, level: { en: "Firm (leadership)", zh: "Firm（Leadership）" }, thesis: { en: "Kobayashi’s C&C vision built NEC and later created vulnerability against more focused competitors.", zh: "Kobayashi 的 C&C vision 建立了 NEC，但也讓 NEC 之後暴露在更聚焦對手面前。" } },
          { case: { en: "Airline industry", zh: "Airline Industry" }, level: { en: "Industry", zh: "Industry" }, thesis: { en: "High fixed and sunk cost plus low differentiation create structural low profitability.", zh: "高 fixed 與 sunk cost 加上低差異化，形成結構性低獲利。" } },
          { case: { en: "Powers that Be (GAFAM)", zh: "Powers that Be" }, level: { en: "Supranational / Industry", zh: "Supranational / Industry" }, thesis: { en: "Platform economics and global structures differ sharply across firms; it is not one uniform industry story.", zh: "平台經濟與全球結構在各家之間差異很大，不能當作單一產業故事。" } },
          { case: { en: "Stitch Fix", zh: "Stitch Fix" }, level: { en: "Cross-level", zh: "跨層" }, thesis: { en: "A tech-enabled apparel model sits across meso, industry, and meta pressures, especially future competition and unmet demand.", zh: "Tech-enabled 服飾模式橫跨 meso、industry、meta 壓力，尤其是未來競爭與 unmet demand。" } },
          { case: { en: "Acer-Wistron", zh: "Acer-Wistron" }, level: { en: "Cluster / Industry", zh: "Cluster / Industry" }, thesis: { en: "Forward integration triggered conflict with customers and ultimately justified separation.", zh: "向前整合引發與客戶衝突，最後反而使分拆合理化。" } },
          { case: { en: "Seiko", zh: "Seiko" }, level: { en: "Firm (positioning)", zh: "Firm（Positioning）" }, thesis: { en: "Positioning migration matters; Seiko’s movement upmarket is a dynamic positioning issue.", zh: "Positioning 會移動；Seiko 的 upmarket 推進屬於動態 positioning 問題。" } },
          { case: { en: "P&G in China", zh: "P&G in China" }, level: { en: "National", zh: "National" }, thesis: { en: "Macro conditions, income distribution, digital shifts, and evolving consumer behavior all matter at once.", zh: "總體條件、所得分布、數位轉移與消費行為變化同時作用。" } },
          { case: { en: "Disney (Eisner / Iger)", zh: "Disney（Eisner / Iger）" }, level: { en: "Firm (leadership)", zh: "Firm（Leadership）" }, thesis: { en: "Leadership shaped both collapse risk and recovery through related acquisitions and organizational repair.", zh: "Leadership 同時塑造了失敗風險與後來透過 related acquisitions 與組織修復的復甦。" } },
        ]} />
        <InfoCard titleEn="Practice-question cases" titleZh="Practice Questions 補充案例" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[
          ["ETA / Swatch","Industry economics, supplier power, competition policy, appropriability.","ETA / Swatch","Industry economics、supplier power、competition policy、appropriability。"],["Home Alone / Culkin","VRIO on resources and appropriability leakage.","Home Alone / Culkin","VRIO on resources 與 appropriability 流失。"],["Natalie Portman","Forward contracting to manage bargaining power.","Natalie Portman","透過前置合約管理 bargaining power。"],["John Carter / Lone Ranger","Limits of VRIO without organizational fit.","John Carter / Lone Ranger","缺乏 organizational fit 時，VRIO 的侷限。"],["Newell","HQ value through managerial discipline.","Newell","HQ 透過 managerial discipline 加值。"],["WPP (FCPA)","International strategy and compliance architecture.","WPP（FCPA）","國際策略與 compliance 架構。"],["RTZ / Chinalco","Country as customer, owner, partner, regulator, and geopolitical actor.","RTZ / Chinalco","國家同時是客戶、股東、夥伴、監管者與地緣政治行為者。"],["Nokia","Full implementation pathology transfer case.","Nokia","完整 implementation pathology transfer case。"],
        ].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div></InfoCard>
      </div>
    </SectionShell>
  );
}

function ExamSection({ mode }) {
  return (
    <SectionShell id="exam" mode={mode} titleEn="Exam attack system" titleZh="考場攻擊系統" kickerEn="Execution under pressure" kickerZh="壓力下的執行" refs={["Last Day", "Master Review"]}>
      <div className="space-y-5">
        <InfoCard titleEn="Suggested 180-minute allocation" titleZh="建議的 180 分鐘時間分配" mode={mode} tone="teal"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-8">{[
          ["0–5","Read all questions, not the reading","0–5","先讀完所有題目，不先讀 reading"],["5–15","Read the full reading and tag frameworks","5–15","完整讀 reading，邊讀邊 tag 框架"],["15–30","Do the most bounded question first","15–30","先做最 bounded 的題目"],["30–55","International-style question","30–55","處理 international 類題目"],["55–80","Corporate-style question","55–80","處理 corporate 類題目"],["80–140","Long implementation / Nokia-type question","80–140","處理 implementation / Nokia 類長題"],["140–170","Go back and strengthen conclusions","140–170","回頭補強 conclusions"],["170–180","Final scan for conclusions, evidence, and fit","170–180","最後檢查 conclusion、evidence 與題意貼合度"],
        ].map(([en1, en2, zh1, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="mb-1 font-semibold" style={{ color: theme.teal }}>{en1}</div><BiText mode={mode} en={en2} zh={zh2} /></div>)}</div></InfoCard>
        <ExamFlowBoard mode={mode} />
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Question trigger → tool mapping" titleZh="題目 trigger → 工具對應" mode={mode} tone="gold"><SimpleTable mode={mode} size="compact" columns={[{ key: "trigger", en: "Trigger", zh: "觸發字樣" }, { key: "tool", en: "Default tool", zh: "預設工具" }]} rows={[
            { trigger: { en: "Profitability / structure / competition", zh: "profitability / structure / competition" }, tool: { en: "Underlying economics + competition type + variables + ferocity", zh: "Underlying economics + competition type + variables + ferocity" } },
            { trigger: { en: "Bargaining / buyer / supplier power", zh: "bargaining / buyer / supplier power" }, tool: { en: "Intrinsic strength + price sensitivity + willingness to use power", zh: "Intrinsic strength + price sensitivity + willingness to use power" } },
            { trigger: { en: "Foreign / international / country", zh: "foreign / international / country" }, tool: { en: "Five-level home-vs-host + SPARK match + global/local split", zh: "Five-level home-vs-host + SPARK match + global/local split" } },
            { trigger: { en: "Multi-business / subsidiary / corporate", zh: "multi-business / subsidiary / corporate" }, tool: { en: "Corporate strategy six mechanisms + sum-of-parts test", zh: "Corporate strategy 六機制 + sum-of-parts test" } },
            { trigger: { en: "Leadership / organization / execution", zh: "leadership / organization / execution" }, tool: { en: "Implementation five-block diagnosis + commitment ladder + 70/30", zh: "Implementation 五段診斷 + commitment ladder + 70/30" } },
            { trigger: { en: "Resource / advantage", zh: "resource / advantage" }, tool: { en: "VRIO applied to A, R, K", zh: "VRIO 套在 A、R、K" } },
            { trigger: { en: "Future competition / sustainability", zh: "future competition / sustainability" }, tool: { en: "CEA + lead firm type + unmet demand", zh: "CEA + lead firm type + unmet demand" } },
          ]} /></InfoCard>
          <InfoCard titleEn="Default answer shape" titleZh="預設答題骨架" mode={mode} tone="plum"><BulletList mode={mode} items={[
            { en: "Identify the focal firm and the strategically meaningful industry.", zh: "先辨認 focal firm 與具有策略意義的 industry。" },
            { en: "If the case is business-facing, do a quick underlying-economics scan.", zh: "若是 business-facing case，先做快速 underlying-economics 掃描。" },
            { en: "Name only the binding levels.", zh: "只點名真正 binding 的層次。" },
            { en: "Apply the right tool, not the whole framework library.", zh: "用對工具，不要把整座 framework library 全搬上來。" },
            { en: "Use specific case evidence: numbers, quotes, events.", zh: "必須用具體 case evidence：數字、quotes、事件。" },
            { en: "State a conclusion in BARD or POE language.", zh: "最後要用 BARD 或 POE 語氣下 conclusion。" },
            { en: "If asked, connect to strategy and implementation barriers.", zh: "如果題目要求，就把 diagnosis 連回 strategy 與 implementation barriers。" },
          ]} /></InfoCard>
        </div>
        <div className="grid min-w-0 gap-4 xl:grid-cols-[1fr_1fr]">
          <InfoCard titleEn="Fatal errors" titleZh="致命錯誤清單" mode={mode} tone="danger"><BulletList mode={mode} items={[
            { en: "No conclusion.", zh: "沒有 conclusion。" }, { en: "Performance claim without stating the comparator.", zh: "講 performance 卻沒有說 comparator。" }, { en: "Framework display without causal application.", zh: "只展示 framework，沒有做 causal application。" }, { en: "Wrong level for the case.", zh: "案例層次判斷錯誤。" }, { en: "Using the same case twice where uniqueness matters.", zh: "在要求唯一配對時重複使用同一個 case。" }, { en: "Extraneous material.", zh: "塞入與題目無關的材料。" }, { en: "Implementation answer that retells the story but never diagnoses pathology.", zh: "Implementation 題只重述故事，沒有做 pathology diagnosis。" }, { en: "Skipping CEA when the question is about sustainability or future competition.", zh: "遇到 sustainability 或 future competition 題，卻沒用 CEA。" }, { en: "Jumping to strategy language before underlying economics is clear.", zh: "在底層經濟還沒釐清前，就直接跳到 strategy language。" }, { en: "Using Prahalad-Hamel core competence framing as the default answer to NEC.", zh: "把 Prahalad-Hamel 的 core competence 當成 NEC 的預設答法。" },
          ]} /></InfoCard>
          <InfoCard titleEn="One-page hand cheat sheet" titleZh="一頁手寫 cheat sheet" mode={mode} tone="ok"><BulletList mode={mode} items={[
            { en: "Five levels", zh: "Five levels" }, { en: "Four performance comparators", zh: "四個 performance comparators" }, { en: "Seven economics dimensions", zh: "七個 economics dimensions" }, { en: "Competition: type, variables, ferocity", zh: "Competition：type、variables、ferocity" }, { en: "SPARK + VRIO on A, R, K + CEA", zh: "SPARK + VRIO on A、R、K + CEA" }, { en: "Implementation five blocks + key numbers", zh: "Implementation 五段 + 關鍵數字" }, { en: "International split + corporate mechanisms", zh: "International 切法 + corporate 機制" }, { en: "Nokia answer shape", zh: "Nokia 預設作答形狀" },
          ]} /></InfoCard>
        </div>
        <InfoCard titleEn="Confidence tiers and safe usage" titleZh="信度分級與安全使用方式" mode={mode} tone="gold"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{[["Tier 1","Tier 1","Primary-source or strongly verified wording. Use confidently.","Primary-source 或高度驗證內容，可自信使用。"],["Tier 2","Tier 2","User-verified reconstruction. Safe with measured wording.","使用者驗證重建版，用保守語氣可安全使用。"],["Tier 3","Tier 3","Reasonable inference. Use as analysis, not as attributed verbatim.","合理推論，可作分析，但不要當 verbatim 引用。"],["Tier 4","Tier 4","Avoid as direct exam material.","不建議直接拿去考場使用。"]].map(([en1, zh1, en2, zh2]) => <div key={en1} className="rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#FBF8F0" }}><div className="font-semibold mb-1" style={{ color: theme.ink }}><BiText mode={mode} en={en1} zh={zh1} /></div><div style={{ color: theme.subInk }}><BiText mode={mode} en={en2} zh={zh2} /></div></div>)}</div><div className="mt-4 rounded-3xl border p-4 text-sm leading-6" style={{ borderColor: theme.line, background: "#F4F0E6", color: theme.subInk }}><BiText mode={mode} en="Final one-sentence guide: start with underlying economics, identify the binding levels, test SPARK plus leadership and execution, pressure-test future competition with CEA, and then ask whether organization and implementation allow the firm to realize and defend the value that should be available." zh="最後一句總綱：先從 underlying economics 下手，找出 binding levels，再檢驗 SPARK 加上 leadership 與 execution，用 CEA 壓測未來競爭，最後再問 organization 與 implementation 是否真的讓分析上應該存在的價值被實現並守住。" /></div></InfoCard>
      </div>
    </SectionShell>
  );
}

function AppendixSection({ mode }) {
  const [showSource, setShowSource] = useState(false);
  return (
    <SectionShell id="appendix" mode={mode} titleEn="Source fidelity appendix" titleZh="原始內容附錄" kickerEn="Nothing dropped from the pasted backbone" kickerZh="貼入骨架原文完整保留" refs={["Master Review"]}>
      <div className="space-y-4">
        <InfoCard titleEn="Why this appendix exists" titleZh="為甚麼要保留這個附錄" mode={mode} tone="teal"><BiText mode={mode} block en="The main interface restructures the material for readability and exam execution. This appendix keeps the original pasted master review inside the file so the upgraded infrastructure does not silently omit that backbone." zh="主介面是為了提升可讀性與考場操作性而重構。這個附錄把原始貼入總整完整放進檔案中，確保升級版 infrastructure 不會默默遺漏那份骨架內容。" /></InfoCard>
        <button onClick={() => setShowSource((v) => !v)} className="rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.plum }}>{showSource ? uiText(mode, "Hide source appendix", "收起原始內容", "Ẩn appendix nguồn gốc") : uiText(mode, "Show source appendix", "展開原始內容", "Mở appendix nguồn gốc")}</button>
        {showSource ? <div className="overflow-hidden rounded-[28px] border" style={{ borderColor: theme.line }}><div className="border-b px-4 py-3 text-xs uppercase tracking-[0.18em]" style={{ background: "#F2ECE0", borderColor: theme.line, color: theme.teal }}>{uiText(mode, "Original pasted master review", "原始貼入 master review", "Bản master review gốc đã dán vào")}</div><pre className="max-h-[900px] max-w-full overflow-auto whitespace-pre-wrap break-words [overflow-wrap:anywhere] p-4 text-[12px] leading-6" style={{ background: "#FFFDF8", color: theme.ink }}>{mode === "zh-cn" ? SOURCE_MARKDOWN_ZH_CN : SOURCE_MARKDOWN}</pre></div> : null}
      </div>
    </SectionShell>
  );
}

export default function STRT6200FinalExamInfrastructure() {
  const [mode, setMode] = useState("en");
  const [activeTag, setActiveTag] = useState("all");
  const [query, setQuery] = useState("");
  const filteredSections = useMemo(() => sectionMeta.filter((section) => {
    const tagPass = activeTag === "all" ? true : section.tag === activeTag;
    const q = query.trim().toLowerCase();
    const queryPass = !q ? true : [section.en, section.zh, viText(section.en), ptText(section.en), urText(section.en), esText(section.en), jpText(section.en), section.search, ...(section.refs || [])].join(" ").toLowerCase().includes(q);
    return tagPass && queryPass;
  }), [activeTag, query]);
  const renderSection = (id) => {
    switch (id) {
      case "overview": return <OverviewSection mode={mode} />;
      case "spine": return <SpineSection mode={mode} />;
      case "economics": return <EconomicsSection mode={mode} />;
      case "industry": return <IndustrySection mode={mode} />;
      case "firm": return <FirmSection mode={mode} />;
      case "meso": return <MesoSection mode={mode} />;
      case "macro": return <MacroSection mode={mode} />;
      case "meta": return <MetaSection mode={mode} />;
      case "international": return <InternationalSection mode={mode} />;
      case "corporate": return <CorporateSection mode={mode} />;
      case "implementation": return <ImplementationSection mode={mode} />;
      case "cases": return <CasesSection mode={mode} />;
      case "exam": return <ExamSection mode={mode} />;
      case "appendix": return <AppendixSection mode={mode} />;
      default: return null;
    }
  };
  const visibleCount = filteredSections.length;
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden" dir={mode === "ur" ? "rtl" : "ltr"} lang={mode === "ur" ? "ur" : mode === "jp" ? "ja" : mode === "es" ? "es-MX" : mode === "pt" ? "pt-BR" : mode === "vi" ? "vi" : mode === "zh" ? "zh-Hant" : mode === "zh-cn" ? "zh-Hans" : "en"} style={{ background: theme.bg, color: theme.ink }}>
      <AnchorNav mode={mode} activeTag={activeTag} setActiveTag={setActiveTag} query={query} setQuery={setQuery} />
      <FloatingLanguageToggle mode={mode} setMode={setMode} />
      <div className="mx-auto grid max-w-[1600px] gap-5 px-3 py-5 sm:px-4 md:px-6 xl:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden xl:block min-w-0"><div className="sticky top-28 rounded-[28px] border p-4" style={{ background: "#FBF8F0", borderColor: theme.line }}><div className="mb-3 text-[11px] uppercase tracking-[0.24em]" style={{ color: theme.plum }}><BiText mode={mode} en="Reading map" zh="閱讀地圖" /></div><div className="mb-4 text-sm leading-6" style={{ color: theme.subInk }}><BiText mode={mode} en={`${visibleCount} sections currently visible. Use the filter chips and search box to narrow the system to weighted areas, frameworks, cases, or the appendix.`} zh={`目前顯示 ${visibleCount} 個 section。可用上方 filter chips 與搜尋欄，把系統收斂到高權重、框架、案例或附錄。`} vi={`Hiện đang hiển thị ${visibleCount} section. Hãy dùng các chip lọc và ô tìm kiếm để thu hẹp hệ thống vào các phần trọng số cao, framework, case hoặc appendix.`} /></div><div className="space-y-2">{filteredSections.map((section) => <a key={section.id} href={`#${section.id}`} className="block rounded-2xl border px-3 py-2 text-sm leading-5" style={{ borderColor: theme.line, background: "#FFFDF8", color: theme.subInk }}><BiText mode={mode} en={section.en} zh={section.zh} /></a>)}</div></div></aside>
        <main className="min-w-0 max-w-full space-y-5 md:space-y-6">{filteredSections.length ? filteredSections.map((section) => <React.Fragment key={section.id}>{renderSection(section.id)}</React.Fragment>) : <div className="rounded-[28px] border p-8 text-center" style={{ background: theme.card, borderColor: theme.line }}><div className="text-lg font-semibold" style={{ color: theme.ink }}><BiText mode={mode} en="No sections match the current filter." zh="目前篩選條件下沒有符合的 section。" /></div><div className="mt-2 text-sm" style={{ color: theme.subInk }}><BiText mode={mode} en="Try a broader search term or switch the chip filter back to All." zh="請改用更寬鬆的搜尋字，或把 chip filter 切回全部。" /></div></div>}</main>
      </div>
      <footer className="px-3 pb-8 pt-1 sm:px-4 md:px-6">
        <div className="mx-auto max-w-[1600px] border-t pt-4 text-center text-sm" style={{ borderColor: theme.line, color: theme.subInk }}>EugeneYip.com</div>
      </footer>
    </div>
  );
}
