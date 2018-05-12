export default {
  initial: 'welcome',
  state: {
    chatType: 'default',
    chatName: '',
    alg: 'rc4',
    accessMode: 'open'
  },
  screens: {
    welcome: {
      title: 'Привет!',
      stepCounter: [1, 3],
      content: [
        { type: 'p', value: 'Добро пожаловать на SuperChat.com!' },
        { type: 'p', value: 'Это сервис для организации совместных покупок 🔥' }
      ],
      transitions: {
        center: {
          label: 'Все понятно',
          to: 'settings'
        }
      }
    },

    settings: {
      title: 'Настройки',
      stepCounter: [2, 3],
      content: [
        {
          type: 'input',
          name: 'chatName',
          label: 'Название чата:'
        },
        {
          type: 'select',
          name: 'chatType',
          label: 'Тип чата:',
          options: [
            { value: 'default', label: 'обычный 😐' },
            { value: 'secret', label: 'секретный 👮' },
            { value: 'group', label: 'групповой 👥' }
          ]
        },
        {
          type: 'condition',
          condition: {
            name: 'chatType',
            equals: 'secret',
            content: [
              {
                type: 'p',
                value:
                  'Вы выбрали секретный чат, пожалуйста, укажите алгоритм шифрования'
              },
              {
                type: 'select',
                name: 'alg',
                label: 'Алгоритм:',
                options: [
                  { value: 'rc4', label: 'RC4 🐓' },
                  { value: 'rsa', label: 'RSA 🐅' }
                ]
              }
            ]
          }
        },
        {
          type: 'condition',
          condition: {
            name: 'chatType',
            equals: 'group',
            content: [
              {
                type: 'p',
                value:
                  'Вы выбрали групповой чат, пожалуйста, укажите тип доступа'
              },
              {
                type: 'select',
                name: 'accessMode',
                label: 'Тип доступа:',
                options: [
                  { value: 'link', label: 'по ссылке 🔓' },
                  { value: 'invites', label: 'по инвайту 🔒' }
                ]
              }
            ]
          }
        }
      ],
      transitions: {
        left: {
          label: 'Назад',
          to: 'welcome'
        },

        right: {
          label: 'Далее',
          to: 'finish'
        }
      }
    },

    finish: {
      title: 'Все готово!',
      stepCounter: [3, 3],
      transitions: {
        center: {
          label: 'Создать чат',
          action: 'commit'
        }
      }
    }
  }
};
