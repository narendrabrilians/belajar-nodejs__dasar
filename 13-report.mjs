import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

const throwError = () => {
  throw new Error("error");
};

throwError();
