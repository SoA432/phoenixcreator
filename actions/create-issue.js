const initEnvironment = require(`eosiac`);

const { sendTransaction, env } = initEnvironment(
  process.env.EOSIAC_ENV || `kylin`,
  { verbose: true }
);

const accounts = Object.keys(env.accounts);

const TOKEN_ACCOUNT = accounts[accounts.length - 1];

async function action() {
  try {
    await sendTransaction([{
      account: TOKEN_ACCOUNT,
      name: `create`,
      authorization: [
        {
          actor: TOKEN_ACCOUNT,
          permission: `active`
        }
      ],
      data: {
        issuer: TOKEN_ACCOUNT,
        maximum_supply: "170000000.000000000 WEOSDT"
      }
    },
    // issue to PHOENIX not needed 
    // {
    //   account: TOKEN_ACCOUNT,
    //   name: `issue`,
    //   authorization: [
    //     {
    //       actor: TOKEN_ACCOUNT,
    //       permission: `active`
    //     }
    //   ],
    //   data: {
    //     to: TOKEN_ACCOUNT,
    //     quantity: "170000000.00000000 WEOSDT",
    //     memo: "",
    //   }
    // },
  ]);
    process.exit(0);
  } catch (error) {
    // ignore
    process.exit(1);
  }
}

action();