apps =  {
      name: 'אנגלית',
      type: 'menu',
      items: [
        {icon: 'volume_up', name:'אותיות גדולות', type: 'app', appType: 'mcq', listName: 'ABC', questionIndex: 'audio', resultIndex: 'englishUpperCase', setItems: 2},
        {icon: 'volume_up', name:'אותיות קטנות', type: 'app', appType: 'mcq', listName: 'ABC', questionIndex: 'audio', resultIndex: 'englishLowerCase', setItems: 2},
        {icon: 'format_size', name:'אות קטנה לגדולה', type: 'app', appType: 'mcq', listName: 'ABC', questionIndex: 'englishLowerCase', resultIndex: 'englishUpperCase' , setItems: 2},
        {icon: 'format_size', name:'אות גדולה לקטנה', type: 'app', appType: 'mcq', listName: 'ABC', questionIndex: 'englishUpperCase', resultIndex: 'englishLowerCase', setItems: 2},
        {icon: 'format_shapes', name:'מצא זוג אותיות', type: 'app', appType: 'common', listName: 'ABC', a: 'englishUpperCase', b:'englishLowerCase', setItems: 10},
        {icon: 'format_shapes', name:'אותיות מבלבלות', type: 'app', appType: 'mcq', listName: 'CONFUSING_LETTERS', questionIndex: 'audio', resultIndex:'confusingLetter', setItems: 5},
        {icon: 'format_shapes', name:'כתיבת אותיות', type: 'app', appType: 'draw_letter', listName: 'ABC', questionIndex: 'audio', resultIndex:'englishUpperCase', setItems: 5, title:'כתוב את האות הגדולה'},
      ]
    };
