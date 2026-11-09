// docs.arclefx.com — search result link normalizer
// Doc pages use clean URLs (/why-arcle-fx, /swap …) served directly by Amplify.
// Search index entries also use clean URLs, so no rewriting is needed here.
// This block intentionally left minimal — kept only for future extensibility.

// Arcle FX Docs — Search Index
const SEARCH_INDEX = [
  // Overview
  { title: "Introduction to Arcle FX", section: "Overview", url: "/", desc: "What is Arcle FX? Non-custodial multi-chain DeFi protocol built on Circle CCTP." },
  { title: "Core Features", section: "Introduction", url: "/#core-features", desc: "Bridge, Swap, Unified Balance, Send on ARC — all powered by Circle CCTP." },
  { title: "What you can do with Arcle FX", section: "Introduction", url: "/#what-you-can-build", desc: "Bridge assets, swap stablecoins, manage unified balance across chains." },

  { title: "Why Arcle FX?", section: "Overview", url: "/why-arcle-fx", desc: "Why choose Arcle FX over other protocols." },
  { title: "Key Advantages", section: "Why Arcle FX", url: "/why-arcle-fx#key-advantages", desc: "Native USDC, no wrapped tokens, deterministic finality, USDC gas on ARC." },
  { title: "Free Economy Mode", section: "Why Arcle FX", url: "/why-arcle-fx#free-economy-mode", desc: "Zero protocol fees on ARC Network. Pay only network gas in USDC." },

  { title: "Supported Networks", section: "Overview", url: "/supported-networks", desc: "Ethereum, Arbitrum One, Base, ARC Network — Chain IDs and CCTP domains." },
  { title: "Networks", section: "Supported Networks", url: "/supported-networks#networks", desc: "Ethereum (1), Arbitrum One (42161), Base (8453), ARC Network (5042)." },
  { title: "Route Matrix", section: "Supported Networks", url: "/supported-networks#route-matrix", desc: "Cross-chain CCTP routes between Ethereum, Arbitrum, Base and ARC Network." },

  // Core Features
  { title: "Bridge", section: "Core Features", url: "/bridge", desc: "Cross-chain USDC and EURC transfers via Circle CCTP v2 burn-and-mint." },
  { title: "Bridge Modes", section: "Bridge", url: "/bridge#bridge-modes", desc: "Standard Transfer and Fast Transfer modes via CCTP v2." },
  { title: "How to Bridge", section: "Bridge", url: "/bridge#how-to-bridge", desc: "Step-by-step guide to bridging USDC across chains." },
  { title: "Supported Tokens (Bridge)", section: "Bridge", url: "/bridge#supported-tokens", desc: "USDC and EURC supported for bridging on Ethereum, Arbitrum, Base and ARC." },

  { title: "Swap", section: "Core Features", url: "/swap", desc: "Same-chain and cross-chain USDC / EURC swaps." },
  { title: "Swap Types", section: "Swap", url: "/swap#swap-types", desc: "Same-chain swap and cross-chain swap via CCTP v2." },
  { title: "Fee Structure", section: "Swap", url: "/swap#fee-structure", desc: "Protocol fees and gas costs for swapping." },
  { title: "Supported Pairs", section: "Swap", url: "/swap#supported-pairs", desc: "USDC ↔ EURC same-chain; USDC ↔ USDC and EURC ↔ USDC cross-chain." },

  { title: "Unified Balance", section: "Core Features", url: "/unified-balance", desc: "View and manage your USDC balance across all chains in one place." },
  { title: "What is Unified Balance?", section: "Unified Balance", url: "/unified-balance#what-is-unified-balance", desc: "Aggregate cross-chain USDC balance view across Ethereum, Arbitrum, Base, ARC." },
  { title: "How Unified Balance Works", section: "Unified Balance", url: "/unified-balance#how-it-works", desc: "Real-time balance aggregation and cross-chain rebalancing." },

  { title: "Send on ARC Network", section: "Core Features", url: "/send-on-arc", desc: "Wallet-to-wallet USDC transfers on ARC Network in one click." },
  { title: "ARC Network Advantages", section: "Send on ARC", url: "/send-on-arc#arc-advantages", desc: "Sub-second finality, USDC gas token, near-zero fees on ARC Network." },
  { title: "How to Send on ARC", section: "Send on ARC", url: "/send-on-arc#how-to-send", desc: "Step-by-step guide to sending USDC on ARC Network." },

  // Resources
  { title: "Block Explorer", section: "Resources", url: "/block-explorer", desc: "Block explorers for Ethereum, Arbitrum, Base and ARC Network." },
  { title: "Explorers", section: "Block Explorer", url: "/block-explorer#explorers", desc: "Etherscan, Arbiscan, Basescan, ARC Explorer (Blockscout)." },
  { title: "CCTP Transfer Flow", section: "Block Explorer", url: "/block-explorer#cctp-tracker", desc: "Burn → Attestation → Mint lifecycle for cross-chain CCTP transfers." },

  // User Guide
  { title: "Connect Wallet", section: "User Guide", url: "/connect-wallet", desc: "Connect MetaMask, WalletConnect or Coinbase Wallet to Arcle FX." },
  { title: "Supported Wallets", section: "Connect Wallet", url: "/connect-wallet#supported-wallets", desc: "MetaMask, WalletConnect, Coinbase Wallet supported." },
  { title: "How to Connect", section: "Connect Wallet", url: "/connect-wallet#how-to-connect", desc: "Step-by-step wallet connection guide." },
  { title: "Wallet Management", section: "Connect Wallet", url: "/connect-wallet#wallet-management", desc: "View address, copy, disconnect wallet." },

  { title: "Transaction Settings", section: "User Guide", url: "/transaction-settings", desc: "Slippage tolerance, transaction deadline and gas payment settings." },
  { title: "Slippage Tolerance", section: "Transaction Settings", url: "/transaction-settings#slippage", desc: "Low 0.1%, Default 0.5%, High 1.0%, Custom up to 50%." },
  { title: "Transaction Deadline", section: "Transaction Settings", url: "/transaction-settings#deadline", desc: "Default 30 min, custom range 1–180 min. Transaction reverts on timeout." },
  { title: "Gas Payment", section: "Transaction Settings", url: "/transaction-settings#gas-payment", desc: "Pay gas in ETH (default) or USDC via Circle Paymaster. ARC Network always uses USDC." },

  { title: "Circle Paymaster", section: "User Guide", url: "/circle-paymaster", desc: "Pay gas fees in USDC via ERC-4337 account abstraction on EVM chains." },
  { title: "Paymaster Supported Networks", section: "Circle Paymaster", url: "/circle-paymaster#supported-networks", desc: "Ethereum, Arbitrum, Base support gasless USDC. ARC Network is USDC native." },
  { title: "How to Enable Paymaster", section: "Circle Paymaster", url: "/circle-paymaster#how-to-enable", desc: "Settings → Gas payment → USDC to enable gasless mode." },
  { title: "How Paymaster Works", section: "Circle Paymaster", url: "/circle-paymaster#how-it-works", desc: "UserOperation, USDC Permit, Bundler, EntryPoint settlement. 10% surcharge." },
];

