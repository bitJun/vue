const account = {
  trade: [
    {
      value: 't1',
      label: '交易历史',
      link: '/account/history'
    },
    {
      value: 't2',
      label: '挂单查询',
      link: '/account/pendingorder'
    },
    {
      value: 't3',
      label: '持仓查询',
      link: '/account/position'
    }
  ],
  record: [
    {
      value: 'r1',
      label: '入金',
      link: '/account/depositrecord'
    },
    {
      value: 'r2',
      label: '出金',
      link: '/account/withdrawrecord'
    },
    {
      value: 'r3',
      label: '转账',
      link: '/account/transferrecord'
    }
  ]
}
export default account
