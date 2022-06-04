function csvToArray(csv, delimiter = ",", omitFirstRow = false) {
  console.log(csv.indexOf('\n'));
  return csv.slice(omitFirstRow ? csv.indexOf('\n')+1 : 0)
            .split("\n")
            .map((element) => element.split(delimiter));
}


let csv3 = "head1,head2\na,b\nc,d";


let result3 = csvToArray(csv3);


console.log(result3);