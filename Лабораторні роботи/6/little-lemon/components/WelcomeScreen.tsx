import { StyleSheet, Text, View } from 'react-native';

export function WelcomeScreen() {
  return (
    <View>
      <Text style={styles.title}>Ласкаво просимо до Little Lemon</Text>

      <Text style={styles.paragraph}>
        Little Lemon — невелике сімейне бістро, у якому готують страви середземноморської кухні
        за рецептами, що передаються з покоління в покоління. Ми поєднуємо традиційні смаки
        з сучасною подачею.
      </Text>

      <Text style={styles.heading}>Наше меню</Text>
      <Text style={styles.paragraph}>
        У меню ви знайдете грецький салат зі свіжими овочами та фетою, брускети з томатами
        й базиліком, пасту з морепродуктами, а також лимонний десерт, на честь якого названо
        наш заклад. Щосезону ми додаємо нові страви з місцевих продуктів.
      </Text>

      <Text style={styles.heading}>Чим ми вирізняємося</Text>
      <Text style={styles.paragraph}>
        Усі соуси та випічку ми готуємо самостійно щоранку. Овочі та зелень постачають
        фермери з найближчих господарств, тому страви завжди свіжі. Для гостей із
        харчовими обмеженнями є вегетаріанські та безглютенові позиції.
      </Text>

      <Text style={styles.heading}>Для кого ми працюємо</Text>
      <Text style={styles.paragraph}>
        Ми раді студентам, які забігають на швидкий обід між парами, родинам, що
        збираються на вечерю, і друзям, які хочуть спокійно поговорити за келихом
        лимонаду. У закладі є затишна тераса та окрема зала для невеликих свят.
      </Text>

      <Text style={styles.heading}>Години роботи</Text>
      <Text style={styles.paragraph}>
        Понеділок — п’ятниця: з 10:00 до 22:00. Субота та неділя: з 11:00 до 23:00.
        Столик можна забронювати телефоном або на місці. Чекаємо на вас!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#F4CE14',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heading: {
    color: '#EE9972',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    color: '#EDEFEE',
    fontSize: 16,
    lineHeight: 24,
  },
});
