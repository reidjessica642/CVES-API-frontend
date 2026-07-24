import { Cve } from "../types/cve";

export const CVES: Cve[] = [
    {
        id: "bac705c6-dbcb-4512-ad71-ee0dd765b7c7",
        name: "CVE-2026-24216",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2026-24216",
        tags: [
            "Arbitrary Code Execution",
            "Data Tampering",
            "Denial of Service"
        ],
        "risk": "High",
    },
    {
        id: "d27005c0-6d7b-40a8-bd2b-7799cdd78138",
        name: "CVE-2026-6960",
        url: "https://app.opencve.io/cve/CVE-2026-6960",
        tags: [
            "Remote Code Execution"
        ],
        risk: "Critical",
    },
    {
        id: "973bab5d-d9a2-484d-a728-0aeb5024f5c9",
        name: "CVE-2026-45232",
        url: "https://nvd.nist.gov/vuln/detail/CVE-2026-45232",
        tags: [
            "Man In The Middle",
            "Denial of Service"
        ],
        risk: "Low",
    }
]