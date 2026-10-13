// Helpline contacts shown in the Help tab (3 by default). Fill in your own names and numbers, with country code, e.g. "+8801XXXXXXXXX".
// You can also change them later without editing code: Firebase -> Firestore -> collection "config" -> document "helpline" -> field "contacts".
const HELPLINE_DEFAULT = [
  { name: "LINKON Helpline 1", phone: "+8801613831802", note: "App and account help" },
  { name: "LINKON Helpline 2", phone: "+8801734863607", note: "Pay and supervisor access" },
  { name: "LINKON Helpline 3", phone: "+8801818568502", note: "Other questions" }
];

// Builder profile card (Profile tab). Fill in phone (with country code) and a Facebook link (https://...) if you want buttons to show.
const BUILDER_PROFILE = { name: "LINKON", role: "App builder · Pakiza Software", bio: "LINKON is built to help workers track overtime and pay easily.", phone: "", facebook: "" };
