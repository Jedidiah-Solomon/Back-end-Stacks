`https://www.whatsmydns.net/` -- cHECK PROPAGATION OF YOUR DOMAIN USE E.G WWW.YOURWEBSITE.COM AND YOURWEBSITE.COM FOR BOTH A AND CNAME RECORDS

2. `https://whatismyipaddress.com/` --- cHECK YOUR IP ADDRESS BASED ON YOUR PC AND INTERNET NETWORK

3. ``https://www.ssllabs.com/ssltest/` CHECK THE STATUS OF SSL CERTIFICATE

Note:
yourwebsite.com ---root domain
wwww.yourwebsite.com ---default subdomain
news.yourwebsite.com --sample custom subdomain

A Record (Address Record)
Purpose: An A record maps a domain name (or subdomain) to an IPv4 address. It is used to point a domain directly to an IP address.

Use Case:
When you want to point a domain directly to a specific IP address, typically used for web hosting, mail servers, FTP servers, etc.
Useful when you have a static IP address for your server or service.

Example:
If you have a web server with the IP address 192.0.2.1, you would create an A record for example.com pointing to 192.0.2.1.

CNAME Record (Canonical Name Record)
Purpose: A CNAME record creates an alias for a domain name (or subdomain) and points it to another domain name (the canonical name). It is used for creating aliases or subdomains that point to the same location as the canonical domain.

Use Case:
When you want to create an alias for a domain or subdomain that points to another domain or subdomain.
Useful for creating subdomains that point to the same location as the main domain or for redirecting one domain to another.

Example:
If you want www.example.com to point to the same location as example.com, you would create a CNAME record for www pointing to example.com.
If you have a separate service like a blog hosted on a different platform (e.g., blog.example.com), you could create a CNAME record for blog pointing to the platform's domain (e.g., myblogplatform.com).
