import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-YRBFW0mN.js";const t={},l=e(`<h2 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h2><p>配置一个docker版本的VPN网络服务器，有2个核心要点：</p><ol><li>docker容器的基础为dnsmasq docker容器</li><li>安装zerotire客户端</li></ol><h2 id="docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yaml" aria-hidden="true">#</a> docker-compose.yaml</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">dnsmasq</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jpillora/dnsmasq<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> dnsmasq
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> HTTP_USER=seekwind
      <span class="token punctuation">-</span> USER_GID=90153034
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dnsmasq
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/timezone<span class="token punctuation">:</span>/etc/timezone<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> /etc/ssl/certs/seekwind.crt<span class="token punctuation">:</span>/etc/ssl/certs/seekwind.crt
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5380:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;53:53/udp&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[l];function i(p,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","docker-vpn-network-template.html.vue"]]);export{d as default};
