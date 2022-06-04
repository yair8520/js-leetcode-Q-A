const findDuplicate = (paths) => {
    let m = new Map();
    for (const p of paths) {
        let pa = p.split(" ");
        for (let i = 1; i < pa.length; i++) {
            let start = pa[i].indexOf('(');
            let fileName = pa[i].slice(0, start);
            let content = pa[i].slice(start + 1, -1);
            if (!m.has(content)) m.set(content, []);
            m.get(content).push(pa[0] + '/' + fileName);
        }
    }
    console.log(m)
    return Array.from(m.values()).filter(x => x.length > 1);
};

console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
  ])
);
