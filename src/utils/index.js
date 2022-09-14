export const mobileAndTabletCheck = () => {
    if (typeof window !== 'undefined') {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            window?.navigator?.userAgent,
        );
    }
    return false;
};

export const navList = [
    {
        navName: 'تواصل معنا',
        pathName:'/contact-us'
    },
    {
        navName: 'انضم الينا',
        pathName:'contact-us'
    },
    {
        navName: 'المدونة',
        pathName:'/artical'
    },
    {
        navName: 'فريق العمل',
        pathName:'/contact-us'
    },
    {
        navName: 'مجالات الممارسة',
        pathName:'/practice-areas'
    },
    {
        navName: 'من نحن',
        pathName:'/about-us'
    },
];

export const footerList = [
    {
        navName: 'الرئيسية',
        pathName:'/about-us'
    },
    {
        navName: 'من نحن',
        pathName:'/artical'
    },
    {
        navName: 'مجالات الممارسة ',
        pathName:'/contact-us'
    },
    {
        navName: 'فريق العمل ',
        pathName:'/practice-areas'
    },
    {
        navName: 'عملاؤنا',
        pathName:'/about-us'
    },
    {
        navName: 'انضم الينا',
        pathName:'/about-us'
    },
];

export const practiceArray = [
    { text: 'حوادث السيارات ' },
    { text: 'حوادث السيارات ' }, { text: 'حقوق الملكية ' }, { text: 'حوادث السيارات ' }];

export const feedbackArray = [
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
    {
        mainText: 'هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)المطابع ودور  النشر.كان لوريم إيبسوم المعيار للنص      الشكلي منذ القرن الخامس عشر ',
        personName: 'لوريم إيبسوم',
        otherText: 'ببساطة نص'
    },
]
