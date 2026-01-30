Based on your feedback, I will adjust the messaging to highlight that the platform is free for personal use (B2C) while mentioning affordable options for businesses (B2B).

### 1. Update Features Component (`src/components/Features.tsx`)

* **Current Title**: "100% Free Forever"

* **New Title**: "Free for Personal Use"

* **Current Description**: "Unlimited polls, unlimited votes. No hidden fees. No upgrades required."

* **New Description**: "Create and vote for free, forever. Affordable onboarding and premium tools available for businesses."

### 2. Update CTA Component (`src/components/CTA.tsx`)

* **Current**: "CREATE A POLL (IT’S FREE)"

* **New**: "CREATE A POLL (START FREE)"

  * *Reasoning*: "Start Free" implies a free tier is available but leaves room for paid business upgrades, which is standard SaaS terminology.

### 3. Update Hero Component (`src/components/Hero.tsx`)

* **Current**: "...No paywalls. No bots..."

* **New**: "...Free for everyone. No bots..."

  * *Reasoning*: "No paywalls" might suggest everything is free including business features. "Free for everyone" (or "Free for individuals") clarifies the B2C aspect while "Affordable for business" could be added if preferred, but "Free for everyone" captures the "Instagram-like" feel best.

### 4. Update Metadata (`src/app/layout.tsx`)

* **Current**: "...No paywalls..."

* **New**: "...Free for personal use..."

### 5. Update SEO Data (`src/components/JsonLd.tsx`)

* **Action**: Remove the `price: '0'` offer to avoid confusion, or leave it if the base app is indeed 0. I propose removing it to be safe for the B2B aspect.

