  //═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
const fs = require('fs')
  let _limitOrg = JSON.parse(fs.readFileSync('./storage/user/limit.json'))
  let limitAwal = global.limitawal.free
  const addInventoriLimit = (sender) => {
        const obj = {id: sender, limit: limitAwal}
         _limitOrg.push(obj)
        fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limitOrg))
   }
  const cekDuluJoinAdaApaKagaLimitnyaDiJson = (sender) => {
            let status = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit += amount
                fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const kurangLimit = (sender, amount) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limitOrg[position].limit -= amount
                fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limitOrg))
            }
        }
   const getLimit = (sender) => {
            let position = false
            Object.keys(_limitOrg).forEach((i) => {
                if (_limitOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _limitOrg[position].limit
            }
        }     
        
   module.exports = { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit }   