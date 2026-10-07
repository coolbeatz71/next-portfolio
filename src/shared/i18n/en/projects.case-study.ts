export const projectsCaseStudy = {
    back_to_work: "Back to work",
    previous_project: "Previous project",
    next_project: "Next project",
    previous_image: "Previous image",
    next_image: "Next image",
    my_role: "My role",
    project_stack: "Stack",
    project_outcome: "Outcome",
    project_context: "The context",
    project_challenge: "The challenge",
    project_ownership: "What I owned",
    project_constraint: "Constraint",
    project_response: "My response",
    projects_case_study: {
        centseizeapi: {
            category: "Music media publishing",
            context_title: "One API behind three clients.",
            context_body:
                "116 covers hip hop culture in DR Congo: articles, video shows, lyrics pages, and the promoted placement that pays for them. The site, the dashboard and the app all read one contract. I built the API.",
            challenge_title: "One deployable, four modules, no shortcuts.",
            constraint:
                "One database and one process make it cheap for a module to reach into another's tables.",
            response:
                "Identity, Content, Storage and Mailer each got their own EF Core context and PostgreSQL schema, talking only through Contracts projects. NetArchTest fails the build when something crosses a line.",
            ownership: [
                "Split the API into four modules on .NET 9, each with its own PostgreSQL schema, migrations and DbContext.",
                "Wrote the CQRS dispatcher behind Carter, with validation and logging registered as decorators through Scrutor so all 297 handlers inherit them.",
                "Unified error handling into one Problem Details RFC 7807 contract surfaced via Swagger/OpenAPI, cutting client side error branching code by roughly 80%.",
                "Moved notifications onto an outbox written in the same transaction as the change that triggers it, drained by a Quartz job. A dead SMTP server now delays mail instead of losing it.",
                "Grew the suite to 8,566 unit tests and 2,234 integration tests, the integration ones hitting real PostgreSQL and Redis through Testcontainers."
            ],
            outcome:
                "One deployable serving the whole platform, with the boundaries enforced by tests rather than memory."
        },
        centseizeweb: {
            category: "Music media website",
            context_title: "The surface fans meet.",
            context_body:
                "Articles, video shows, shorts, artist pages and lyrics, in French and English. Most readers arrive from search. I built the site that renders it.",
            challenge_title: "Keep up with an API that moves every release.",
            constraint:
                "Server rendered editorial pages sit next to interactive video feeds, in two languages, against an API surface that keeps growing.",
            response:
                "The typed client is generated from the backend swagger. Six modules, four layers each, dependencies resolved through Awilix.",
            ownership: [
                "Next.js 16 and React 19. Route groups keep the public catalogue out of the member bundle.",
                "Typed API client generated from swagger in one command. Contract drift shows up as a TypeScript error.",
                "Six modules, each with domain, application, infrastructure and presentation layers.",
                "Article bodies sanitised with DOMPurify before render.",
                "Video and shorts on Plyr and Embla, server state in React Query."
            ],
            outcome:
                "The whole catalogue in two languages, kept in step with the API by generation rather than by hand."
        },
        centseizedashboard: {
            category: "Editorial operations tooling",
            context_title: "Where the newsroom works.",
            context_body:
                "The newsroom writes and publishes everything here, and the sales side runs through the same tool: promotion packages, orders, ad slots, payment proofs. An editor drafting a piece and someone chasing an invoice end up in the same place.",
            challenge_title: "Keeping fourteen domains from bleeding into each other.",
            constraint:
                "Writing an article has little in common with verifying a payment, yet both live in this application, and neither should drag the other's code along with it.",
            response:
                "Each domain became its own module on React 19 and Vite, with four layers inside it. Redux Toolkit holds the state that genuinely crosses screens, and Ant Design supplies the shell they all sit in.",
            ownership: [
                "Built the back office as fourteen modules behind a single Ant Design shell, each keeping its own domain, application, infrastructure and presentation layers.",
                "Put the article editor on TipTap, extending it with image, link, YouTube and alignment support so editors never touch HTML.",
                "Carried roles and permissions down into the components, so an action a user cannot take is never drawn in the first place.",
                "Persisted session and settings with Redux Persist behind an encryption transform, so a reload leaves nothing readable in the browser.",
                "Generated the typed API client from the same swagger the public site and the mobile app read."
            ],
            outcome:
                "Editors and the people billing for the work share one tool, with the permission model visible in the interface rather than only enforced behind it."
        },
        centseizemobile: {
            category: "Music media mobile app",
            context_title: "The platform in the pocket.",
            context_body:
                "Shows, shorts, a discover feed and favorites, on Android and iOS, in French and English. The audience is mostly on phones, on connections that come and go.",
            challenge_title: "A catalogue app that survives a bad connection.",
            constraint: "An app that only works online is an app that works sometimes.",
            response:
                "Every call returns an fpdart Either from a use case, reads land in Hive, and connectivity is watched rather than assumed.",
            ownership: [
                "Flutter and Dart on Android and iOS. Clean Architecture with BLoC, four layers per module.",
                "Chopper client generated from the backend swagger through build_runner.",
                "Failures returned as fpdart Either, so the error path is handled rather than thrown.",
                "Reads cached in Hive with connectivity tracked. Losing signal leaves the content on screen.",
                "Google and Facebook sign in on flutter_secure_storage."
            ],
            outcome: "The catalogue on both stores, still working when the connection is not."
        },
        savedashboard: {
            category: "Operations dashboard",
            context_title: "The control room behind the app.",
            context_body:
                "Everything a member touches in the SAVE app has an operator side to it: approving a group, reviewing a loan, topping up a wallet an NGO funds. That dashboard had been running on ageing JavaScript and Semantic UI, and every new feature took longer to land than the one before.",
            challenge_title: "Modernize a dashboard that never stops being used.",
            constraint:
                "The codebase was plain JavaScript with no types, the component library was long past its prime, and operators worked in it daily, so none of it could go dark while the work happened.",
            response:
                "Converted it to TypeScript module by module, reorganized the source around Feature Sliced Design so each area stood on its own, and swapped Semantic UI for shadcn/ui on TailwindCSS one screen at a time.",
            ownership: [
                "Migrated the codebase from untyped JavaScript to TypeScript, so breakages surface at build time instead of in an operator's face.",
                "Restructured the source around Feature Sliced Design, giving savings groups, users, loans and wallets a slice each rather than one shared pile.",
                "Replaced Semantic UI React with shadcn/ui on TailwindCSS screen by screen, running both libraries side by side until the last screen moved across.",
                "Kept Redux as the state layer while everything around it changed, so operators never had to relearn a workflow mid migration.",
                "Built the operator tooling for savings groups, member accounts, loans and microloans, and the NGO wallets that fund them."
            ],
            outcome:
                "An admin surface covering everything the mobile app does, on a codebase that now catches its own mistakes and splits cleanly by feature."
        },
        save: {
            category: "Financial inclusion",
            context_title: "Banking that fits a basic handset.",
            context_body:
                "Exuus built SAVE for people across Rwanda who save in groups rather than through a bank. It runs as a React Native app and over USSD on *777#, so a member without a smartphone is never shut out. I joined to help build it out, and ended up reworking both how it looks and how it ships.",
            challenge_title: "Redesign the app without slowing releases down.",
            constraint:
                "The interface was being rebuilt while every release still went out by hand, and the team had little sense of where members actually got stuck.",
            response:
                "Reworked the screens on React Native and TypeScript, moved releases onto Fastlane so a build reached the stores on one command, and wired in Clarity to see where members hesitated.",
            ownership: [
                "Built the app out in React Native and TypeScript, with React Query caching server state and Jotai holding the rest, cutting repeat network calls on the main screens.",
                "Redesigned the interface screen by screen, shortening the path to saving, borrowing and bill payment so each lands in fewer taps on the modest Android phones most members carry.",
                "Put biometric unlock on the app with React Native Biometrics, so members reach their money with a fingerprint or Face ID instead of typing a PIN every time they open it.",
                "Introduced Fastlane, turning a release from a manual pass through App Store Connect and Play Console into a single command.",
                "Read Clarity session replays to find where members hesitated, then removed the second click from the main flows so they reach the screen they wanted first time.",
                "Set up React Native Testing Library and covered the core screens with behaviour tests, so regressions surface before a build leaves the machine."
            ],
            outcome:
                "A savings app that holds up on the phones its members actually own, with releases that go out on a command and session data showing what to fix next."
        },
        storm: {
            category: "Digital asset infrastructure",
            context_title: "Bringing asset management back under one roof.",
            context_body:
                "BESTSELLER kept its product imagery in a licensed Microsoft 365 platform that could no longer keep pace: dropping in a file and seeing it reach the brands often took most of a day. StorM was built from scratch inside the company to take that job over.",
            challenge_title: "Swap the system without stopping the business.",
            constraint:
                "The licensed platform was frozen on a release that could no longer be hosted safely, while every brand team and a long list of connected systems leaned on it daily.",
            response:
                "Grew StorM beside what was already running, on .NET services behind a Next.js interface, then moved teams and integrations across in waves so nobody lost access to their files.",
            ownership: [
                "Joined on the frontend, where React work cut page load time by 30% across the Digital Media and Marketing app.",
                "Moved into backend tasks soon after, reworking core .NET services with async and dependency injection to cut API response times by 40%.",
                "Added RabbitMQ producers that stream asset metadata the moment it changes, dropping sync delays by 80%.",
                "Introduced OpenTelemetry metrics feeding Datadog, worth a 25% performance gain.",
                "Authored the reusable test foundation that lifted quality control efficiency by over 30%."
            ],
            outcome:
                "An asset platform the company owns outright, where uploads reach the brands in minutes rather than a day."
        },
        servicenow: {
            category: "Enterprise workflow automation",
            context_title: "Putting the People team's paperwork on the platform.",
            context_body:
                "Booking leave at BESTSELLER meant an email to HR, and getting a cab meant finding whoever kept the calendar. I built scoped applications on ServiceNow so both became catalog requests with approvals attached, then took on shifting production contract data out to Boomi.",
            challenge_title: "One platform, three very different problems.",
            constraint:
                "Each kind of leave carried its own eligibility rules and approvers, cab requests had to work from a phone, and the fashion production contract records were far too large to push to Boomi in a single pass.",
            response:
                "Every leave type became its own catalog item with a Flow Designer approval path, cab booking went out through Mobile Agent, and the contract export ran in batches on Scheduled Jobs.",
            ownership: [
                "Built scoped applications for the People team covering annual, sick and parental leave, each with its own catalog item, approval path and SLAs, lifting automation by 40%.",
                "Opened cab booking to staff phones through Mobile Agent, so a request took a few taps instead of a trip to someone's desk.",
                "Shifted fashion production contract records from ServiceNow to Boomi, paging through the volume with Scheduled Jobs so nothing timed out midway.",
                "Configured the SMTP and POP3 notifications that kept requesters posted, cutting response time by 30%.",
                "Wrote the UI Actions, Client Scripts, Business Rules, ACLs and reports holding it together, worth a 30% gain in system efficiency."
            ],
            outcome:
                "Leave, travel and contract data all moved through one platform, every request traceable, with workflow efficiency up 25%."
        },
        codeofafrica: {
            category: "Company platform and SEO",
            context_title: "Making an outsourcing hub discoverable.",
            context_body:
                "Code of Africa connects European businesses with East African engineers, but the flagship site was barely visible in search and the frontend team had no shared quality bar.",
            challenge_title: "Grow reach and raise the bar at once.",
            constraint:
                "The site had to rank in a competitive European market while the team itself was still forming its engineering practices.",
            response:
                "Rebuilt the site around a stricter SEO and accessibility baseline, then used code review and mentoring to turn those conventions into team habits.",
            ownership: [
                "Boosted search rankings and brand recognition by 35% through an SEO-first rebuild.",
                "Led cross-functional frontend teams and improved code quality by 40% through structured review.",
                "Mentored 5+ junior developers into independent contributors."
            ],
            outcome:
                "A discoverable flagship product and a frontend team able to sustain its own quality standard."
        },
        ezyagric: {
            category: "Agritech platform",
            context_title: "Bringing services to farmers who are offline first.",
            context_body:
                "EzyAgric gives Ugandan farmers and agribusinesses access to inputs, markets, records and finance. The platform had to work for users on low-end devices and unreliable connections.",
            challenge_title: "Make a data-heavy platform feel light.",
            constraint:
                "Slow networks, a growing CouchBase dataset, and authentication flows that had accumulated session-related vulnerabilities.",
            response:
                "Hardened the auth token lifecycle, restructured data storage for fast reads, and rebuilt the Angular interfaces around progressive, low-bandwidth rendering.",
            ownership: [
                "Hardened authentication flows, reducing session-related vulnerabilities by 80%.",
                "Optimized CouchBase storage, improving database performance and reliability by 35%.",
                "Pioneered a reusable PHPUnit testing backbone, shortening development cycles by 45%."
            ],
            outcome: "A faster, safer platform serving tens of thousands of farmers across Uganda."
        },
        motory: {
            category: "Marketplace modernization",
            context_title: "Rescuing an eight-year-old white-label system.",
            context_body:
                "Motory is a German vehicle marketplace built on a white-label platform extended for more than eight years. New features were slow to ship and search barely held up under real traffic.",
            challenge_title: "Modernize without a rewrite.",
            constraint:
                "A large legacy PHP codebase in continuous production use, where nothing could be taken offline and a full rewrite was never an option.",
            response:
                "Modernized the system incrementally, moved search onto ElasticSearch, and replaced the slowest paths one at a time behind the existing interface.",
            ownership: [
                "Maintained and extended the legacy PHP platform while keeping it live.",
                "Introduced ElasticSearch-backed search across listings and discussions.",
                "Increased system responsiveness and user loyalty by 20%."
            ],
            outcome:
                "A legacy marketplace that performs like a modern one, without a disruptive migration."
        },
        tembea: {
            category: "Internal operations tooling",
            context_title: "Automating how a company moves.",
            context_body:
                "Andela coordinated cab requests, routes and reconciliation by hand across the Operations and Travel teams. Tembea replaced that with a Slack-first application backed by a web dashboard.",
            challenge_title: "Meet people where they already work.",
            constraint:
                "Operations staff lived in Slack, while the Travel team needed reporting and reconciliation views no chat interface could provide.",
            response:
                "Built a Node/Express and PostgreSQL backend serving both surfaces, with the Slack API handling day-to-day requests and the web app handling oversight.",
            ownership: [
                "Built the Node/Express and PostgreSQL backend for trip requests and route management.",
                "Integrated the Slack API for real-time updates, cutting response time by 20%.",
                "Applied memoization and virtualization to large data views, improving scroll performance by 70%."
            ],
            outcome:
                "Operations and Travel teams gained 30% productivity with trip data they could finally trust."
        },
        saveplus: {
            category: "Fintech crowdfunding",
            context_title: "Raising money should feel effortless.",
            context_body:
                "SavePlus lets people raise funds for everything from graduations to medical emergencies. I owned the frontend, where trust and clarity directly decide whether a campaign succeeds.",
            challenge_title: "Payments that never give users doubt.",
            constraint:
                "Campaigns depend on Mobile Money, PayPal and card payments at once, across browsers and devices, where a single failed transaction costs a donation.",
            response:
                "Built the payment flows around explicit states and recoverable errors, then covered the critical paths with Cypress end-to-end tests on every supported browser.",
            ownership: [
                "Built the frontend for the crowdfunding product, improving user retention by 25%.",
                "Integrated Mobile Money, PayPal and card payments at a 99.9% success rate.",
                "Wrote the Cypress end-to-end suite, improving cross-browser reliability by 30%."
            ],
            outcome:
                "Thousands of transactions processed monthly with a checkout users complete without hesitation."
        },
        reconstruction: {
            category: "Education platform",
            context_title: "Rebuilding a platform around its story.",
            context_body:
                "Reconstruction teaches Black history and culture through courses and editorial content. The customer-facing frontend had grown faster than its structure could support.",
            challenge_title: "Re-architect while shipping.",
            constraint:
                "Course delivery ran through the Thinkific API and .NET services, and the product could not pause for a rewrite.",
            response:
                "Re-architected the frontend around Clean Code and Domain-Driven Design, tuned the .NET and Entity Framework layer, and guarded every change with visual regression tests.",
            ownership: [
                "Improved performance and maintainability by 30% through a staged re-architecture.",
                "Optimized .NET services with MassTransit and Entity Framework tuning, cutting latency by 35%.",
                "Set up CI pipelines for Storybook snapshots, reducing post-release hotfixes by 70%."
            ],
            outcome:
                "A maintainable platform where enrollment and progress tracking became 35% simpler for learners."
        },
        alfatier: {
            category: "Cloud optimization MVP",
            context_title: "Building a product from the first commit.",
            context_body:
                "Alfatier helps businesses optimize and secure their public cloud footprint. I joined as an early-stage engineer, before the frontend existed, and shaped both the product surface and the engineering baseline.",
            challenge_title: "Survive launch week.",
            constraint:
                "An MVP with no existing code, a fixed launch date, and traffic expectations nobody could predict.",
            response:
                "Chose a modular architecture with encapsulated Web Components, insisted on full test coverage from day one, and decoupled frontend actions through a Kafka event pipeline.",
            ownership: [
                "Led development with the UI/UX designer, lifting user satisfaction by 30%.",
                "Shipped the MVP with 100% test coverage and sustained high traffic through launch week.",
                "Integrated LogRocket and NewRelic, increasing product efficiency by 40%."
            ],
            outcome:
                "A product that scaled seamlessly through 3x post-launch traffic with 45% lower API latency."
        },
        meet: {
            category: "Flutter web portfolio",
            context_title: "Proving Flutter can own the web.",
            context_body:
                "Meet is a portfolio web app built entirely in Flutter Web, created to test how far a single Dart codebase can go when the target is a public, indexable website.",
            challenge_title: "A canvas app that still has to be a web page.",
            constraint:
                "Flutter Web renders to canvas, which gives full design control but costs the semantics and discoverability a portfolio depends on.",
            response:
                "Structured the app around Riverpod and Flutter Hooks for predictable state, and layered in SEO metadata and semantic hints so the site stays reachable.",
            ownership: [
                "Designed and built the complete Flutter Web application.",
                "Set up state management with Riverpod and Flutter Hooks.",
                "Added SEO configuration and responsive layouts for every breakpoint."
            ],
            outcome:
                "A customizable portfolio template that presents work consistently across every device."
        },
        filmfan: {
            category: "Mobile product",
            context_title: "Making cinema in Rwanda easy to find.",
            context_body:
                "There was no simple way to see what was playing in Rwandan cinemas. Film Fan pulls now-playing films, ratings and synopses into one app, with cinema booking as the next step.",
            challenge_title: "A rich catalogue on a modest connection.",
            constraint:
                "Movie metadata and artwork are heavy, while the audience is largely on mid-range Android devices and metered data.",
            response:
                "Built a Flutter client with aggressive image caching, paginated discovery and offline-tolerant state, so browsing stays smooth when the network is not.",
            ownership: [
                "Built the full Flutter application and its discovery experience.",
                "Integrated the movie catalogue API with caching and pagination.",
                "Designed the recommendation and detail views."
            ],
            outcome:
                "An open-source app that turns finding what is playing into a few taps instead of a search."
        },
        clickmart: {
            category: "Rural commerce",
            context_title: "Connecting urban markets to rural buyers.",
            context_body:
                "Click Mart gives rural communities direct access to goods sourced from urban hubs, removing the intermediaries that made the same products slower and more expensive.",
            challenge_title: "Commerce where connectivity is the bottleneck.",
            constraint:
                "Buyers shop on low-speed connections and expect payment and delivery to work the first time, far from any support desk.",
            response:
                "Innovated data synchronization so the catalogue stays usable offline, and added a QR code payment mechanism that removes the friction from checkout.",
            ownership: [
                "Built the Ionic application and its offline-first synchronization layer.",
                "Integrated QR code payments, cutting checkout time by 50%.",
                "Reduced load times by 40% on low-speed connections."
            ],
            outcome: "An e-commerce experience reaching buyers the usual platforms never served."
        },
        taskmanager: {
            category: "Productivity app",
            context_title: "Task management that stays out of the way.",
            context_body:
                "Most task apps optimize for features. Task Manager was built to optimize for the two seconds between remembering something and writing it down.",
            challenge_title: "Keep it instant as it grows.",
            constraint:
                "Daily errands, projects and work commitments all live in one list, and every extra screen is a reason to stop using the app.",
            response:
                "Built a Flutter client around local-first persistence and a flat navigation model, so capture and completion are always one gesture away.",
            ownership: [
                "Designed and built the full Flutter application.",
                "Implemented local persistence and state management.",
                "Shaped the interaction model around single-gesture capture."
            ],
            outcome:
                "An open-source task manager that keeps everything on track without demanding attention."
        },
        coolestdark: {
            category: "Developer tooling",
            context_title: "A theme built for long sessions.",
            context_body:
                "Coolest Dark started as a personal Visual Studio Code theme, inspired by One Dark Pro and Bear, tuned for the Dart and Flutter syntax I spend most of my time reading.",
            challenge_title: "Readable without being loud.",
            constraint:
                "A palette has to separate syntax clearly across many languages while staying comfortable for hours of continuous reading.",
            response:
                "Built the palette around measured contrast ratios and a restrained accent set, then validated it against real Dart, TypeScript and PHP codebases.",
            ownership: [
                "Designed the complete color palette and token scopes.",
                "Published and maintained the theme on the Visual Studio Code Marketplace.",
                "Kept it fully customizable and open-source."
            ],
            outcome:
                "A published theme that reduces eye strain for developers who read code all day."
        },
        rege: {
            category: "Open-source library",
            context_title: "Exporting a grid should be one line.",
            context_body:
                "Every React project eventually needs to turn a grid into a spreadsheet, and every project solves it again from scratch. React Excel Grid Export packages that work once.",
            challenge_title: "Flexible enough to be worth installing.",
            constraint:
                "Teams structure their grid data differently and need control over sheet appearance, so a rigid exporter is no better than writing it by hand.",
            response:
                "Designed an API where the data shape and the output formatting are both configurable, with sensible defaults that cover the common case in a single call.",
            ownership: [
                "Designed and built the library and its public API.",
                "Added Xlsx and Csv output with customizable structure and appearance.",
                "Published and maintained the package on npm."
            ],
            outcome:
                "A reusable exporter that removes a recurring chunk of boilerplate from React projects."
        }
    }
};
