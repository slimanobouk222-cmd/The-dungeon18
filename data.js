/* ============================================
   TRANSLATIONS DICTIONARY
   كل النصوص الثابتة في الموقع، بالعربية والإنجليزية
   ============================================ */
const translations = {
  ar: {
    page_title: "الدليل الشامل للتدريب",
    brand: "الحديد",
    nav_calc: "الحاسبات",
    nav_exercises: "التمارين",
    nav_nutrition: "التغذية",
    nav_coach: "خدمات المدرب",

    hero_eyebrow: "دليل التدريب الشخصي",
    hero_title: "جسمك، ورقم تدربه عليه",
    hero_sub: "كل ما يحتاجه المتدرب من حاسبات السعرات والماكروز، إلى برامج التمارين وخطط التغذية، في مكان واحد مصمم من مدرب لتلامذته.",
    hero_cta1: "ابدأ بحساباتك",
    hero_cta2: "تصفح التمارين",

    stat1: "حاسبات دقيقة",
    stat2: "تمرين موزّع على المجموعات العضلية",
    stat3: "نصائح تغذية أساسية",
    stat4: "إمكانية تخصيص حسب هدفك",

    calc_title: "الحاسبات الرياضية",
    calc_sub: "أدخل بياناتك للحصول على أرقام دقيقة تساعدك على بناء خطتك الغذائية والتدريبية.",
    tab_bmi: "مؤشر كتلة الجسم",
    tab_tdee: "السعرات اليومية",
    tab_macro: "الماكروز",

    label_weight: "الوزن (كغ)",
    label_height: "الطول (سم)",
    label_age: "العمر",
    label_gender: "الجنس",
    label_activity: "مستوى النشاط",
    label_calories: "السعرات اليومية المستهدفة",
    label_goal: "الهدف",
    btn_calc: "احسب",
    result_placeholder: "ستظهر النتيجة هنا",

    gender_male: "ذكر",
    gender_female: "أنثى",

    act_1: "قليل الحركة (عمل مكتبي)",
    act_2: "نشاط خفيف (1-3 أيام تمرين)",
    act_3: "نشاط متوسط (3-5 أيام تمرين)",
    act_4: "نشاط عالي (6-7 أيام تمرين)",
    act_5: "نشاط مكثف (تمرين بدني مضاعف)",

    goal_cut: "تنشيف (خسارة دهون)",
    goal_maintain: "المحافظة على الوزن",
    goal_bulk: "تضخيم (زيادة كتلة)",

    bmi_underweight: "نقص في الوزن",
    bmi_normal: "وزن طبيعي",
    bmi_over: "وزن زائد",
    bmi_obese: "سمنة",

    tdee_result_label: "سعراتك اليومية للحفاظ على وزنك الحالي",
    tdee_cut_label: "للتنشيف (عجز 20%)",
    tdee_bulk_label: "للتضخيم (زيادة 15%)",

    macro_protein: "بروتين",
    macro_carbs: "كاربوهيدرات",
    macro_fat: "دهون",
    macro_per_day: "يومياً",

    ex_title: "مكتبة التمارين",
    ex_sub: "اختر المجموعة العضلية لعرض التمارين المناسبة لها مع التكرارات المقترحة.",
    filter_all: "الكل",

    nut_title: "أساسيات التغذية",
    nut_sub: "قواعد عملية يطبّقها كل متدرب بغض النظر عن هدفه.",

    coach_title: "خدمات المدرب",
    coach_sub: "برامج تدريب مصممة خصيصاً لمتابعة مستمرة وتعديل حسب تطورك.",

    footer_text: "دليلك الشامل للتدريب والتغذية — بناه مدربك لتسهيل طريقك.",

    sets_reps: "مجموعات × تكرارات",
  },

  en: {
    page_title: "The Complete Training Guide",
    brand: "IRON",
    nav_calc: "Calculators",
    nav_exercises: "Exercises",
    nav_nutrition: "Nutrition",
    nav_coach: "Coaching",

    hero_eyebrow: "Personal Training Guide",
    hero_title: "Your body, and the numbers behind it",
    hero_sub: "Everything a trainee needs — calorie and macro calculators, workout programs, and nutrition plans — in one place, built by a coach for their athletes.",
    hero_cta1: "Start with your numbers",
    hero_cta2: "Browse exercises",

    stat1: "precise calculators",
    stat2: "exercises across muscle groups",
    stat3: "core nutrition tips",
    stat4: "fully customizable to your goal",

    calc_title: "Training Calculators",
    calc_sub: "Enter your data to get accurate numbers for building your training and nutrition plan.",
    tab_bmi: "Body Mass Index",
    tab_tdee: "Daily Calories",
    tab_macro: "Macros",

    label_weight: "Weight (kg)",
    label_height: "Height (cm)",
    label_age: "Age",
    label_gender: "Gender",
    label_activity: "Activity Level",
    label_calories: "Target Daily Calories",
    label_goal: "Goal",
    btn_calc: "Calculate",
    result_placeholder: "Your result will appear here",

    gender_male: "Male",
    gender_female: "Female",

    act_1: "Sedentary (desk job)",
    act_2: "Light activity (1-3 days/week)",
    act_3: "Moderate activity (3-5 days/week)",
    act_4: "High activity (6-7 days/week)",
    act_5: "Very active (intense daily training)",

    goal_cut: "Cutting (fat loss)",
    goal_maintain: "Maintenance",
    goal_bulk: "Bulking (muscle gain)",

    bmi_underweight: "Underweight",
    bmi_normal: "Normal weight",
    bmi_over: "Overweight",
    bmi_obese: "Obese",

    tdee_result_label: "Daily calories to maintain current weight",
    tdee_cut_label: "For cutting (20% deficit)",
    tdee_bulk_label: "For bulking (15% surplus)",

    macro_protein: "Protein",
    macro_carbs: "Carbs",
    macro_fat: "Fat",
    macro_per_day: "per day",

    ex_title: "Exercise Library",
    ex_sub: "Pick a muscle group to see suggested exercises with sets and reps.",
    filter_all: "All",

    nut_title: "Nutrition Essentials",
    nut_sub: "Practical rules every trainee should apply, regardless of goal.",

    coach_title: "Coaching Services",
    coach_sub: "Training programs tailored to you, with ongoing follow-up and adjustments.",

    footer_text: "Your complete guide to training and nutrition — built by your coach to make the path easier.",

    sets_reps: "sets × reps",
  }
};

