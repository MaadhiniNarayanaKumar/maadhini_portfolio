"use client";

import React from "react";
import "../../../styles/proj1.css";

const github = "https://github.com/MaadhiniNarayanaKumar/youtube_clone";

export default function YoutubeClonePage() {
  return (
    <div className="pj-root">
      <div className="pj-hero" id="overview">
        <div className="pj-eyebrow">
          <span>HTML</span>
          <span> · CSS</span>
          <span> · JavaScript</span>
          <span> · 2023</span>
        </div>
        <h1 className="pj-hero-title">
          YouTube Clone
          <br />
          <span>A home page, built by hand.</span>
        </h1>
        <p className="pj-tagline">
          A static YouTube home layout from February 21, 2023. Header, sidebar,
          search bar, and a grid of video cards. No framework and no video player.
        </p>
        <p className="pj-impact">
          The copy below is that page. Icon paths are pointed at the files that
          actually shipped in the repo, and the menu button has an image so the
          sidebar toggle can be clicked.
        </p>
        <div className="pj-hero-chips">
          {["HTML", "CSS", "JavaScript", "CSS grid", "Responsive"].map((chip) => (
            <span className="pj-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <a className="pj-hero-link" href={github} target="_blank" rel="noopener noreferrer">
          View repository →
        </a>
      </div>

      <section className="pj-section" id="play">
        <div className="pj-label">Look through it</div>
        <h2 className="pj-title">Header, sidebar, and the video grid.</h2>
        <p className="pj-body">
          Click the menu to hide the sidebar. The search box and the video titles
          are static. Thumbnails are empty black boxes, the same as the original
          file.
        </p>
        <div className="pj-play-frame pj-play-frame-tall">
          <iframe
            src="/demos/youtube-clone/index.html"
            title="YouTube clone layout"
            className="pj-play-frame-iframe"
          />
        </div>
      </section>

      <section className="pj-section" id="how-it-works">
        <div className="pj-label">How it works</div>
        <h2 className="pj-title">Three regions, one toggle.</h2>
        <div className="pj-problem-grid pj-problem-grid-matrix">
          <div className="pj-problem-card">
            <div className="pj-problem-num">01</div>
            <div className="pj-problem-title">A fixed header</div>
            <div className="pj-problem-desc">
              Menu, logo, search field, mic, create, notifications, and a profile
              photo sit in one flex row.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">02</div>
            <div className="pj-problem-title">A scrolling sidebar</div>
            <div className="pj-problem-desc">
              Home, library, subscriptions, and settings are stacked links. On a
              narrow screen the sidebar starts hidden.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">03</div>
            <div className="pj-problem-title">Cards in a CSS grid</div>
            <div className="pj-problem-desc">
              Fifteen video cards use auto-fit columns with a 270px minimum, so
              the row count follows the width.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">04</div>
            <div className="pj-problem-title">One click of JavaScript</div>
            <div className="pj-problem-desc">
              The menu toggles a hide class on the sidebar. Everything else is
              markup and CSS.
            </div>
          </div>
        </div>
      </section>

      <section className="pj-section" id="notes">
        <div className="pj-label">From the 2023 file</div>
        <h2 className="pj-title">What I kept, and what I fixed to embed it.</h2>
        <div className="pj-problem-grid pj-problem-grid-matrix">
          <div className="pj-problem-card">
            <div className="pj-problem-num">Kept</div>
            <div className="pj-problem-title">The original layout</div>
            <div className="pj-problem-desc">
              Dark theme, sidebar groups, video titles, and the responsive rule
              that swaps the search bar for an icon under 550px.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Fixed</div>
            <div className="pj-problem-title">Icons pointed at missing folders</div>
            <div className="pj-problem-desc">
              The HTML asked for ./images/ and ./SVG/. Those folders were not in
              the upload. The files sat next to index.html.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Fixed</div>
            <div className="pj-problem-title">The menu had no image</div>
            <div className="pj-problem-desc">
              The button’s src was empty, so there was nothing to click even
              though the toggle script was already there.
            </div>
          </div>
          <div className="pj-problem-card">
            <div className="pj-problem-num">Left as-is</div>
            <div className="pj-problem-title">No player, no search results</div>
            <div className="pj-problem-desc">
              Cards do not open a video, and the search field does not filter.
              This page is the layout.
            </div>
          </div>
        </div>
      </section>

      <div className="pj-footer">
        <span className="pj-footer-left">YouTube Clone · February 2023</span>
        <span className="pj-footer-badge">Early HTML layout</span>
      </div>
    </div>
  );
}
