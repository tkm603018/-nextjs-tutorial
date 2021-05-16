// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}

// export default (req, res) => {
//   const email = req.body.email
//   続いて、データベースなどに e メールを保存する
// }