/* ============================================
   EXERCISE LIBRARY
   ============================================ */
const exercises = [
  // Chest
  { group: "chest", name_ar: "ضغط بنش بار", name_en: "Barbell Bench Press", sets: "4 × 6-10", desc_ar: "تمرين أساسي لبناء الصدر والقوة العلوية.", desc_en: "Core compound move for chest mass and upper-body strength." },
  { group: "chest", name_ar: "ضغط دامبل بزاوية", name_en: "Incline Dumbbell Press", sets: "3 × 8-12", desc_ar: "يركز على الجزء العلوي من الصدر.", desc_en: "Targets the upper chest fibers." },
  { group: "chest", name_ar: "تفتيح كابلات", name_en: "Cable Fly", sets: "3 × 12-15", desc_ar: "تمرين عزل لتفصيل عضلة الصدر.", desc_en: "Isolation move for chest definition." },

  // Back
  { group: "back", name_ar: "عقلة (Pull-up)", name_en: "Pull-up", sets: "4 × حتى الفشل", desc_ar: "يبني عرض الظهر والقوة العامة.", desc_en: "Builds back width and overall pulling strength." },
  { group: "back", name_ar: "سحب بار أرضي", name_en: "Barbell Row", sets: "4 × 6-10", desc_ar: "يبني كثافة الظهر وقوة السحب.", desc_en: "Builds back thickness and pulling power." },
  { group: "back", name_ar: "سحب كابل أمامي", name_en: "Lat Pulldown", sets: "3 × 10-12", desc_ar: "بديل للعقلة لتقوية عضلات الظهر العريضة.", desc_en: "Pull-up alternative to strengthen the lats." },
  { group: "back", name_ar: "رفعة ميتة", name_en: "Deadlift", sets: "4 × 4-6", desc_ar: "تمرين شامل للظهر السفلي والأرجل والقوة العامة.", desc_en: "Full posterior chain movement for total-body strength." },

  // Legs
  { group: "legs", name_ar: "سكوات بار", name_en: "Barbell Squat", sets: "4 × 6-10", desc_ar: "الملك بين تمارين الأرجل، يبني الفخذين والمؤخرة.", desc_en: "The king of leg exercises — builds quads and glutes." },
  { group: "legs", name_ar: "لانجز", name_en: "Lunges", sets: "3 × 10-12 لكل رجل", desc_ar: "يحسن التوازن ويقوي كل رجل بشكل منفرد.", desc_en: "Improves balance and trains each leg independently." },
  { group: "legs", name_ar: "ضغط أرجل (Leg Press)", name_en: "Leg Press", sets: "4 × 10-12", desc_ar: "يسمح برفع أوزان عالية بأمان لبناء الفخذين.", desc_en: "Allows heavy loading safely for quad development." },
  { group: "legs", name_ar: "رفعة رومانية", name_en: "Romanian Deadlift", sets: "3 × 8-12", desc_ar: "يركز على عضلات الخلفية والمؤخرة.", desc_en: "Targets hamstrings and glutes." },

  // Shoulders
  { group: "shoulders", name_ar: "ضغط أوفر هيد", name_en: "Overhead Press", sets: "4 × 6-10", desc_ar: "يبني قوة وحجم الأكتاف بشكل عام.", desc_en: "Builds overall shoulder strength and size." },
  { group: "shoulders", name_ar: "رفرفة جانبية", name_en: "Lateral Raise", sets: "3 × 12-15", desc_ar: "يوسع الكتف من الجوانب.", desc_en: "Widens the shoulders by targeting the side delts." },
  { group: "shoulders", name_ar: "رفرفة خلفية", name_en: "Rear Delt Fly", sets: "3 × 12-15", desc_ar: "يقوي الجزء الخلفي من الكتف ويحسن الوضعية.", desc_en: "Strengthens rear delts and improves posture." },

  // Arms
  { group: "arms", name_ar: "كيرل بار", name_en: "Barbell Curl", sets: "3 × 8-12", desc_ar: "تمرين أساسي لبناء البايسبس.", desc_en: "Classic mass builder for the biceps." },
  { group: "arms", name_ar: "تمرين الترايسبس بالحبل", name_en: "Triceps Rope Pushdown", sets: "3 × 10-15", desc_ar: "يعزل الترايسبس لتحديد الذراع.", desc_en: "Isolates the triceps for arm definition." },
  { group: "arms", name_ar: "ضغط فرنسي", name_en: "Skull Crusher", sets: "3 × 8-12", desc_ar: "يبني حجم الترايسبس بشكل فعال.", desc_en: "Effectively builds triceps mass." },

  // Core
  { group: "core", name_ar: "بلانك", name_en: "Plank", sets: "3 × 30-60 ثانية", desc_ar: "يقوي عضلات البطن العميقة والثبات.", desc_en: "Builds deep core strength and stability." },
  { group: "core", name_ar: "تمرين الكرنش", name_en: "Crunches", sets: "3 × 15-20", desc_ar: "يستهدف عضلات البطن العلوية.", desc_en: "Targets the upper abdominal muscles." },
  { group: "core", name_ar: "رفع الأرجل معلق", name_en: "Hanging Leg Raise", sets: "3 × 10-15", desc_ar: "يستهدف أسفل البطن بشكل فعال.", desc_en: "Effectively targets the lower abs." },

  // Cardio
  { group: "cardio", name_ar: "جري متقطع (HIIT)", name_en: "HIIT Sprints", sets: "8-10 جولات", desc_ar: "يحرق الدهون بسرعة ويحسن القدرة الهوائية.", desc_en: "Burns fat fast and improves cardiovascular capacity." },
  { group: "cardio", name_ar: "مشي بالميل", name_en: "Incline Treadmill Walk", sets: "30-45 دقيقة", desc_ar: "كارديو منخفض الشدة، مناسب لمرحلة التنشيف.", desc_en: "Low-intensity cardio, great for cutting phases." },
  { group: "cardio", name_ar: "حبل القفز", name_en: "Jump Rope", sets: "5 × 2 دقيقة", desc_ar: "يحسن اللياقة والتنسيق الحركي.", desc_en: "Improves conditioning and coordination." },
];

