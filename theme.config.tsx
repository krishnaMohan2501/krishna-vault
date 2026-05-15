import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>
      Krishna&apos;s Vault
    </span>
  ),
  project: {
    link: 'https://github.com/krishnaMohan2501',
  },
  docsRepositoryBase: 'https://github.com/krishnaMohan2501/krishna-vault/blob/main',
  footer: {
    text: (
      <span>
        Krishna Mohan © {new Date().getFullYear()} · Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noreferrer">
          Nextra
        </a>
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Krishna's Vault",
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Krishna's Vault" />
      <meta
        property="og:description"
        content="Personal knowledge vault – DSA, Java, Spring Boot, System Design & Interview Prep"
      />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span style={{ fontWeight: 600 }}>{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: null,
  },
  navigation: {
    prev: true,
    next: true,
  },
}

export default config
