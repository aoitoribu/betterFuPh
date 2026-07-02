<template>
  <section class="home-hero" aria-labelledby="home-title">
    <div class="home-hero__content">
      <p class="home-hero__eyebrow">BetterFuPh Open Physics</p>
      <h1 id="home-title">物理学习指南</h1>
      <p class="home-hero__subtitle">面向复旦物理学习者的开放资料库：课程笔记、真题解析、工具教程和可继续修订的学习路线。</p>
      <div class="home-hero__actions">
        <a class="home-button home-button--primary" href="/betterFuPh/courses/">开始学习</a>
        <a class="home-button" href="/betterFuPh/contribution/editor">编辑资料</a>
        <a class="home-button" href="/betterFuPh/contribution/">贡献指南</a>
      </div>
    </div>
    <div class="home-hero__visual" aria-hidden="true">
      <div class="formula-card formula-card--main">
        <span>{{ String.raw`\nabla \cdot \mathbf{E}=\rho/\varepsilon_0` }}</span>
        <span>{{ String.raw`\hat H\psi=E\psi` }}</span>
        <span>{{ String.raw`S=k_B\ln\Omega` }}</span>
      </div>
      <div class="orbit orbit--one"></div>
      <div class="orbit orbit--two"></div>
      <div class="orbit orbit--three"></div>
      <div class="particle particle--one"></div>
      <div class="particle particle--two"></div>
      <div class="particle particle--three"></div>
    </div>
  </section>
</template>
