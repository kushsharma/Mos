// 文本国际化
// HTML 绑定对应 ID, 此处查找 ID, 将预设的文字替换入内

(function () {
    // 浏览器语系
    var userAgentLanguage = window.navigator.language.toLowerCase()
    // 页面语系
    var pageLanguage = document.querySelector("html").lang
    // 国际化对照表
    var i18nLanguageMappingList = {
        title: {
            zh: "MOS | 一个用于在 MacOS 上平滑你的鼠标滚动效果或单独设置滚动方向的小工具, 让你的滚轮爽如触控板",
            en: "MOS | A lightweight tool used to smooth scrolling and set scroll direction independently for your mouse on MacOS",
            ru: "MOS | Легкий инструмент, используемый для плавной прокрутки и установки направления прокрутки независимо для вашей мыши на MacOS"
        },
        information: {
            zh: "一个用于在 MacOS 上平滑你的鼠标滚动效果或单独设置滚动方向的小工具, 让你的滚轮爽如触控板",
            en: "A lightweight tool used to smooth scrolling and set scroll direction independently for your mouse on MacOS",
            ru: "Легкий инструмент, используемый для плавной прокрутки и установки независимого направления прокрутки для вашей мыши на MacOS"
        },
        detailTitleA: {
            zh: "现在, 完全掌控你的鼠标",
            en: "Take Full Control of Your Mouse",
            ru: "Полный контроль над мышью"
        },
        detailTextA: {
            zh: "Mos 可以分离你的触控板与鼠标的滚动事件, 皆因与此, 鼠标的滚动方向再也不受触控板所限. 同时, Mos 还可以为你的鼠标提供平滑滚动, 不管你是 Windows 用户, 亦或是 MacOS 用户, 均可切换自如",
            en: "Mos separates touchpad and mouse scrolls independently, then, you can set the direction of the touchpad and mouse wheel separately. Also, Mos providing smooth scrolling for your mouse, whether you are a Windows user or a MacOS, you can move freely.",
            ru: "Mos разделяет прокрутку тачпада и мыши, вы можете установить направление прокрутки сенсорной панели и колесика мыши отдельно. Кроме того, Mos обеспечивает плавную прокрутку для вашей мыши, независимо от того, являетесь ли вы пользователем Windows или MacOS."
        },
        detailTitleB: {
            zh: "滚动, 从未如此顺手",
            en: "Scrolling, Never So Smooth",
            ru: "Максимальная плавность"
        },
        detailTextB: {
            zh: "经过 Mos 独特的插值算法处理后, 您的鼠标滚动将会变得前所未有的顺滑",
            en: "The Mos's special interpolation algorithm can make every mouse roll as smooth and silky as possible.",
            ru: "Специальный алгоритм интерполяции Mos может сделать любую мышку более гладкой и шелковистой."
        },
        detailTitleC: {
            zh: "所有应用, 尽在管理之下",
            en: "Each Program is Under Management",
            ru: "Каждая программа под контролем"
        },
        detailTextC: {
            zh: "Mos 可以独立管理每个应用程序的滚动行为. 对付某些恼人的程序, 交给我们解决",
            en: "Mos can independently manage the scrolling behavior of each application. For some annoying programs, we help you.",
            ru: "Mos может самостоятельно управлять поведением прокрутки каждого приложения."
        },
        suggestionTitle: {
            zh: "那么, 你还在等什么呢",
            en: "So, what are you waiting for?",
            ru: "Так чего же вы ждете?"
        },
        createBy: {
            zh: "设计与创作由 ",
            en: "Create & Design by ",
            ru: "Создано и разработано "
        },
        createAnd: {
            zh: "完成, 以及所有的",
            en: ", and all the",
            ru: ", и всеми"
        },
        contributors: {
            zh: "贡献者们",
            en: "contributors",
            ru: "разработчиками"
        },
        and: {
            zh: "以及",
            en: "and",
            ru: "и"
        },
        members: {
            zh: "所有社区成员们",
            en: "social members",
            ru: "участниками сообщества"
        },
        poweredBy: {
            zh: "自豪地采用 ",
            en: "Powered by ",
            ru: "Работает на "
        },
        unique: {
            zh: "献给每一位有追求的 MacOS 用户",
            en: "For every pursuing MacOS users",
            ru: "Посвящается каждому пользователю MacOS"
        },
        downloadNow: {
            zh: "马上下载",
            en: "Download Now",
            ru: "Скачать сейчас"
        },
        downloadNowButton: {
            zh: "马上下载",
            en: "Download Now",
            ru: "Скачать сейчас"
        },
        version: {
            zh: "版本 ",
            en: "Version ",
            ru: "Версия "
        },
        versionRequire: {
            zh: ", 要求 macOS 10.11 或更新版本",
            en: ", requires macOS 10.11 or later",
            ru: ", требуется macOS 10.11 или более поздняя версия"
        }
    }
    // 国际化页面文字
    function translate(language) {
        // 目标语系 (手动指定, 默认由浏览器提供)
        var targetLanguage = language || userAgentLanguage
        // 如果目标语系与当前页面提供语系不同, 则开始翻译
        if (targetLanguage !== pageLanguage) {
            // 遍历国际化对照表
            Object.keys(i18nLanguageMappingList).forEach(function (translationKeyword) {
                // 获取每个关键字的国际化映射表
                var multiLanguages = i18nLanguageMappingList[translationKeyword]
                // 匹配语言, 如果找到对应映射, 则替换标签内原字符
                if (multiLanguages[targetLanguage]) {
                    // 精确匹配 (完全相同)
                    document.querySelector("#"+translationKeyword).innerText = multiLanguages[targetLanguage]
                } else if (multiLanguages[targetLanguage.substring(0, 2)]) {
                    // 模糊匹配 (仅匹配目标语系的前两个字符, 也就是国家代码)
                    document.querySelector("#"+translationKeyword).innerText = multiLanguages[targetLanguage.substring(0, 2)]
                }
            })
        }
    }
    // 开始翻译页面
    translate()
})()