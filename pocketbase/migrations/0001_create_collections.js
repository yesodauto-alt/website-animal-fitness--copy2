migrate(
  (app) => {
    const plansCol = new Collection({
      name: 'plans',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'price', type: 'number', required: true, min: 0 },
        { name: 'description', type: 'text' },
        { name: 'features', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(plansCol)

    const classesCol = new Collection({
      name: 'classes',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'instructor', type: 'text', required: true },
        { name: 'time_slot', type: 'text', required: true },
        { name: 'day_of_week', type: 'text', required: true },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(classesCol)

    const plansId = app.findCollectionByNameOrId('plans').id
    const leadsCol = new Collection({
      name: 'leads',
      type: 'base',
      listRule: null,
      viewRule: null,
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        { name: 'full_name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' },
        { name: 'message', type: 'text' },
        {
          name: 'interest_plan',
          type: 'relation',
          collectionId: plansId,
          maxSelect: 1,
          required: false,
        },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(leadsCol)
  },
  (app) => {
    try {
      const leads = app.findCollectionByNameOrId('leads')
      app.delete(leads)
    } catch (_) {}
    try {
      const classes = app.findCollectionByNameOrId('classes')
      app.delete(classes)
    } catch (_) {}
    try {
      const plans = app.findCollectionByNameOrId('plans')
      app.delete(plans)
    } catch (_) {}
  },
)
