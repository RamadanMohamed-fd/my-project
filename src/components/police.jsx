import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";

function PrivacyPolicy() {
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    AOS.refresh();
  }, []);

  const content = {
    english: {
      title: "Privacy Policy",
      homeButton: "Home",
      lastUpdated: "Last updated:",
      effectiveDate: "November 17, 2025",

      // Introduction
      intro1: `This Privacy Statement describes the practices that iNutriCal Software (hereinafter "Software" or "we" or "our") follows with respect to the collection, use, and disclosure of information collected from our users ("user" or "you"). This Privacy Statement specifies how we maintain your privacy and protect the confidentiality of the information that we collect when you use our Website, at https://inutrical.net/login (the "Website").`,
      intro2: `Our Company is committed to protecting the privacy and security of the personal information we receive and collect from you through this Website. We also believe in transparency and are committed to informing you about how we treat your personal information. This Privacy statement likewise applies to personal or medical information of patients provided by the User. This version of the Privacy statement is effective as of November 17, 2025.`,

      // Warning Notice
      warning: `PLEASE READ THIS PRIVACY NOTICE CAREFULLY TO UNDERSTAND HOW WE TREAT YOUR PERSONAL INFORMATION AND WHAT CHOICES AND RIGHTS YOU HAVE IN THIS REGARD. IF YOU DISAGREE WITH THE TERMS AND CONDITIONS OF THIS NOTICE, YOU SHOULD NOT USE THE WEBSITE OR ANY SERVICES PROVIDED THROUGH THIS WEBSITE.`,

      // Information Collection
      infoCollectionTitle: "Information Collection",
      infoCollectionIntro: "The types of information we collect include:",
      infoCollectionItems: [
        "Contact Information, such as your name, address, e-mail, telephone number, and other contact details. We typically collect this information to respond to your requests made through our Website for our services, including quotations, free trials, advertising, or technical support.",
        "User Account Information, such as your contact information, other identifying information, username, and a password we give you, and other registration information necessary to establish and maintain your account profile. You may edit or update your user account information at any time.",
        "Business Contact Information, such as contact information, job title, job role, and other personal information, to respond to your requests and provide the content you have requested for yourself or on behalf of your organization.",
        "Location Information, such as your Internet Protocol (IP) address, internet tags, Wi-Fi, Bluetooth or other beacon technology, or other similar location-tracking technologies. We collect this information to support analytics and content development, and to maintain and improve the security of the Website and our services. However, we will not use or disclose such device data unless it has been anonymized in a manner that prevents us or any third party from identifying you.",
        "Cookies and Similar Technologies, which are small files and other data collection and tracking technologies that enable certain website functions. We use these technologies to track user behavior on the Website, compile statistical reports on Website activity, and maintain and improve the Website's security.",
        'Voluntary information: We collect information that you provide us voluntarily through the Website. For example, when you share your details via the "contact us" feature on our Website, you will be asked to provide Personal Information. The Personal information we collect includes your full name, phone number, e-mail address, and the organization you work for. In addition, we may collect information when you respond to our communications, contact our support team, communicate with us via e-mail, or share additional information about yourself through your use of the Website.',
      ],
      infoCollectionEnd:
        "In addition to the information we collect directly from you, we may also receive information about you from other sources, including your organization's representative.",

      // Uses of Personal Information
      usesTitle: "Our Uses of Personal Information",
      usesIntro:
        "In addition to the uses described above, Our Company uses the personal information we collect through the Website in the following ways:",
      usesItems: [
        "To provide you with the services and information you have requested, including training and support for free trial services.",
        "To manage our relationship with you, including administering your account and taking other steps necessary for the performance of our business relationship with your organization.",
        "To determine user interests, needs, and preferences.",
        "To provide Notice of changes to our Website or the services or content we offer or provide through it.",
        "To conduct research and analysis.",
        "To develop new products and services.",
        "To market our services to you. We will only provide you with marketing-related information, including by e-mail, after you have consented to receive those communications and will provide you with the opportunity to opt out of such communications at any time.",
        "To comply with our legal and compliance obligations, including maintaining records, performing compliance audits, etc.",
        "Investigating violations and enforcing our policies, and as required by law, regulation, or other governmental authority, or to comply with a subpoena or similar legal process, or respond to a government request.",
        "To exercise and defend our legal rights, or to comply with court orders.",
      ],
      usesEnd:
        "We will not sell your data nor share it without your express permission. You have the right at any time to stop us from contacting you for marketing purposes.",

      // Disclosure of Personal Information
      disclosureTitle: "Disclosure of Personal Information",
      disclosureIntro:
        "We will not share your information with any third party outside our organization, except as stated in this Notice.",
      tableHeaders: ["Category", "Disclosure Contexts"],
      tableRows: [
        {
          category: "Acquisitions",
          context:
            "If another company acquires our software, we will share your personal information with that company.",
        },
        {
          category: "Disclosures With Your Consent",
          context:
            "We may ask if you would like us to share your personal information with other unaffiliated third parties who are not described elsewhere in this Notice. We will only disclose your personal information in this context with your consent.",
        },
        {
          category: "Disclosures Without Your Consent",
          context:
            "We may disclose your personal information in response to subpoenas, warrants, court orders or other legal processes, or to comply with relevant laws. We may also share your personal information in order to establish or exercise our legal rights, to defend against a legal claim, to investigate, prevent, or take action regarding possible illegal activities, suspected fraud, the safety of person or property.",
        },
        {
          category: "Service Providers",
          context:
            "Our Company may share your personal information with our service providers. Among other things, service providers may help us to administer the Website, and assist us with processing for legitimate purposes permitted by law.",
        },
      ],

      // Access and Control
      accessTitle: "Your Access to and Control Over Information",
      accessIntro:
        'You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the "Contact Us" button on our Website:',
      accessItems: [
        "See what data we have about you, if any.",
        "Change/correct any data we have about you.",
        "Have us delete any data we have about you. Please note that we may not be able to delete your information if the information remains necessary for the purposes for which it was collected or another legal basis applies.",
        "Express any concern you have about our use of your data.",
      ],

      // Security
      securityTitle: "Security",
      securityContent: [
        "Our company stores and processes personal data on servers located in Saudi Arabia. We take the necessary and appropriate steps to protect the security and privacy of your personal information and your patients' information. We take data protection very seriously and comply with the Ministry of Communications and Information Technology's bylaws in Saudi Arabia. By using our Website or requesting services from us, you understand and consent to the collection, storage, processing, and transfer of your personal information and your patients' information to third-party servers with whom we have a contract. We take precautions to protect your information. When you submit sensitive information (patient information and medical histories) via the Website, it is protected both online and offline.",
        "Only our employees who need the information to perform a specific job (for example, customer service) or administrative staff from the organization you are currently working in are granted access to personally identifiable information. The computers and servers where we store personally identifiable information are kept in a secure environment within Saudi Arabia. The type and location of servers will be stated in detail in the contract signed by our prospective Clients (Hospitals). If a security breach causes an unauthorized intrusion into our Website or systems that compromises your personal information, we will notify you or your employer, as specified in the contract.",
      ],

      // Data Retention
      retentionTitle: "Data Retention Policy",
      retentionContent:
        "Your personal information will not be stored for any longer period than is necessary for the purposes for which it was collected. We may also retain the information we collect for as long as needed to comply with our legal obligations, resolve disputes, and enforce our agreements.",

      // Other Websites
      otherWebsitesTitle: "Other websites",
      otherWebsitesContent: [
        "Our Website might contain links to other websites. This privacy notice only applies to this Website, so when you are linked to other websites through any link on the page, you should read their own privacy policies.",
        "Our Company cannot and does not (i) guarantee the adequacy of privacy, security, practice content or media provided by third parties or their websites, (ii) control third parties' independent collection or use of your personal information, or (iii) endorse any third party information, products, services or websites that may be reached through embedded links on this Website.",
      ],

      // Changes
      changesTitle: "Changes to our privacy notice",
      changesContent:
        "We keep our privacy notice under regular review, and we will place any updates on this web page.",
    },
    arabic: {
      title: "سياسة الخصوصية",
      homeButton: "الصفحة الرئيسية",
      lastUpdated: "آخر تحديث:",
      effectiveDate: "17 نوفمبر 2025",

      // Introduction
      intro1: `يصف بيان الخصوصية هذا الممارسات التي تتبعها برمجيات iNutriCal (ويُشار إليها فيما بعد بـ "البرنامج" أو "نحن" أو "خاصتنا") فيما يتعلق بجمع المعلومات واستخدامها والإفصاح عنها من مستخدمينا ("المستخدم" أو "أنت"). يوضح هذا البيان كيف نحافظ على خصوصيتك ونحمي سرية المعلومات التي نجمعها عند استخدامك لموقعنا الإلكتروني على الرابط https://inutrical.net/login ("الموقع الإلكتروني").`,
      intro2: `تلتزم شركتنا بحماية خصوصية وأمن المعلومات الشخصية التي نتلقاها ونجمعها منك عبر هذا الموقع الإلكتروني. نحن نؤمن بالشفافية وملتزمون بإبلاغك بكيفية التعامل مع معلوماتك الشخصية. ينطبق بيان الخصوصية هذا أيضًا على المعلومات الشخصية أو الطبية الخاصة بالمرضى التي يقدمها المستخدم. ويُعد هذا الإصدار من بيان الخصوصية ساريًا اعتبارًا من 17 نوفمبر 2025.`,

      // Warning Notice
      warning: `يرجى قراءة إشعار الخصوصية هذا بعناية لفهم كيفية تعاملنا مع معلوماتك الشخصية وما هي الخيارات والحقوق المتاحة لك. إذا كنت لا توافق على الشروط والأحكام الواردة في هذا الإشعار، فلا ينبغي لك استخدام الموقع الإلكتروني أو أي خدمات يتم تقديمها من خلاله.`,

      // Information Collection
      infoCollectionTitle: "جمع المعلومات",
      infoCollectionIntro: "تشمل أنواع المعلومات التي نجمعها ما يلي:",
      infoCollectionItems: [
        "معلومات الاتصال، مثل اسمك وعنوانك والبريد الإلكتروني ورقم الهاتف وتفاصيل التواصل الأخرى. نقوم عادةً بجمع هذه المعلومات للرد على طلباتك المقدمة عبر موقعنا الإلكتروني للحصول على خدماتنا، بما في ذلك عروض الأسعار، التجارب المجانية، الإعلانات، أو الدعم الفني.",
        "معلومات حساب المستخدم، مثل معلومات الاتصال الخاصة بك، ومعلومات التعريف الأخرى، واسم المستخدم، وكلمة المرور المخصصة لك، ومعلومات التسجيل الأخرى اللازمة لإنشاء حسابك والحفاظ عليه. يمكنك تعديل أو تحديث معلومات حسابك في أي وقت.",
        "معلومات الاتصال التجارية، مثل معلومات التواصل، والمسمى الوظيفي، والدور الوظيفي، ومعلومات شخصية أخرى، وذلك للرد على طلباتك وتقديم المحتوى الذي طلبته لنفسك أو لصالح مؤسستك.",
        "معلومات الموقع، مثل عنوان بروتوكول الإنترنت (IP)، وبيانات الإنترنت، وتقنيات Wi-Fi أو Bluetooth أو أي تقنيات مشابهة لتتبع الموقع. نقوم بجمع هذه المعلومات لدعم التحليلات وتطوير المحتوى ولتعزيز أمان الموقع الإلكتروني وخدماتنا. ومع ذلك، لن نستخدم أو نفصح عن بيانات الجهاز إلا بعد إخفاء هويتها بشكل يمنعنا أو يمنع أي طرف ثالث من تحديد هويتك.",
        "ملفات تعريف الارتباط والتقنيات المشابهة، وهي ملفات صغيرة وتقنيات لتجميع وتتبع البيانات تمكّن بعض وظائف الموقع الإلكتروني. نستخدم هذه التقنيات لتتبع سلوك المستخدم، وإعداد تقارير إحصائية حول نشاط الموقع، وتعزيز أمان الموقع الإلكتروني وتحسينه.",
        'معلومات تقدمها طوعًا: نقوم بجمع المعلومات التي تقدمها لنا طوعًا عبر الموقع الإلكتروني. فعلى سبيل المثال، عند مشاركة تفاصيلك من خلال ميزة "اتصل بنا" على موقعنا، سيُطلب منك تقديم معلومات شخصية، مثل اسمك الكامل ورقم هاتفك والبريد الإلكتروني والمؤسسة التي تعمل لديها. قد نجمع أيضًا معلومات إضافية عند تفاعلك مع اتصالاتنا أو تواصلك مع فريق الدعم أو مراسلتنا عبر البريد الإلكتروني أو تقديم معلومات إضافية عن نفسك عبر استخدامك للموقع الإلكتروني.',
      ],
      infoCollectionEnd:
        "بالإضافة إلى المعلومات التي نجمعها مباشرة منك، قد نتلقى معلومات عنك من مصادر أخرى، بما في ذلك ممثل مؤسستك.",

      // Uses of Personal Information
      usesTitle: "استخداماتنا للمعلومات الشخصية",
      usesIntro:
        "بالإضافة إلى الاستخدامات الموضحة أعلاه، تستخدم شركتنا المعلومات الشخصية التي نجمعها عبر الموقع الإلكتروني للغايات التالية:",
      usesItems: [
        "تزويدك بالخدمات والمعلومات التي طلبتها، بما في ذلك التدريب والدعم المتعلق بخدمات التجربة المجانية.",
        "إدارة علاقتنا معك، بما في ذلك إدارة حسابك واتخاذ الخطوات اللازمة لتنفيذ علاقتنا التجارية مع مؤسستك.",
        "تحديد اهتمامات المستخدم واحتياجاته وتفضيلاته.",
        "إبلاغك بأي تغييرات تطرأ على موقعنا الإلكتروني أو الخدمات أو المحتوى الذي نقدمه.",
        "إجراء الأبحاث والتحليلات.",
        "تطوير منتجات وخدمات جديدة.",
        "تسويق خدماتنا إليك. ولن نرسل لك أي مواد تسويقية (بما في ذلك عبر البريد الإلكتروني) إلا بعد موافقتك، وسيكون بإمكانك إلغاء الاشتراك في أي وقت.",
        "الوفاء بالتزاماتنا القانونية ومتطلبات الامتثال، بما في ذلك حفظ السجلات وإجراء عمليات التدقيق.",
        "التحقيق في الانتهاكات وإنفاذ سياساتنا، والامتثال للأنظمة والقوانين أو الإجراءات القانونية، مثل أوامر الاستدعاء أو الطلبات الحكومية.",
        "ممارسة حقوقنا القانونية والدفاع عنها، أو الامتثال لأوامر المحاكم.",
      ],
      usesEnd:
        "لن نبيع بياناتك أو نشاركها مع أي طرف آخر دون موافقتك الصريحة. لديك الحق في إيقاف تواصلنا معك لأغراض التسويق في أي وقت.",

      // Disclosure of Personal Information
      disclosureTitle: "الإفصاح عن المعلومات الشخصية",
      disclosureIntro:
        "لن نشارك معلوماتك مع أي طرف ثالث خارج مؤسستنا إلا في الحالات الموضحة في هذا الإشعار.",
      tableHeaders: ["الفئة", "سياقات الإفصاح"],
      tableRows: [
        {
          category: "عمليات الاستحواذ",
          context:
            "إذا استحوذت شركة أخرى على برنامجنا، فسنشارك معلوماتك الشخصية مع تلك الشركة.",
        },
        {
          category: "الإفصاح بموافقتك",
          context:
            "قد نطلب موافقتك على مشاركة معلوماتك الشخصية مع أطراف ثالثة مستقلة غير مذكورة في هذا الإشعار. ولن يتم الإفصاح عن معلوماتك الشخصية في هذا السياق إلا بعد الحصول على موافقتك.",
        },
        {
          category: "الإفصاح دون موافقتك",
          context:
            "قد نفصح عن معلوماتك الشخصية استجابةً لطلبات قانونية، مثل أوامر المحكمة أو أوامر الاستدعاء، أو للامتثال للقوانين ذات الصلة. كما قد نشارك معلوماتك لحماية حقوقنا القانونية أو للدفاع ضد دعاوى قضائية أو للتحقيق في الأنشطة غير القانونية أو الاحتيال أو لحماية سلامة الأشخاص أو الممتلكات.",
        },
        {
          category: "مزودو الخدمات",
          context:
            "قد نشارك معلوماتك الشخصية مع مزودي الخدمات المتعاقدين معنا. قد يساعد هؤلاء المزوّدون في تشغيل الموقع الإلكتروني ودعم عمليات المعالجة للأغراض المشروعة المسموح بها بموجب القانون.",
        },
      ],

      // Access and Control
      accessTitle: "وصولك إلى المعلومات والتحكم فيها",
      accessIntro:
        'يمكنك إلغاء الاشتراك في أي اتصالات مستقبلية منا في أي وقت. ويمكنك القيام بما يلي من خلال التواصل معنا عبر زر "اتصل بنا" على موقعنا الإلكتروني:',
      accessItems: [
        "معرفة البيانات التي نحتفظ بها عنك، إن وُجدت.",
        "تعديل أو تصحيح أي بيانات نحتفظ بها عنك.",
        "طلب حذف بياناتك. يرجى ملاحظة أننا قد لا نتمكن من حذف البيانات إذا كانت لازمة للأغراض التي جُمعت من أجلها أو إذا كانت هناك أسباب قانونية للاحتفاظ بها.",
        "التعبير عن أي مخاوف لديك بشأن كيفية استخدام بياناتك.",
      ],

      // Security
      securityTitle: "الأمان",
      securityContent: [
        "تقوم شركتنا بتخزين ومعالجة البيانات الشخصية على خوادم موجودة في المملكة العربية السعودية. ونتخذ جميع الخطوات اللازمة والمناسبة لحماية خصوصية وأمن معلوماتك الشخصية ومعلومات مرضاك. نحن ملتزمون بحماية البيانات وفقًا للوائح وزارة الاتصالات وتقنية المعلومات في المملكة العربية السعودية. باستخدام موقعنا أو طلب خدماتنا، فإنك توافق على جمع وتخزين ومعالجة ونقل معلوماتك الشخصية ومعلومات مرضاك إلى الخوادم المتعاقد معها. نُطبق تدابير الحماية اللازمة عند إرسال معلومات حساسة (مثل معلومات المرضى والسجلات الطبية) عبر الموقع الإلكتروني، سواء عبر الإنترنت أو دون اتصال.",
        "يتم منح حق الوصول إلى المعلومات الشخصية فقط للموظفين الذين يحتاجون إليها لأداء مهامهم (مثل خدمة العملاء) أو موظفي الإدارة في المؤسسة التي تعمل بها. يتم تخزين الخوادم وأجهزة الكمبيوتر التي تحتوي على المعلومات الشخصية في بيئة آمنة داخل المملكة العربية السعودية، وسيتم تحديد تفاصيل نوع وموقع الخوادم في العقود الموقعة مع العملاء (المستشفيات). وفي حال حدوث خرق أمني يؤدي إلى وصول غير مصرح به إلى بياناتك، فسنقوم بإخطارك أو إخطار جهة عملك وفقًا للعقد.",
      ],

      // Data Retention
      retentionTitle: "سياسة الاحتفاظ بالبيانات",
      retentionContent:
        "لن يتم الاحتفاظ بمعلوماتك الشخصية لمدة أطول من اللازم للأغراض التي جُمعت من أجلها. وقد نحتفظ بالمعلومات لمدة أطول إذا كان ذلك ضروريًا للامتثال للالتزامات القانونية أو لحل النزاعات أو لإنفاذ الاتفاقيات.",

      // Other Websites
      otherWebsitesTitle: "مواقع إلكترونية أخرى",
      otherWebsitesContent: [
        "قد يحتوي موقعنا الإلكتروني على روابط لمواقع إلكترونية أخرى. ينطبق إشعار الخصوصية هذا على هذا الموقع فقط، وعند الانتقال إلى مواقع أخرى يجب عليك مراجعة سياسات الخصوصية الخاصة بها.",
        "لا تضمن شركتنا خصوصية أو أمان أو محتوى المواقع الإلكترونية التابعة لأطراف ثالثة، ولا تتحكم في جمعهم أو استخدامهم لمعلوماتك الشخصية، كما لا نؤيد أي منتجات أو خدمات أو محتوى يتم الوصول إليه عبر الروابط المضمّنة على هذا الموقع.",
      ],

      // Changes
      changesTitle: "التغييرات على إشعار الخصوصية",
      changesContent:
        "نقوم بمراجعة إشعار الخصوصية الخاص بنا بشكل دوري، وسيتم نشر أي تحديثات على هذه الصفحة.",
    },
  };

  const current = content[language];

  return (
    <div
      className="min-h-screen bgH text-white px-2"
      dir={language === "arabic" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="">
        <div className="container mx-auto  py-4">
          <div className="flex justify-between gap-5 max-sm:items-center items-start">
            {/* Home Button */}
            <a href="/" className="block mx-auto">
              <img
                src="/images/logo.png"
                alt="Logo"
                className={`max-w-[300px] cursor-pointer relative z-10  h-auto max-[800px]:w-full `}
              />
            </a>

            {/* Language Switcher */}
            <div className="language-switcher relative z-50">
              <div className=" w-10 h-8 bg-white/20 font-inter text-white rounded text-sm  relative overflow-hidden transition-all duration-500">
                {/* English */}
                <button
                  onClick={() => setLanguage("english")}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    language === "arabic"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-full"
                  }`}
                >
                  EN
                </button>

                {/* Arabic */}
                <button
                  onClick={() => setLanguage("arabic")}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    language === "english"
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <div className="container mx-auto font-inter max-w-4xl pb-10">
        <div className="  md:p-8" data-aos="fade-up">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold hero-heading mb-2 ">
            {current.title}
          </h1>

          {/* Last Updated */}
          <div className=" mb-8 text-white/70 text-xs">
            {current.lastUpdated} {current.effectiveDate}
          </div>

          {/* Content Container */}
          <div
            className={`prose prose-invert max-w-none prose-headings:text-white/70 prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-purple-400 ${
              language === "arabic" ? "text-right" : "text-left"
            }`}
          >
            {/* Introduction */}
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="leading-relaxed mb-4 font-medium hero-heading">
                {current.intro1}
              </p>
              <p className="leading-relaxed mb-4 font-medium hero-heading">
                {current.intro2}
              </p>
            </div>

            {/* Warning Notice */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-sm:p-2 my-4"
            >
              <p className="text-yellow-200 max-sm:text-sm font-medium text-center">
                {current.warning}
              </p>
            </div>

            {/* Information Collection */}
            <section data-aos="fade-up" data-aos-delay="200" className="my-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl  mt-3 mb-4 border-b border-white/10 pb-2">
                {current.infoCollectionTitle}
              </h2>
              <p className="leading-relaxed mb-2 text-[#CFB997]  ">
                {current.infoCollectionIntro}
              </p>
              <ul
                className={`space-y-3 mb-4 ${
                  language === "arabic" ? "pr-4" : "pl-4"
                }`}
              >
                {current.infoCollectionItems.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed hero-heading font-medium"
                  >
                    <span className="text-xl bg-white/70 mr-1 size-2 inline-block rounded-full "></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed hero-heading">
                {current.infoCollectionEnd}
              </p>
            </section>

            {/* Uses of Personal Information */}
            <section data-aos="fade-up" data-aos-delay="250" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {current.usesTitle}
              </h2>
              <p className="leading-relaxed mb-2 text-[#CFB997] ">
                {current.usesIntro}
              </p>
              <ul
                className={`space-y-2 mb-4  ${
                  language === "arabic" ? "pr-4" : "pl-4"
                }`}
              >
                {current.usesItems.map((item, index) => (
                  <li
                    key={index}
                    className="leading-relaxed hero-heading font-medium"
                  >
                    <span className="text-xl bg-white/70 mr-1 size-2 inline-block rounded-full "></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <p className="leading-relaxed">{current.usesEnd}</p>
            </section>

            {/* Disclosure of Personal Information */}
            <section data-aos="fade-up" data-aos-delay="300" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {current.disclosureTitle}
              </h2>
              <p className="leading-relaxed mb-5 text-[#CFB997] ">
                {current.disclosureIntro}
              </p>

              {/* Disclosure of Personal Information */}
              <section data-aos="fade-up" data-aos-delay="300" className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-2">
                  {current.disclosureTitle}
                </h2>
                <p className="leading-relaxed mb-6">
                  {current.disclosureIntro}
                </p>

                <div className="space-y-3">
                  {current.tableRows.map((row, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg border border-white/10 p-3"
                    >
                      <h3 className="text-lg font-semibold text-[#CFB997] mb-2">
                        {row.category}
                      </h3>
                      <p className="hero-heading font-normal leading-relaxed">
                        {row.context}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </section>

            {/* Access and Control */}
            <section data-aos="fade-up" data-aos-delay="350" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {current.accessTitle}
              </h2>
              <p className="leading-relaxed mb-5 text-[#CFB997] ">
                {current.accessIntro}
              </p>
              <ul
                className={`space-y-2 mb-4 ${
                  language === "arabic" ? "pr-4" : "pl-4"
                }`}
              >
                {current.accessItems.map((item, index) => (
                  <li
                    key={index}
                    className="   leading-relaxed hero-heading font-medium"
                  >
                    <span className="text-xl bg-white/70 mr-1 size-2 inline-block rounded-full "></span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Security */}
            <section data-aos="fade-up" data-aos-delay="400" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {current.securityTitle}
              </h2>
              {current.securityContent.map((paragraph, index) => (
                <p key={index} className="leading-relaxed hero-heading mb-4">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Data Retention */}
            <section data-aos="fade-up" data-aos-delay="450" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {current.retentionTitle}
              </h2>
              <p className="leading-relaxed hero-heading">
                {current.retentionContent}
              </p>
            </section>

            {/* Other Websites */}
            <section data-aos="fade-up" data-aos-delay="500" className="mb-8">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {" "}
                {current.otherWebsitesTitle}
              </h2>
              {current.otherWebsitesContent.map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-4 hero-heading">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Changes */}
            <section data-aos="fade-up" data-aos-delay="550">
              <h2 className="text-3xl font-semibold text-[#FAD6A5] max-sm:text-xl mt-3 mb-4 border-b border-white/10 pb-2">
                {" "}
                {current.changesTitle}
              </h2>
              <p className="leading-relaxed hero-heading">
                {current.changesContent}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
