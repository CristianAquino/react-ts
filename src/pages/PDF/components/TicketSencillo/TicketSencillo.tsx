import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

export type TicketSencilloProps = {};

const TicketSencillo = ({}: TicketSencilloProps) => {
  const first = [
    {
      name: "giro/rubro",
      value: "recarga virtual celular",
    },
    {
      name: "empresa",
      value: "entel - recarga virtual",
    },
    {
      name: "cta. a abonar",
      value: "1932236505058",
    },
    {
      name: "cod. id. usuario",
      value: "927304286",
    },
    {
      name: "en efectivo",
      value: "",
    },
  ];
  const second = {
    importe_pago: "5",
    cargo_fijo: "0",
    mora: "0",
    total_deuda: "5",
    comision: "0",
    total_a_pagar: "5",
  };
  const third = {
    recarga_virtual: "5",
    valor_venta: "4.23",
    descuento: "0",
    igv: "0.77",
    total: "5",
  };
  // const second = {
  //   ["giro/rubro"]: "recarga virtual celular",
  //   ["empresa"]: "entel - recarga virtual",
  //   ["cta. a abonar"]: "1932236505058",
  //   ["cod. id. usuario"]: "927304286",
  //   ["en efectivo"]: "",
  // };
  const dotNumber = (number: string) => {
    if (number.includes(".")) {
      const dot = number.split("").findIndex((ele) => ele === ".");
      if (number.slice(dot + 1).length == 1) return `${number}0`;
      return number;
    }
    return `${number}.00`;
  };
  const styles = StyleSheet.create({
    body: {
      paddingTop: 60,
      paddingHorizontal: 20,
      paddingBottom: 20,
      textTransform: "uppercase",
      fontFamily: "Courier-Bold",
    },
    header: {
      fontSize: 16,
      fontWeight: "bold",
    },
    datecode: {
      fontSize: 8,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    servicios: {
      gap: 20,
      fontSize: 10,
    },
    separate: {
      fontSize: 10,
    },
    table: {
      fontSize: 8,
      width: "100%",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableData1: {
      width: "40%",
    },
    tableData2: {
      width: "60%",
    },
    tableData3: {
      width: "50%",
    },
    dataEmpresa: {
      fontSize: 8,
      gap: 10,
    },
    nameEmpresa: {
      width: "100%",
      alignItems: "center",
    },
    mensaje: {
      fontSize: 9,
      textAlign: "justify",
    },
  });
  return (
    <Document title="testBill">
      {/* Page */}
      <Page size={283.5} style={styles.body}>
        {/* Header */}
        <View style={{ paddingBottom: 10 }}>
          <Text style={[styles.header, { fontSize: 20 }]}>AGENTE BCP</Text>
          <Text style={styles.header}>BOUTIQUE BAZAR HOSANA</Text>
          <View style={styles.datecode}>
            <Text>
              FECHA: <Text>04/04/23</Text>
            </Text>
            <Text>
              Hora: <Text>12:00:20</Text>
            </Text>
            <Text>H976636</Text>
          </View>
          <Text style={{ fontSize: 8 }}>NO. OPE: 476956</Text>
        </View>
        {/* Pago de servicios */}
        <Text style={styles.separate}>
          {"-".repeat(12)}pago de servicios{"-".repeat(12)}
        </Text>
        <View style={styles.servicios}>
          <View style={styles.table}>
            {first.map((ele, index) => (
              <View style={styles.tableRow} key={ele.name}>
                <Text style={styles.tableData1}>
                  {ele.name}
                  {index === first.length - 1 ? "" : ":"}
                </Text>
                <Text style={styles.tableData2}>{ele.value}</Text>
              </View>
            ))}
          </View>
          <Text style={{ fontSize: 8 }}>
            descripcion{"\n"}
            entel recarga
          </Text>
          {/* Total */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>importe pago:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.importe_pago).padStart(12, " ")}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>cargo fijo:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.cargo_fijo).padStart(12, " ")}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>mora:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.mora).padStart(12, " ")}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>total deuda:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.total_deuda).padStart(12, " ")}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>comision:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.comision).padStart(12, " ")}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={{ width: "50%" }}>total a pagar:</Text>
              <Text style={{ width: "50%" }}>
                S/ {dotNumber(second.total_a_pagar).padStart(12, " ")}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.separate}>{"-".repeat(42)}</Text>
        {/* Data empresa */}
        <View style={styles.dataEmpresa}>
          <View style={{ marginLeft: 20 }}>
            <View style={styles.nameEmpresa}>
              <Text>entel peru s.a</Text>
              <Text>ruc: 20106897914</Text>
            </View>
            <View style={styles.datecode}>
              <Text>nro ope: 07756713</Text>
              <Text>hora: 12:00:20</Text>
            </View>
            <Text>nro recarga: 36046197677</Text>
            <Text>nro celular: 927304286</Text>
          </View>
          {/* Data recarga */}
          <View style={{ marginLeft: 20 }}>
            <View id="table" style={styles.table}>
              <View id="row" style={styles.tableRow}>
                <Text id="data" style={styles.tableData3}>
                  recarga virtual:
                </Text>
                <Text id="data" style={styles.tableData3}>
                  S/ {dotNumber(third.recarga_virtual).padStart(12, "*")}
                </Text>
              </View>
              <View id="row" style={styles.tableRow}>
                <Text id="data" style={styles.tableData3}>
                  valor venta:
                </Text>
                <Text id="data" style={styles.tableData3}>
                  S/ {dotNumber(third.valor_venta).padStart(12, "*")}
                </Text>
              </View>
              <View id="row" style={styles.tableRow}>
                <Text id="data" style={styles.tableData3}>
                  descuento:
                </Text>
                <Text id="data" style={styles.tableData3}>
                  S/ {dotNumber(third.descuento).padStart(12, "*")}
                </Text>
              </View>
              <View id="row" style={styles.tableRow}>
                <Text id="data" style={styles.tableData3}>
                  i.g.v:
                </Text>
                <Text id="data" style={styles.tableData3}>
                  S/ {dotNumber(third.igv).padStart(12, "*")}
                </Text>
              </View>
              <View id="row" style={styles.tableRow}>
                <Text id="data" style={styles.tableData3}>
                  total:
                </Text>
                <Text id="data" style={styles.tableData3}>
                  S/ {dotNumber(third.total).padStart(12, "*")}
                </Text>
              </View>
            </View>
          </View>
          {/* Mensaje */}
          <View style={styles.mensaje}>
            <Text>
              Para atencion al cliente llame al 144 opcion 5. vigencia: de S/3 a
              S/39, 30 dias y de S/40 a S/100, 90 dias
            </Text>
            <Text>
              documento autorizado para fines tributarios. base legal: documento
              autorizado art. 4 num. 6.1 inc. d r.s.007-99/sunat
            </Text>
          </View>
        </View>
        <Text style={styles.separate} fixed>
          {"-".repeat(42)}
        </Text>
      </Page>
    </Document>
  );
};

export default TicketSencillo;

// https://stackoverflow.com/questions/56373850/how-can-i-create-a-table-using-the-react-pdf-library-for-generation-pdf-report
