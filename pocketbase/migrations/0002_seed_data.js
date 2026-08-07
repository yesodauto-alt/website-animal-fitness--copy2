migrate(
  (app) => {
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'camilimag@gmail.com')
    } catch (_) {
      const usersCol = app.findCollectionByNameOrId('_pb_users_auth_')
      const adminUser = new Record(usersCol)
      adminUser.setEmail('camilimag@gmail.com')
      adminUser.setPassword('Skip@Pass')
      adminUser.setVerified(true)
      adminUser.set('name', 'Admin Animal')
      app.save(adminUser)
    }

    const plansCol = app.findCollectionByNameOrId('plans')
    const plansData = [
      {
        name: 'Plano Mensal LIFE',
        price: 189,
        description: 'Ideal para manter constância com até 3 check-ins semanais.',
        features: [
          'Até 3 check-ins por semana',
          'Acesso à musculação e área cardio',
          'Acompanhamento dos coaches',
          'App exclusivo do aluno',
        ],
      },
      {
        name: 'Plano Anual TOP',
        price: 249,
        description: 'Acesso livre e ilimitado a todas as modalidades e horários.',
        features: [
          'Check-ins ilimitados todos os dias',
          'Musculação + Cross completo',
          'Acompanhamento personalizado',
          'Acesso a eventos da comunidade',
          'Sem taxa de cancelamento após 1 ano',
        ],
      },
      {
        name: 'Plano Estudante & Atleta',
        price: 159,
        description: 'Condição especial para estudantes e atletas praticantes.',
        features: [
          'Acesso completo nos horários de menor pico',
          'Acompanhamento de coaches',
          'Avaliação física semestral',
          'Comunidade e grupos de treino',
        ],
      },
    ]

    for (let i = 0; i < plansData.length; i++) {
      const p = plansData[i]
      try {
        app.findFirstRecordByData('plans', 'name', p.name)
      } catch (_) {
        const rec = new Record(plansCol)
        rec.set('name', p.name)
        rec.set('price', p.price)
        rec.set('description', p.description)
        rec.set('features', JSON.stringify(p.features))
        app.save(rec)
      }
    }

    const classesCol = app.findCollectionByNameOrId('classes')
    const classesData = [
      {
        title: 'CrossFit WOD Heavy',
        instructor: 'Coach Bernardo',
        time_slot: '07:00 - 08:00',
        day_of_week: 'Segunda-feira',
      },
      {
        title: 'Musculação & Hipertrofia',
        instructor: 'Coach Camila',
        time_slot: '08:30 - 09:30',
        day_of_week: 'Terça-feira',
      },
      {
        title: 'CrossFit Conditioning',
        instructor: 'Coach Rafael',
        time_slot: '18:00 - 19:00',
        day_of_week: 'Quarta-feira',
      },
      {
        title: 'Powerlifting & Força',
        instructor: 'Coach Lucas',
        time_slot: '19:15 - 20:15',
        day_of_week: 'Quinta-feira',
      },
      {
        title: 'Cross & Mobilidade',
        instructor: 'Coach Juliana',
        time_slot: '17:30 - 18:30',
        day_of_week: 'Sexta-feira',
      },
      {
        title: 'Saturday Community WOD',
        instructor: 'Equipe de Coaches',
        time_slot: '09:00 - 10:30',
        day_of_week: 'Sábado',
      },
    ]

    for (let j = 0; j < classesData.length; j++) {
      const c = classesData[j]
      try {
        app.findFirstRecordByData('classes', 'title', c.title)
      } catch (_) {
        const rec = new Record(classesCol)
        rec.set('title', c.title)
        rec.set('instructor', c.instructor)
        rec.set('time_slot', c.time_slot)
        rec.set('day_of_week', c.day_of_week)
        app.save(rec)
      }
    }
  },
  (app) => {},
)