const muscleGroups = [
  { key: "all", ar: "الكل", en: "All" },
  { key: "chest", ar: "صدر", en: "Chest" },
  { key: "back", ar: "ظهر", en: "Back" },
  { key: "legs", ar: "أرجل", en: "Legs" },
  { key: "shoulders", ar: "أكتاف", en: "Shoulders" },
  { key: "arms", ar: "ذراعين", en: "Arms" },
  { key: "core", ar: "بطن", en: "Core" },
  { key: "cardio", ar: "كارديو", en: "Cardio" },
];

/* ============================================
   NUTRITION TIPS
   ============================================ */
const nutritionTips = [
  { icon: "🥩", title_ar: "البروتين أولاً", title_en: "Protein first", text_ar: "استهدف 1.6 إلى 2.2 غرام بروتين لكل كيلوغرام من وزن جسمك يومياً للحفاظ على العضلات وبنائها.", text_en: "Aim for 1.6–2.2g of protein per kg of bodyweight daily to maintain and build muscle." },
  { icon: "💧", title_ar: "الماء شرط لا اختيار", title_en: "Water is non-negotiable", text_ar: "اشرب 30-40 مل من الماء لكل كيلوغرام من وزنك، خاصة في أيام التمرين.", text_en: "Drink 30–40ml of water per kg of bodyweight, especially on training days." },
  { icon: "🍚", title_ar: "الكارب وقود التمرين", title_en: "Carbs fuel performance", text_ar: "لا تخف من الكارب، فهو المصدر الأساسي للطاقة أثناء التمارين الشاقة.", text_en: "Don't fear carbs — they're the primary fuel source for intense training." },
  { icon: "🥑", title_ar: "الدهون الصحية ضرورية", title_en: "Healthy fats matter", text_ar: "حافظ على نسبة 20-30% من سعراتك من الدهون الصحية لدعم الهرمونات.", text_en: "Keep 20–30% of your calories from healthy fats to support hormone production." },
  { icon: "⏰", title_ar: "توقيت الوجبات", title_en: "Meal timing", text_ar: "وزّع وجباتك على 3-5 وجبات يومياً للحفاظ على مستوى طاقة ثابت.", text_en: "Spread meals across 3–5 sittings a day to keep energy levels stable." },
  { icon: "😴", title_ar: "النوم جزء من التغذية", title_en: "Sleep is part of nutrition", text_ar: "7-9 ساعات نوم يومياً ضرورية لاستشفاء العضلات وتنظيم الهرمونات.", text_en: "7–9 hours of sleep nightly is essential for muscle recovery and hormone balance." },
  { icon: "📊", title_ar: "تتبع تقدمك", title_en: "Track your progress", text_ar: "سجّل وزنك وقياساتك أسبوعياً لتعديل سعراتك حسب النتائج الفعلية.", text_en: "Log your weight and measurements weekly to adjust calories based on real results." },
];

/* ============================================
   COACH SERVICES
   ============================================ */
const coachServices = [
  { icon: "📋", title_ar: "برنامج تدريبي مخصص", title_en: "Custom Training Program", text_ar: "خطة تمارين أسبوعية مبنية على هدفك ومستواك ومعداتك المتاحة.", text_en: "A weekly workout plan built around your goal, level, and available equipment." },
  { icon: "🍽️", title_ar: "خطة تغذية شخصية", title_en: "Personal Nutrition Plan", text_ar: "حساب سعرات وماكروز دقيق مع قائمة وجبات قابلة للتبديل.", text_en: "Precise calorie and macro targets with a flexible meal list." },
  { icon: "📞", title_ar: "متابعة أسبوعية", title_en: "Weekly Check-ins", text_ar: "مراجعة تقدمك أسبوعياً وتعديل البرنامج حسب النتائج.", text_en: "Weekly progress reviews with program adjustments based on results." },
  { icon: "🎥", title_ar: "تصحيح الأداء", title_en: "Form Correction", text_ar: "إرسال فيديو لأداء التمرين والحصول على ملاحظات مباشرة.", text_en: "Send a video of your lift and get direct feedback on your form." },
];