// ── Search Modal ────────────────────────────────────────────────────────────
(function () {
  let modal, input, results, selectedIndex = -1;

  function createModal() {
    // Backdrop
    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4';
    modal.style.cssText = 'display:none;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);';

    modal.innerHTML = `
      <div id="search-box" class="w-full max-w-xl bg-white dark:bg-[#0d1220] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden" style="max-height:70vh;display:flex;flex-direction:column;">
        <div class="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 dark:border-white/8">
          <svg class="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input id="search-input" type="text" placeholder="Search docs..." autocomplete="off" spellcheck="false"
            class="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm font-medium outline-none border-none"
            style="font-family:inherit;" />
          <kbd class="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-600 border border-slate-200 dark:border-white/10 rounded px-1.5 py-0.5 font-mono">Esc</kbd>
        </div>
        <div id="search-results" class="overflow-y-auto px-2 py-2" style="max-height:calc(70vh - 60px);"></div>
      </div>
    `;

    document.body.appendChild(modal);

    input = document.getElementById('search-input');
    results = document.getElementById('search-results');

    // Close on backdrop click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    input.addEventListener('input', function () {
      renderResults(this.value.trim());
    });

    input.addEventListener('keydown', function (e) {
      const items = results.querySelectorAll('[data-idx]');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, 0);
        updateSelection(items);
      } else if (e.key === 'Enter') {
        const active = results.querySelector('[data-idx].selected');
        if (active) window.location.href = active.getAttribute('data-url');
      } else if (e.key === 'Escape') {
        closeModal();
      }
    });

    renderResults('');
  }

  function updateSelection(items) {
    items.forEach((el, i) => {
      if (i === selectedIndex) {
        el.classList.add('selected');
        el.style.background = document.documentElement.classList.contains('dark')
          ? 'rgba(45,212,191,0.08)' : '#f0f9ff';
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
        el.style.background = '';
      }
    });
  }

  function highlight(text, query) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark class="bg-yellow-100 dark:bg-yellow-400/20 text-slate-900 dark:text-yellow-200 rounded px-0.5">$1</mark>');
  }

  function renderResults(query) {
    selectedIndex = -1;
    const q = query.toLowerCase();
    const filtered = q.length === 0
      ? SEARCH_INDEX.slice(0, 8)
      : SEARCH_INDEX.filter(item =>
          item.title.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q)
        ).slice(0, 10);

    if (filtered.length === 0) {
      results.innerHTML = `<div class="px-4 py-8 text-center text-sm text-slate-400 dark:text-slate-600">No results for "<strong class="text-slate-600 dark:text-slate-400">${query}</strong>"</div>`;
      return;
    }

    const isDark = document.documentElement.classList.contains('dark');
    results.innerHTML = filtered.map((item, i) => `
      <a data-idx="${i}" data-url="${item.url}" href="${item.url}"
        class="flex items-start gap-3 px-3 py-3 rounded-xl cursor-pointer transition-colors group"
        style="text-decoration:none;"
        onmouseenter="this.style.background='${isDark ? 'rgba(45,212,191,0.08)' : '#f0f9ff'}'"
        onmouseleave="this.style.background=''">
        <div class="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-slate-100 dark:bg-white/5">
          <svg class="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-semibold text-slate-900 dark:text-white">${highlight(item.title, query)}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500 font-medium">${highlight(item.section, query)}</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-500 mt-0.5 leading-relaxed truncate">${highlight(item.desc, query)}</p>
        </div>
        <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    `).join('');

    // Add empty state footer
    if (q.length === 0) {
      results.innerHTML += `<p class="text-center text-xs text-slate-400 dark:text-slate-600 pb-2 pt-1">Start typing to search all docs</p>`;
    }
  }

  function openModal() {
    if (!modal) createModal();
    modal.style.display = 'flex';
    setTimeout(() => input && input.focus(), 50);
    renderResults('');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modal) modal.style.display = 'none';
    if (input) input.value = '';
    document.body.style.overflow = '';
  }

  // Expose
  window.__arcleSearch = { open: openModal, close: closeModal };

  // ⌘K / Ctrl+K shortcut
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (modal && modal.style.display !== 'none') closeModal();
      else openModal();
    }
  });
})();
