let digital = {
  lever: [],
  payment: [],
  step1data: [
    {
      key: '1',
      label: '姓名',
      disabled: true,
      keyvalue: 'name'
    },
    {
      key: '2',
      label: '手机',
      disabled: true,
      keyvalue: 'mobile'
    },
    {
      key: '3',
      label: '邮箱',
      disabled: true,
      keyvalue: 'email'
    },
    {
      key: '4',
      label: '称谓',
      keyvalue: 'appellation'
    },
    {
      key: '5',
      label: '出生年月',
      keyvalue: 'birthday'
    },
    {
      key: '6',
      label: '居住地',
      keyvalue: 'address'
    },
    {
      key: '7',
      label: '性别',
      keyvalue: 'sex'
    },
    {
      key: '8',
      label: '账户类型',
      keyvalue: 'accountType'
    },
    {
      key: '9',
      label: '出生地',
      keyvalue: 'birthAddress'
    },
    {
      key: '10',
      label: '国籍',
      keyvalue: 'country'
    },
    {
      key: '11',
      label: '邮编',
      keyvalue: 'postCode'
    }
  ],
  step2data: [
    {
      key: '12',
      label: '净资产',
      keyvalue: 'netAsset'
    },
    {
      key: '13',
      label: '总资产',
      keyvalue: 'totalAsset'
    },
    /* {
      key: '14',
      label: 'SWIFT代码',
      keyvalue: ''
    },
    {
      key: '15',
      label: 'ABA号码',
      keyvalue: ''
    }, */
    {
      key: '16',
      label: '备注',
      keyvalue: 'notice'
    },
    {
      key: '17',
      label: '投资经验',
      keyvalue: 'inventExperience'
    },
    {
      key: '18',
      label: '收入来源',
      keyvalue: 'incomeSource'
    },
    {
      key: '19',
      label: '知识水平',
      keyvalue: 'educationLevel'
    },
    {
      key: '20',
      label: '投资目的',
      keyvalue: 'inventGoal'
    },
    {
      key: '21',
      label: '投资额度',
      keyvalue: 'inventLimit'
    },
    {
      key: '22',
      label: '基础货币',
      keyvalue: 'educationLevel'
    },
    {
      key: '23',
      label: '投资年数',
      keyvalue: 'inventYears'
    },
    /* {
      key: '24',
      label: '银行账户',
      keyvalue: ''
    },
    {
      key: '25',
      label: '开户银行',
      keyvalue: ''
    },
    {
      key: '26',
      label: '银行所在地',
      keyvalue: ''
    },
    {
      key: '27',
      label: '银行支行',
      keyvalue: ''
    }, */
    {
      key: '28',
      label: '杠杆比例',
      keyvalue: 'lever'
    },
    {
      key: '29',
      label: '过去三年，你曾经交易过保证金外汇或CFD吗',
      keyvalue: 'isExchange'
    },
    {
      key: '30',
      label: '你是否有过至少两个月的交易经验',
      keyvalue: 'isInsist'
    }
  ],
  step3data: [
    {
      key: '31',
      label: '身份证明A',
      disabled: true,
      keyvalue: 'id_card_A'
    },
    {
      key: '32',
      label: '身份证明B',
      disabled: true,
      keyvalue: 'id_card_B'
    },
    {
      key: '33',
      label: '身份证明类型',
      disabled: true,
      keyvalue: 'check_type'
    },
    {
      key: '34',
      label: '身份证号码',
      disabled: true,
      keyvalue: 'idnumber'
    },
    {
      key: '35',
      label: '地址证明A',
      keyvalue: 'addressA'
    },
    {
      key: '36',
      label: '地址证明B',
      keyvalue: 'addressB'
    }
  ],
  step1: ['9', '10', '11'],
  step3: ['35', '36'],
  keyCodes: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105]
}
export default {
  digital
}
