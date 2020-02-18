module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let codName = '';
  members.map(a => {
    if(typeof a === "string") {
      a = a.trim().toUpperCase();;
      codName = codName + a.slice(0, 1);
    }
  })
  return codName.split('').sort().join('')
};