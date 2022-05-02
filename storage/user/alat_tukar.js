//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
  const fs = require('fs')
  let _inventoryOrang = JSON.parse(fs.readFileSync('./storage/user/inventory.json'))
  let besiAwal = global.rpg.besiawal
  let goldAwal = global.rpg.goldawal
  let emeraldAwal = global.rpg.emeraldawal
  let umpanAwal = global.rpg.umpanawal
  let potionAwal = global.rpg.potionawal
  const addInventori = (sender) => {
        const obj = {id: sender, besi: besiAwal, gold: goldAwal, emerald: emeraldAwal, umpan: umpanAwal, potion: potionAwal}
         _inventoryOrang.push(obj)
        fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
   }
  const cekInventoryAdaAtauGak = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi += amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi -= amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getBesi = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].besi
            }
        }     
  const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold += amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold -= amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getEmas = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gold
            }
        }     
  const addEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald += amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald -= amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getEmerald = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].emerald
            }
        }     
        
  const addUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan += amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan -= amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getUmpan = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].umpan
            }
        }  
  const addPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion += amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion -= amount
                fs.writeFileSync('./storage/user/inventory.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getPotion = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].potion
            }
        }       
  module.exports = { cekInventoryAdaAtauGak, 
                     addInventori, 
                     addBesi, 
                     addEmas, 
                     addEmerald, 
                     addUmpan,
                     addPotion,
                     kurangBesi, 
                     kurangEmas, 
                     kurangEmerald, 
                     kurangUmpan,
                     kurangPotion,
                     getBesi, 
                     getEmas, 
                     getEmerald,
                     getUmpan,
                     getPotion
                  }