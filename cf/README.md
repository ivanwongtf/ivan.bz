# Cloudflare rules

Redirect rule(s) for **ivan.bz**, kept here so changes are versioned and re-applicable without the CF console.

## apex-to-www

Apex `ivan.bz` → `www.ivan.bz`, **301**, path + query string preserved.

- **Why:** GitHub Pages (origin) only has a cert/custom-domain for the CNAME `www.ivan.bz`. Apex hit origin with a non-matching SNI → Cloudflare **526**. The 301 stops apex at the CF edge so it never reaches origin.
- **Zone:** `ivan.bz`
- **Phase:** `http_request_dynamic_redirect`
- **Expression:** `(http.host eq "ivan.bz")` → redirect 301 to `concat("https://www.ivan.bz", path)`, `preserve_query_string = true`

## Files

| File | Purpose |
|---|---|
| `apex-to-www.json` | The exact ruleset payload (single source of truth). |
| `apply.sh` | Re-applies `apex-to-www.json` (idempotent: create or update). **Local only** — gitignored so the public repo stays free of dev glue and the personal env-var name it references. |

## Re-apply

```sh
# token with Zone > Single Redirect > Edit on ivan.bz
export CLOUDFLARE_API_TOKEN=...
./apply.sh
```

## Verify

```sh
curl -sI https://ivan.bz        # 301 -> https://www.ivan.bz/
curl -sI https://www.ivan.bz     # 200
```

## Token permissions

At minimum (per CF docs):
- **Zone > Single Redirect > Edit** on `ivan.bz`
- **Zone > Zone > Read** (to look up the zone id)

Note: if the token has a **Client IP allowlist**, add the machine's egress IP there (otherwise error 9109).
