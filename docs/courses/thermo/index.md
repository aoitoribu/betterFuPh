---
title: 热力学与统计物理
---

# 热力学与统计物理

本页整理“热力学与统计物理 I”的突击复习内容。前半部分是统计物理，后半部分是热力学；目标不是重讲教材，而是把考试时最常用的定义、公式、推导入口、二级结论和标准题型压成一份可直接调用的讲义。

## 0. 符号表与一页总览

| 符号 | 含义 | 常用关系 |
|---|---|---|
| $k_B$ | Boltzmann 常数 | $R=N_A k_B$ |
| $T$ | 热力学温度 | $\beta=1/(k_B T)$ |
| $\Omega(E,V,N)$ | 微正则可及微观态数或相空间体积 | $S=k_B\ln\Omega$ |
| $Z(T,V,N)$ | 正则配分函数 | $F=-k_B T\ln Z$ |
| $\Xi(T,V,\mu)$ | 巨正则配分函数 | $\Phi=-k_B T\ln\Xi=-pV$ |
| $F$ | Helmholtz 自由能 | $F=U-TS$ |
| $\Phi$ | 巨势 | $\Phi=U-TS-\mu N$ |
| $\mu$ | 化学势 | $\mu=(\partial F/\partial N)_{T,V}$ |
| $\lambda_T$ | 热 de Broglie 波长 | $\lambda_T=h/\sqrt{2\pi m k_B T}$ |
| $g(\varepsilon)$ | 单粒子能级态密度 | $\sum_i\to\int g(\varepsilon)\,d\varepsilon$ |
| $z$ | 逸度 | $z=e^{\beta\mu}$ |

最核心的路线只有三步：

1. 微观态计数给熵：$S=k_B\ln\Omega$。
2. 与热库或粒子库接触后，对不可控变量求和：$Z=\sum e^{-\beta E}$，$\Xi=\sum e^{-\beta(E-\mu N)}$。
3. 配分函数一旦写对，热力学量用导数拿：

$$
\begin{aligned}
F&=-k_B T\ln Z,\\
U&=-\frac{\partial \ln Z}{\partial \beta},\\
S&=-\left(\frac{\partial F}{\partial T}\right)_{V,N},\\
p&=-\left(\frac{\partial F}{\partial V}\right)_{T,N},\\
\Phi&=-k_B T\ln\Xi,\\
N&=\frac{1}{\beta}\left(\frac{\partial \ln\Xi}{\partial \mu}\right)_{T,V}.
\end{aligned}
$$

## 1. 基本原理：微观态、相空间与熵

### 核心公式

孤立平衡体系中，满足宏观约束 $(E,V,N)$ 的可及微观态等概率：

$$
P_i=\frac{1}{\Omega},\qquad S=k_B\ln\Omega.
$$

经典连续相空间中，态数不是简单点数，而是相空间体积除以量子胞：

$$
\Omega(E,V,N)=\frac{1}{N!h^{3N}}\int_{E<H(\mathbf q,\mathbf p)<E+\Delta E}d^{3N}q\,d^{3N}p.
$$

其中 $H$ 是 Hamiltonian，$h$ 是 Planck 常数，$1/N!$ 修正全同粒子不可分辨性，$\Delta E$ 是宏观小、微观大的能壳厚度。

更一般的 Gibbs/Shannon 熵为

$$
S=-k_B\sum_i p_i\ln p_i.
$$

当 $p_i=1/\Omega$ 时，它退化为 Boltzmann 熵 $S=k_B\ln\Omega$。

### 推导抓手

从“热平衡时熵最大”出发。两个弱耦合孤立体系 $A+B$ 总能量固定：

$$
\Omega_{tot}(E_A)=\Omega_A(E_A)\Omega_B(E-E_A).
$$

平衡条件是 $\ln\Omega_{tot}$ 最大：

$$
\frac{\partial S_A}{\partial E_A}=\frac{\partial S_B}{\partial E_B}.
$$

由此定义

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

### 二级结论

- 熵最大等价于最概然宏观态；大体系中最概然态与平均态等价。
- $S$ 必须可加，因此态数相乘时熵取对数：$\Omega_{AB}=\Omega_A\Omega_B\Rightarrow S_{AB}=S_A+S_B$。
- 负温度要求能谱有上界；若能量越高态数越少，则 $\partial S/\partial E<0$，所以 $T<0$。

## 2. 三大系综一眼比对

| 系综 | 控制量 | 微观概率 | 配分函数/态数 | 特性函数 | 一句话记忆 |
|---|---|---|---|---|---|
| 微正则 | $E,V,N$ | $P_i=1/\Omega$ | $\Omega(E,V,N)$ | $S=k_B\ln\Omega$ | 孤立，数态 |
| 正则 | $T,V,N$ | $P_i=e^{-\beta E_i}/Z$ | $Z=\sum_i e^{-\beta E_i}$ | $F=-k_B T\ln Z$ | 接热库，能量可涨落 |
| 巨正则 | $T,V,\mu$ | $P_{i,N}=e^{-\beta(E_{i,N}-\mu N)}/\Xi$ | $\Xi=\sum_N\sum_i e^{-\beta(E_{i,N}-\mu N)}$ | $\Phi=-k_B T\ln\Xi$ | 接热库和粒子库 |

### 2.1 微正则系综

核心公式：

$$
S(E,V,N)=k_B\ln\Omega,\qquad
\frac{1}{T}=\left(\frac{\partial S}{\partial E}\right)_{V,N},
$$

$$
\frac{p}{T}=\left(\frac{\partial S}{\partial V}\right)_{E,N},\qquad
-\frac{\mu}{T}=\left(\frac{\partial S}{\partial N}\right)_{E,V}.
$$

变量含义：$p$ 是压强，$\mu$ 是化学势。上式来自热力学基本关系

$$
dE=T\,dS-p\,dV+\mu\,dN.
$$

二级结论：

- 微正则题的第一步永远是“写 $\Omega$ 或 $\ln\Omega$”。
- 若问平衡分配，最大化 $S_A+S_B$。
- 若问温度、压强、化学势，对 $S(E,V,N)$ 求偏导。

### 2.2 正则系综的第一性原理推导

系统 $S$ 与大热库 $B$ 弱接触，总能量 $E_{tot}$ 固定。系统处于能量 $E_i$ 的概率正比于热库态数：

$$
P_i\propto \Omega_B(E_{tot}-E_i).
$$

对热库熵展开：

$$
\ln\Omega_B(E_{tot}-E_i)
=\frac{S_B(E_{tot})}{k_B}-\frac{E_i}{k_B T}+O(E_i^2).
$$

忽略高阶小量得

$$
P_i=\frac{e^{-\beta E_i}}{Z},\qquad
Z=\sum_i e^{-\beta E_i},\qquad \beta=\frac{1}{k_B T}.
$$

核心导数：

$$
F=-k_BT\ln Z,\qquad
U=\langle E\rangle=-\frac{\partial \ln Z}{\partial \beta},
$$

$$
S=k_B(\ln Z+\beta U),\qquad
C_V=\left(\frac{\partial U}{\partial T}\right)_V.
$$

能量涨落：

$$
\langle(\Delta E)^2\rangle
=\langle E^2\rangle-\langle E\rangle^2
=\frac{\partial^2\ln Z}{\partial\beta^2}
=k_B T^2 C_V.
$$

二级结论：

- 若 $Z_N=z_1^N/N!$，则 $F=-Nk_BT\ln z_1+k_BT\ln N!$。
- 若 $Z$ 可分解为 $Z=Z_aZ_b$，则 $F=F_a+F_b$，$U=U_a+U_b$。
- 多个独立自由度的热容可直接相加。

### 2.3 巨正则系综的第一性原理推导

系统可与库交换能量和粒子。概率正比于库的态数：

$$
P_{i,N}\propto \Omega_B(E_{tot}-E_{i,N},N_{tot}-N).
$$

展开库熵：

$$
dS_B=\frac{1}{T}dE_B-\frac{\mu}{T}dN_B,
$$

代入 $dE_B=-E_{i,N}$、$dN_B=-N$ 得

$$
P_{i,N}=\frac{e^{-\beta(E_{i,N}-\mu N)}}{\Xi},
\qquad
\Xi=\sum_{N=0}^{\infty}\sum_i e^{-\beta(E_{i,N}-\mu N)}.
$$

核心导数：

$$
\Phi=-k_BT\ln\Xi,\qquad
\Phi=U-TS-\mu N=-pV,
$$

$$
\langle N\rangle=\frac{1}{\beta}\left(\frac{\partial\ln\Xi}{\partial\mu}\right)_{T,V},
\qquad
\langle E\rangle=-\frac{\partial\ln\Xi}{\partial\beta}+\mu\langle N\rangle.
$$

粒子数涨落：

$$
\langle(\Delta N)^2\rangle
=\frac{1}{\beta^2}\frac{\partial^2\ln\Xi}{\partial\mu^2}
=k_BT\left(\frac{\partial N}{\partial\mu}\right)_{T,V}.
$$

二级结论：

- 巨正则最适合处理量子气体，因为不同单粒子能级可独立求和。
- 若系统由独立能级 $r$ 组成，则 $\Xi=\prod_r \Xi_r$。
- 压强可直接由 $\ln\Xi$ 得到：$pV=k_BT\ln\Xi$。

## 3. 经典理想气体

### 核心公式

单粒子配分函数：

$$
z_1=\frac{1}{h^3}\int d^3q\,d^3p\,e^{-\beta p^2/(2m)}
=\frac{V}{\lambda_T^3},
\qquad
\lambda_T=\frac{h}{\sqrt{2\pi m k_BT}}.
$$

$N$ 个全同、稀薄、非相互作用粒子的正则配分函数：

$$
Z_N=\frac{z_1^N}{N!}=\frac{1}{N!}\left(\frac{V}{\lambda_T^3}\right)^N.
$$

用 Stirling 公式 $\ln N!\simeq N\ln N-N$ 得

$$
F=-Nk_BT\left[\ln\left(\frac{V}{N\lambda_T^3}\right)+1\right].
$$

状态方程与能量：

$$
pV=Nk_BT,\qquad U=\frac{3}{2}Nk_BT,\qquad C_V=\frac{3}{2}Nk_B.
$$

Sackur-Tetrode 型熵：

$$
S=Nk_B\left[\ln\left(\frac{V}{N\lambda_T^3}\right)+\frac{5}{2}\right].
$$

### Maxwell 速度分布

三维速度分布：

$$
f(\mathbf v)=\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

速率分布：

$$
P(v)=4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

三个常用速度：

$$
v_p=\sqrt{\frac{2k_BT}{m}},\qquad
\bar v=\sqrt{\frac{8k_BT}{\pi m}},\qquad
v_{rms}=\sqrt{\frac{3k_BT}{m}}.
$$

其中 $v_p$ 是最概然速率，$\bar v$ 是平均速率，$v_{rms}$ 是方均根速率。

### 能量均分定理

若 Hamiltonian 中某自由度以二次型出现，如 $ax^2$ 或 $bp^2$，则该二次项平均能量为

$$
\left\langle ax^2\right\rangle=\frac{1}{2}k_BT.
$$

二级结论：

- 单原子理想气体有 $3$ 个平动二次项，所以 $U=3Nk_BT/2$。
- 经典一维谐振子有动能和势能两个二次项，所以 $\langle E\rangle=k_BT$。
- 低温量子冻结时不能乱用均分定理。

## 4. 三种分布：MB、BE、FD

对单粒子能级 $\varepsilon_r$，平均占据数统一写成

$$
\bar n_r=\frac{1}{e^{\beta(\varepsilon_r-\mu)}-\eta},
$$

其中

| 分布 | $\eta$ | 占据数 | 粒子特点 |
|---|---:|---|---|
| Maxwell-Boltzmann | $0$ | $\bar n_r=e^{-\beta(\varepsilon_r-\mu)}$ | 稀薄经典极限 |
| Bose-Einstein | $+1$ | $\bar n_r=1/(e^{\beta(\varepsilon_r-\mu)}-1)$ | 玻色子，可多重占据 |
| Fermi-Dirac | $-1$ | $\bar n_r=1/(e^{\beta(\varepsilon_r-\mu)}+1)$ | 费米子，每态最多一个 |

巨正则单能级推导：

玻色子 $n=0,1,2,\cdots$：

$$
\Xi_r=\sum_{n=0}^{\infty}e^{-\beta n(\varepsilon_r-\mu)}
=\frac{1}{1-ze^{-\beta\varepsilon_r}},
$$

$$
\bar n_r=z\frac{\partial\ln\Xi_r}{\partial z}
=\frac{1}{e^{\beta(\varepsilon_r-\mu)}-1}.
$$

费米子 $n=0,1$：

$$
\Xi_r=1+e^{-\beta(\varepsilon_r-\mu)},
\qquad
\bar n_r=\frac{1}{e^{\beta(\varepsilon_r-\mu)}+1}.
$$

经典极限条件：

$$
z=e^{\beta\mu}\ll 1,\qquad n\lambda_T^3\ll 1.
$$

二级结论：

- Bose 气体要求 $\mu\le \varepsilon_0$，通常取基态能量 $\varepsilon_0=0$，所以 $\mu\le0$。
- Fermi 气体在 $T=0$ 时 $\bar n=1$ for $\varepsilon<\varepsilon_F$，$\bar n=0$ for $\varepsilon>\varepsilon_F$。
- 非简并极限下 BE/FD 都退化为 MB。

## 5. 态密度与高温量子修正

自由粒子三维态密度：

$$
g(\varepsilon)d\varepsilon
=\frac{g_s V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}
\varepsilon^{1/2}d\varepsilon.
$$

其中 $g_s=2s+1$ 是自旋简并度，$\hbar=h/(2\pi)$。

粒子数与能量：

$$
N=\int_0^\infty g(\varepsilon)\bar n(\varepsilon)d\varepsilon,
\qquad
U=\int_0^\infty \varepsilon g(\varepsilon)\bar n(\varepsilon)d\varepsilon.
$$

高温低密度展开的记忆式：

$$
\frac{pV}{Nk_BT}=1+\frac{B_2}{v}+\cdots,\qquad v=\frac{V}{N}.
$$

理想量子气体二阶修正符号：

$$
B_2=
\begin{cases}
-\lambda_T^3/2^{5/2}, & \text{Bose},\\
+\lambda_T^3/2^{5/2}, & \text{Fermi}.
\end{cases}
$$

考试记忆：Bose 有效吸引，压强比经典小；Fermi 有效排斥，压强比经典大。

## 6. 理想 Bose 气体与 BEC（玻色-爱因斯坦凝聚）

### 核心公式

取基态能量为 $0$。激发态粒子数为

$$
N_{ex}=\frac{V}{\lambda_T^3}g_{3/2}(z),
\qquad
g_\alpha(z)=\sum_{l=1}^{\infty}\frac{z^l}{l^\alpha}.
$$

因为 Bose 气体 $\mu\le0$，所以 $0<z\le1$。激发态最多容纳

$$
N_{ex}^{max}=\frac{V}{\lambda_T^3}\zeta(3/2).
$$

临界温度由 $N=N_{ex}^{max}$ 给出：

$$
T_c=\frac{2\pi\hbar^2}{mk_B}
\left(\frac{n}{\zeta(3/2)}\right)^{2/3},
\qquad n=\frac{N}{V}.
$$

$T<T_c$ 时凝聚粒子数：

$$
\frac{N_0}{N}=1-\left(\frac{T}{T_c}\right)^{3/2}.
$$

能量：

$$
U=\frac{3}{2}k_BT\frac{V}{\lambda_T^3}g_{5/2}(z).
$$

$T<T_c$ 时 $z=1$：

$$
U=\frac{3}{2}Nk_BT\frac{\zeta(5/2)}{\zeta(3/2)}
\,\left(\frac{T}{T_c}\right)^{3/2}.
$$

更常用写法是

$$
U=\frac{3}{2}Nk_BT_c
\frac{\zeta(5/2)}{\zeta(3/2)}
\,\left(\frac{T}{T_c}\right)^{5/2}.
$$

上式展示比例关系 $U\propto T^{5/2}$，所以 $C_V\propto T^{3/2}$。

### 推导抓手

1. 写 $\bar n(\varepsilon)=1/(e^{\beta(\varepsilon-\mu)}-1)$。
2. 把激发态求和换成态密度积分。
3. 注意 $\mu$ 最高只能到 $0$，于是激发态粒子数有上限。
4. 若总粒子数超过上限，多余粒子只能堆到基态。

### 二级结论

- BEC 即玻色-爱因斯坦凝聚，不等于相互作用导致的液化；理想 Bose 气体也可发生。
- 三维盒中会 BEC，因为 $g_{3/2}(1)=\zeta(3/2)$ 有限。
- 二维均匀理想 Bose 气体在热力学极限无有限温 BEC，因为对应积分红外发散。
- 凝聚后 $\mu=0$，温度再降也不变。

## 7. 理想 Fermi 气体

### 零温公式

三维自旋 $1/2$ Fermi 气体，$g_s=2$。费米波矢：

$$
k_F=(3\pi^2 n)^{1/3}.
$$

费米能：

$$
\varepsilon_F=\frac{\hbar^2k_F^2}{2m}
=\frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}.
$$

费米温度：

$$
T_F=\frac{\varepsilon_F}{k_B}.
$$

零温能量与压强：

$$
U_0=\frac{3}{5}N\varepsilon_F,
\qquad
p_0=\frac{2}{5}n\varepsilon_F,
\qquad
pV=\frac{2}{3}U.
$$

### 低温 Sommerfeld 结论

当 $T\ll T_F$：

$$
\mu(T)\simeq \varepsilon_F\left[1-\frac{\pi^2}{12}\left(\frac{T}{T_F}\right)^2\right],
$$

$$
U\simeq U_0\left[1+\frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2\right],
$$

$$
C_V\simeq \frac{\pi^2}{2}Nk_B\frac{T}{T_F}.
$$

二级结论：

- Fermi 气体低温热容正比 $T$，不是经典常数。
- 只有费米面（Fermi 面）附近宽度约 $k_BT$ 的粒子能被热激发。
- 白矮星简并压本质来自 Pauli 不相容，与温度关系弱。

## 8. 光子气体、热辐射与固体热容

### 光子气体

光子数不守恒，所以

$$
\mu_\gamma=0.
$$

Planck 分布：

$$
\bar n(\omega)=\frac{1}{e^{\beta\hbar\omega}-1}.
$$

能量密度：

$$
u(T)=aT^4,\qquad
a=\frac{\pi^2k_B^4}{15\hbar^3c^3}.
$$

压强：

$$
p=\frac{u}{3}.
$$

Stefan-Boltzmann 辐射出射度：

$$
j^\star=\sigma T^4,\qquad
\sigma=\frac{ac}{4}.
$$

二级结论：

- 光子气体满足 $U=3pV$。
- 熵 $S=4U/(3T)$。
- Wien 位移来自对谱分布求极值：$\lambda_mT=\text{const}$。

### 固体热容

Einstein 模型：

$$
C_V=3Nk_B
\left(\frac{\theta_E}{T}\right)^2
\,\frac{e^{\theta_E/T}}{(e^{\theta_E/T}-1)^2}.
$$

Debye 低温结论：

$$
C_V\simeq \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\theta_D}\right)^3.
$$

高温极限：

$$
C_V\to 3Nk_B.
$$

二级结论：

- 经典固体热容 $3Nk_B$ 是 Dulong-Petit 定律。
- 低温声子态密度 $g(\omega)\propto\omega^2$，所以 $C_V\propto T^3$。
- 电子热容 $C_e\propto T$，低温金属常写 $C=\gamma T+\alpha T^3$。

## 9. Ising 模型、平均场与 Landau 理论

### Ising 模型

Hamiltonian：

$$
H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_i s_i,\qquad s_i=\pm1.
$$

$J>0$ 为铁磁相互作用，$h$ 为外场，$\langle ij\rangle$ 表示最近邻。

平均场近似把邻居替换为平均磁化 $m=\langle s\rangle$：

$$
H_i^{MF}=-(zJm+h)s_i,
$$

其中 $z$ 是配位数。自洽方程：

$$
m=\tanh[\beta(zJm+h)].
$$

临界温度：

$$
k_BT_c=zJ.
$$

推导抓手：在 $h=0$、$m\to0$ 时，$\tanh x\simeq x$，非零解出现条件为 $\beta zJ>1$。

二级结论：

- $T>T_c$ 只有 $m=0$。
- $T<T_c$ 出现两个对称解 $m=\pm m_0$，对应自发对称破缺。
- 平均场给出的临界指数：$\beta_m=1/2$，$\gamma=1$，$\delta=3$，$\alpha=0$。这里 $\beta_m$ 是磁化临界指数，不是 $1/k_BT$。

### Landau 自由能

序参量 $\phi$ 的自由能展开：

$$
f(\phi)=f_0+\frac{a}{2}(T-T_c)\phi^2+\frac{b}{4}\phi^4-h\phi,\qquad b>0.
$$

平衡条件：

$$
\frac{\partial f}{\partial\phi}=a(T-T_c)\phi+b\phi^3-h=0.
$$

$h=0$ 时：

$$
\phi=0\quad (T>T_c),
$$

$$
\phi^2=\frac{a(T_c-T)}{b}\quad (T<T_c).
$$

二级结论：

- 序参量 $\phi\propto (T_c-T)^{1/2}$，所以 $\beta_m=1/2$。
- $T>T_c$，响应率 $\chi=(\partial\phi/\partial h)_{h=0}=1/[a(T-T_c)]$，所以 $\gamma=1$。
- $T=T_c$，$h=b\phi^3$，所以 $\delta=3$。
- 若 $\phi^4$ 系数变负，需要加 $\phi^6$ 稳定项，常对应一阶相变。

## 10. 关联函数、Gaussian 理论与标度

关联函数：

$$
G(r)=\langle \phi(\mathbf r)\phi(0)\rangle-\langle\phi\rangle^2.
$$

临界点附近常用形式：

$$
G(r)\sim \frac{e^{-r/\xi}}{r^{d-2+\eta}},
$$

其中 $\xi$ 是关联长度，$d$ 是空间维数，$\eta$ 是异常维数。

关联长度发散：

$$
\xi\sim |t|^{-\nu},\qquad t=\frac{T-T_c}{T_c}.
$$

Gaussian 自由能：

$$
F[\phi]=\int d^dx\left[
\frac{a}{2}t\phi^2+\frac{c}{2}(\nabla\phi)^2
\right].
$$

动量空间关联函数：

$$
G(k)=\frac{k_BT}{at+ck^2}.
$$

所以

$$
\xi=\sqrt{\frac{c}{at}}\propto t^{-1/2}.
$$

平均场/Gaussian 结论：

$$
\nu=\frac{1}{2},\qquad \eta=0.
$$

常用标度律：

$$
\alpha+2\beta_m+\gamma=2 \quad \text{Rushbrooke},
$$

$$
\gamma=\beta_m(\delta-1) \quad \text{Widom},
$$

$$
\gamma=\nu(2-\eta) \quad \text{Fisher},
$$

$$
2-\alpha=d\nu \quad \text{Hyperscaling}.
$$

二级结论：

- Hyperscaling 高于上临界维数时会失效；Ising 的上临界维数 $d_c=4$。
- 看到“关联长度”优先写 $\xi\sim |t|^{-\nu}$。
- 看到“临界点无特征长度”优先写幂律关联。

## 11. 重整化群 RG 的考试型框架

Kadanoff 图像：把长度缩放 $b>1$，粗粒化后系统参数变化：

$$
K' = R_b(K).
$$

不动点：

$$
K^\star=R_b(K^\star).
$$

不动点附近线性化：

$$
u_i'=b^{y_i}u_i.
$$

其中 $u_i$ 是缩放场，$y_i$ 是 RG 本征指数。

分类：

- $y_i>0$：相关扰动，远离不动点。
- $y_i<0$：无关扰动，流向不动点。
- $y_i=0$：边际扰动，需要看高阶。

关联长度 RG：

$$
\xi(t)=b\,\xi(t'),\qquad t'=b^{y_t}t.
$$

取 $b=|t|^{-1/y_t}$ 得

$$
\xi\sim |t|^{-1/y_t},\qquad \nu=\frac{1}{y_t}.
$$

自由能密度标度：

$$
f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h).
$$

二级结论：

- RG 题不会算时，先写“不动点 + 线性化 + 相关/无关 + 标度形式”。
- 临界指数来自不动点附近的本征值，不来自微观细节。
- 普适类由维数、序参量对称性、相互作用范围决定。

## 12. 例题模板

### 例题 1：二能级系统的正则系综

能级 $0,\epsilon$，单粒子配分函数

$$
z=1+e^{-\beta\epsilon}.
$$

$N$ 个可分辨独立粒子：

$$
Z=z^N=(1+e^{-\beta\epsilon})^N.
$$

平均能量：

$$
U=-\frac{\partial\ln Z}{\partial\beta}
=N\frac{\epsilon e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}
=\frac{N\epsilon}{e^{\beta\epsilon}+1}.
$$

热容：

$$
C_V=Nk_B(\beta\epsilon)^2
\frac{e^{\beta\epsilon}}{(e^{\beta\epsilon}+1)^2}.
$$

跳步结论：低温 $C_V\to0$，高温 $C_V\to0$，中间有 Schottky 峰。

### 例题 2：一维量子谐振子

能级 $\varepsilon_n=\hbar\omega(n+1/2)$。

$$
Z=\sum_{n=0}^{\infty}e^{-\beta\hbar\omega(n+1/2)}
=\frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}}.
$$

平均能量：

$$
U=-\frac{\partial\ln Z}{\partial\beta}
=\frac{1}{2}\hbar\omega+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.
$$

高温极限：

$$
U\simeq k_BT.
$$

三维各向同性谐振子直接乘 $3$：

$$
U_{3D}=3\left[\frac{1}{2}\hbar\omega+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}\right].
$$

### 例题 3：经典理想气体

从单粒子配分函数

$$
z_1=\frac{V}{\lambda_T^3}
$$

得

$$
Z_N=\frac{1}{N!}\left(\frac{V}{\lambda_T^3}\right)^N.
$$

自由能

$$
F=-k_BT\ln Z_N.
$$

压强：

$$
p=-\left(\frac{\partial F}{\partial V}\right)_{T,N}
=\frac{Nk_BT}{V}.
$$

能量：

$$
U=-\frac{\partial\ln Z_N}{\partial\beta}
=\frac{3}{2}Nk_BT.
$$

### 例题 4：巨正则单能级推出 BE/FD

若单能级能量为 $\varepsilon$。玻色：

$$
\Xi=\sum_{n=0}^{\infty}(ze^{-\beta\varepsilon})^n
=\frac{1}{1-ze^{-\beta\varepsilon}}.
$$

$$
\bar n=z\frac{\partial\ln\Xi}{\partial z}
=\frac{ze^{-\beta\varepsilon}}{1-ze^{-\beta\varepsilon}}
=\frac{1}{e^{\beta(\varepsilon-\mu)}-1}.
$$

费米：

$$
\Xi=1+ze^{-\beta\varepsilon},
\qquad
\bar n=\frac{ze^{-\beta\varepsilon}}{1+ze^{-\beta\varepsilon}}
=\frac{1}{e^{\beta(\varepsilon-\mu)}+1}.
$$

### 例题 5：BEC 临界温度与凝聚比例

给定密度 $n=N/V$。临界条件：

$$
n=\frac{1}{\lambda_{T_c}^3}\zeta(3/2).
$$

代入 $\lambda_T=h/\sqrt{2\pi mk_BT}$：

$$
T_c=\frac{2\pi\hbar^2}{mk_B}
\left(\frac{n}{\zeta(3/2)}\right)^{2/3}.
$$

若 $T<T_c$：

$$
N_0=N-N_{ex}
=N\left[1-\left(\frac{T}{T_c}\right)^{3/2}\right].
$$

考试跳步：只要题目是三维均匀理想 Bose 气体，看到“凝聚比例”就直接写上式。

### 例题 6：零温 Fermi 气体

态数填充到 $k_F$：

$$
N=2\frac{V}{(2\pi)^3}\frac{4\pi k_F^3}{3}.
$$

所以

$$
k_F=(3\pi^2 n)^{1/3}.
$$

能量：

$$
U=2\frac{V}{(2\pi)^3}\int_0^{k_F}
\frac{\hbar^2k^2}{2m}4\pi k^2\,dk
=\frac{3}{5}N\varepsilon_F.
$$

压强：

$$
p=-\left(\frac{\partial U}{\partial V}\right)_N
=\frac{2}{5}n\varepsilon_F.
$$

### 例题 7：光子气体 Stefan-Boltzmann 结论

用态密度

$$
g(\omega)d\omega=\frac{V}{\pi^2c^3}\omega^2d\omega
$$

和 Planck 分布：

$$
U=\int_0^\infty
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}
\frac{V}{\pi^2c^3}\omega^2d\omega.
$$

令 $x=\beta\hbar\omega$：

$$
U=\frac{V(k_BT)^4}{\pi^2\hbar^3c^3}
\int_0^\infty\frac{x^3}{e^x-1}dx.
$$

用积分

$$
\int_0^\infty\frac{x^3}{e^x-1}dx=\frac{\pi^4}{15}
$$

得

$$
\frac{U}{V}=aT^4,\qquad
a=\frac{\pi^2k_B^4}{15\hbar^3c^3}.
$$

### 例题 8：Ising 平均场临界温度

平均场自洽方程：

$$
m=\tanh(\beta zJm).
$$

临界点附近 $m$ 很小：

$$
\tanh(\beta zJm)\simeq \beta zJm-\frac{(\beta zJm)^3}{3}.
$$

非零解出现的条件：

$$
\beta_c zJ=1.
$$

所以

$$
k_BT_c=zJ.
$$

### 例题 9：Landau 理论求临界指数

令 $h=0$：

$$
f=f_0+\frac{a}{2}(T-T_c)\phi^2+\frac{b}{4}\phi^4.
$$

平衡条件：

$$
a(T-T_c)\phi+b\phi^3=0.
$$

$T<T_c$ 的非零解：

$$
\phi=\left[\frac{a(T_c-T)}{b}\right]^{1/2}.
$$

故

$$
\beta_m=\frac{1}{2}.
$$

$T>T_c$ 且小外场 $h$：

$$
a(T-T_c)\phi=h,
$$

所以

$$
\chi=\frac{\partial\phi}{\partial h}=\frac{1}{a(T-T_c)},
\qquad \gamma=1.
$$

### 例题 10：Saddle point 与 RG 答题模板

若配分函数可写为

$$
Z=\int dx\,e^{-Nf(x)},
$$

大 $N$ 极限由 saddle point $x_0$ 控制：

$$
f'(x_0)=0,\qquad
Z\simeq e^{-Nf(x_0)}
\sqrt{\frac{2\pi}{Nf''(x_0)}}.
$$

自由能密度：

$$
\frac{F}{N}\simeq k_BT f(x_0).
$$

RG 题模板：

$$
f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h),
\qquad
\xi(t)=b\xi(b^{y_t}t).
$$

取 $b=|t|^{-1/y_t}$：

$$
\xi\sim |t|^{-1/y_t},\qquad \nu=1/y_t.
$$

若不会继续，就写“临界指数由不动点线性化本征值决定；微观参数只影响非普适幅度”。

---

# 热力学突击复习讲义

## 13. 热力学符号表与总路线

| 符号 | 含义 | 常用关系 |
|---|---|---|
| $U$ | 内能 | $dU=T\,dS-p\,dV+\mu\,dN$ |
| $S$ | 熵 | $dS=\delta Q_{rev}/T$ |
| $T$ | 热力学温度 | $1/T=(\partial S/\partial U)_{V,N}$ |
| $p$ | 压强 | $p/T=(\partial S/\partial V)_{U,N}$ |
| $\mu$ | 化学势 | $-\mu/T=(\partial S/\partial N)_{U,V}$ |
| $H$ | 焓 | $H=U+pV$ |
| $F$ | Helmholtz 自由能 | $F=U-TS$ |
| $G$ | Gibbs 自由能 | $G=U-TS+pV=\mu N$ |
| $C_V,C_p$ | 定容、定压热容 | $C_X=T(\partial S/\partial T)_X$ |
| $\alpha$ | 体膨胀系数 | $\alpha=V^{-1}(\partial V/\partial T)_p$ |
| $\kappa_T$ | 等温压缩系数 | $\kappa_T=-V^{-1}(\partial V/\partial p)_T$ |
| $L$ | 潜热 | $L=T\Delta S$ |

热力学解题主线只有四步：

1. 先判断自然变量：$U(S,V,N)$、$H(S,p,N)$、$F(T,V,N)$、$G(T,p,N)$ 哪个最顺手。
2. 写对应微分式，直接读出偏导数。
3. 用混合偏导相等推出 Maxwell 关系。
4. 遇到相变或过程题，分别套平衡条件、Clapeyron 方程、第一/第二定律。

总公式：

$$
dU=T\,dS-p\,dV+\mu\,dN.
$$

其中 $T$ 是温度，$S$ 是熵，$p$ 是压强，$V$ 是体积，$\mu$ 是化学势，$N$ 是粒子数。对简单可压缩单组分体系，后面几乎所有公式都从这一行通过 Legendre 变换推出。

## 14. 热力学基本定律与基本方程

### 核心公式

热力学第零定律保证温度可定义：若 $A$ 与 $C$ 热平衡，$B$ 与 $C$ 热平衡，则 $A$ 与 $B$ 热平衡。

第一定律采用“体系对外做功为正”的约定：

$$
dU=\delta Q-\delta W,
\qquad
\delta W=p\,dV
\quad(\text{准静态体积功}).
$$

可逆过程中：

$$
\delta Q_{rev}=T\,dS,
\qquad
dU=T\,dS-p\,dV.
$$

第二定律的 Clausius 不等式：

$$
dS\ge \frac{\delta Q}{T_{env}},
\qquad
\oint\frac{\delta Q}{T}\le 0.
$$

等号对应可逆过程，不等号对应不可逆过程。孤立体系满足：

$$
\Delta S_{isolated}\ge 0.
$$

第三定律常用表述：

$$
\lim_{T\to 0}S(T)=S_0.
$$

完美晶体通常取 $S_0=0$，因此低温绝对熵可由热容积分得到：

$$
S(T)=\int_0^T\frac{C(T')}{T'}\,dT'.
$$

### 第一性原理推导抓手

把熵看成基本函数 $S=S(U,V,N)$：

$$
dS=\left(\frac{\partial S}{\partial U}\right)_{V,N}dU
+\left(\frac{\partial S}{\partial V}\right)_{U,N}dV
+\left(\frac{\partial S}{\partial N}\right)_{U,V}dN.
$$

定义强度量：

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial U}\right)_{V,N},
\qquad
\frac{p}{T}=\left(\frac{\partial S}{\partial V}\right)_{U,N},
\qquad
-\frac{\mu}{T}=\left(\frac{\partial S}{\partial N}\right)_{U,V}.
$$

于是

$$
dS=\frac{1}{T}dU+\frac{p}{T}dV-\frac{\mu}{T}dN,
$$

两边乘以 $T$：

$$
dU=T\,dS-p\,dV+\mu\,dN.
$$

考试中若问“温度、压强、化学势的热力学定义”，直接从 $S(U,V,N)$ 写出上面三条。

### 二级结论

- 孤立体系平衡条件：$S$ 最大。
- 恒温恒容体系平衡条件：$F$ 最小。
- 恒温恒压体系平衡条件：$G$ 最小。
- 恒熵恒压体系平衡条件：$H$ 最小。
- 可逆绝热：$dS=0$；不可逆绝热：$\Delta S>0$。
- 准静态不一定可逆；可逆一定准静态且无耗散。
- 态函数：$U,S,H,F,G$ 的变化只看初末态；过程量：$Q,W$ 依赖路径。

### 易混对照

| 条件 | 自发判据 | 平衡判据 |
|---|---|---|
| 孤立，$U,V,N$ 固定 | $\Delta S>0$ | $S$ 最大 |
| $T,V,N$ 固定 | $\Delta F<0$ | $F$ 最小 |
| $T,p,N$ 固定 | $\Delta G<0$ | $G$ 最小 |
| $S,p,N$ 固定 | $\Delta H<0$ | $H$ 最小 |

## 15. 热力学势、Legendre 变换与 Maxwell 关系

### 核心公式

四个常用热力学势：

$$
\begin{aligned}
U&=U(S,V,N),\\
H&=U+pV,\\
F&=U-TS,\\
G&=U-TS+pV.
\end{aligned}
$$

微分式：

$$
\begin{aligned}
dU&=T\,dS-p\,dV+\mu\,dN,\\
dH&=T\,dS+V\,dp+\mu\,dN,\\
dF&=-S\,dT-p\,dV+\mu\,dN,\\
dG&=-S\,dT+V\,dp+\mu\,dN.
\end{aligned}
$$

由微分式直接读偏导：

$$
\begin{aligned}
T&=\left(\frac{\partial U}{\partial S}\right)_{V,N},
&
p&=-\left(\frac{\partial U}{\partial V}\right)_{S,N},
&
\mu&=\left(\frac{\partial U}{\partial N}\right)_{S,V},\\
S&=-\left(\frac{\partial F}{\partial T}\right)_{V,N},
&
p&=-\left(\frac{\partial F}{\partial V}\right)_{T,N},
&
\mu&=\left(\frac{\partial F}{\partial N}\right)_{T,V},\\
S&=-\left(\frac{\partial G}{\partial T}\right)_{p,N},
&
V&=\left(\frac{\partial G}{\partial p}\right)_{T,N},
&
\mu&=\left(\frac{\partial G}{\partial N}\right)_{T,p}.
\end{aligned}
$$

四条 Maxwell 关系：

$$
\begin{aligned}
\left(\frac{\partial T}{\partial V}\right)_{S,N}
&=-\left(\frac{\partial p}{\partial S}\right)_{V,N},\\
\left(\frac{\partial T}{\partial p}\right)_{S,N}
&=\left(\frac{\partial V}{\partial S}\right)_{p,N},\\
\left(\frac{\partial S}{\partial V}\right)_{T,N}
&=\left(\frac{\partial p}{\partial T}\right)_{V,N},\\
\left(\frac{\partial S}{\partial p}\right)_{T,N}
&=-\left(\frac{\partial V}{\partial T}\right)_{p,N}.
\end{aligned}
$$

### 推导抓手

Maxwell 关系不用死背。先写势函数微分，再令混合偏导相等。例如

$$
dF=-S\,dT-p\,dV.
$$

因此

$$
S=-\left(\frac{\partial F}{\partial T}\right)_V,
\qquad
p=-\left(\frac{\partial F}{\partial V}\right)_T.
$$

利用 $F_{TV}=F_{VT}$，得到

$$
\left(\frac{\partial S}{\partial V}\right)_T
=
\left(\frac{\partial p}{\partial T}\right)_V.
$$

### 二级结论

- $G$ 对单组分均匀体系满足 $G=\mu N$。
- Helmholtz 自由能给压强：$p=-(\partial F/\partial V)_T$。
- Gibbs 自由能给体积：$V=(\partial G/\partial p)_T$。
- 熵常可由势函数温度导数得到：$S=-(\partial F/\partial T)_V=-(\partial G/\partial T)_p$。
- 定温定压相平衡时比较的是摩尔 Gibbs 自由能，也就是化学势。

### 易混对照

| 势函数 | 定义 | 自然变量 | 微分 | 最小原理 |
|---|---|---|---|---|
| $U$ | 内能 | $S,V,N$ | $T\,dS-p\,dV+\mu dN$ | $S,V,N$ 固定 |
| $H$ | $U+pV$ | $S,p,N$ | $T\,dS+V\,dp+\mu dN$ | $S,p,N$ 固定 |
| $F$ | $U-TS$ | $T,V,N$ | $-S\,dT-p\,dV+\mu dN$ | $T,V,N$ 固定 |
| $G$ | $U-TS+pV$ | $T,p,N$ | $-S\,dT+V\,dp+\mu dN$ | $T,p,N$ 固定 |

## 16. Euler 关系、Gibbs-Duhem 关系与化学势

### 核心公式

若 $U(S,V,N)$ 是一阶齐次函数：

$$
U(\lambda S,\lambda V,\lambda N)=\lambda U(S,V,N),
$$

Euler 定理给出：

$$
U=TS-pV+\mu N.
$$

于是

$$
G=U-TS+pV=\mu N.
$$

对 Euler 关系求微分并与基本方程相减，得到 Gibbs-Duhem 关系：

$$
S\,dT-V\,dp+N\,d\mu=0.
$$

单组分体系：

$$
d\mu=-s\,dT+v\,dp,
$$

其中 $s=S/N$ 是单粒子熵，$v=V/N$ 是单粒子体积；若用摩尔量，则 $s_m=S/n$，$v_m=V/n$。

### 推导抓手

化学势的三种等价定义：

$$
\mu=\left(\frac{\partial U}{\partial N}\right)_{S,V}
=\left(\frac{\partial F}{\partial N}\right)_{T,V}
=\left(\frac{\partial G}{\partial N}\right)_{T,p}.
$$

相平衡、扩散平衡和化学平衡本质都是“相应约束下 $G$ 最小”，所以粒子从高 $\mu$ 流向低 $\mu$，平衡时各相或各组分满足化学势条件。

### 二级结论

- 单组分两相平衡：$\mu^\alpha(T,p)=\mu^\beta(T,p)$。
- 多组分多相平衡：每个组分在各相中的化学势相等。
- 理想气体化学势常写成

$$
\mu(T,p)=\mu^\circ(T)+k_BT\ln\frac{p}{p^\circ}.
$$

- 理想混合物中

$$
\mu_i=\mu_i^\circ(T,p)+k_BT\ln x_i,
$$

其中 $x_i$ 是摩尔分数。

## 17. 热容、响应函数与稳定性

### 核心公式

热容：

$$
C_V=\left(\frac{\partial U}{\partial T}\right)_{V,N}
=T\left(\frac{\partial S}{\partial T}\right)_{V,N},
$$

$$
C_p=\left(\frac{\partial H}{\partial T}\right)_{p,N}
=T\left(\frac{\partial S}{\partial T}\right)_{p,N}.
$$

体膨胀系数与压缩系数：

$$
\alpha=\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_{p,N},
\qquad
\kappa_T=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_{T,N},
\qquad
\kappa_S=-\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_{S,N}.
$$

核心恒等式：

$$
C_p-C_V=
T\left(\frac{\partial p}{\partial T}\right)_V
\left(\frac{\partial V}{\partial T}\right)_p
=\frac{TV\alpha^2}{\kappa_T}.
$$

压缩系数与热容比：

$$
\frac{C_p}{C_V}=\frac{\kappa_T}{\kappa_S}.
$$

稳定性条件：

$$
C_V>0,
\qquad
C_p>0,
\qquad
\kappa_T>0,
\qquad
\left(\frac{\partial p}{\partial V}\right)_T<0.
$$

### 推导抓手

推 $C_p-C_V$ 时从

$$
dS=\left(\frac{\partial S}{\partial T}\right)_VdT
+\left(\frac{\partial S}{\partial V}\right)_TdV
$$

出发。乘以 $T$ 并令定压：

$$
C_p=T\left(\frac{\partial S}{\partial T}\right)_p
=C_V+T\left(\frac{\partial S}{\partial V}\right)_T
\left(\frac{\partial V}{\partial T}\right)_p.
$$

用 Maxwell 关系

$$
\left(\frac{\partial S}{\partial V}\right)_T
=
\left(\frac{\partial p}{\partial T}\right)_V
$$

得到第一式，再用循环关系化为 $TV\alpha^2/\kappa_T$。

### 二级结论

- 对理想气体：$C_p-C_V=Nk_B$ 或 $nR$。
- 单原子理想气体：$C_V=\frac{3}{2}Nk_B$，$C_p=\frac{5}{2}Nk_B$，$\gamma=5/3$。
- 双原子理想气体常温近似：$C_V=\frac{5}{2}Nk_B$，$C_p=\frac{7}{2}Nk_B$，$\gamma=7/5$。
- 临界点附近 $\kappa_T$ 可发散，因为等温线变平。
- 稳定体系的 $F(T,V)$ 对 $V$ 应凸，对应 $\kappa_T>0$。

## 18. 理想气体热力学过程

### 核心公式

理想气体状态方程：

$$
pV=Nk_BT=nRT.
$$

内能与焓只依赖温度：

$$
dU=C_V\,dT,
\qquad
dH=C_p\,dT.
$$

可逆绝热过程：

$$
pV^\gamma=\text{const},
\qquad
TV^{\gamma-1}=\text{const},
\qquad
T^\gamma p^{1-\gamma}=\text{const},
$$

其中 $\gamma=C_p/C_V$。

理想气体熵变：

$$
\Delta S
=nC_V\ln\frac{T_2}{T_1}
+nR\ln\frac{V_2}{V_1},
$$

也可写成

$$
\Delta S
=nC_p\ln\frac{T_2}{T_1}
-nR\ln\frac{p_2}{p_1}.
$$

### 常见过程表

| 过程 | 条件 | 热量 $Q$ | 功 $W=\int p\,dV$ | 内能变化 |
|---|---|---|---|---|
| 等容 | $V$ 不变 | $nC_V\Delta T$ | $0$ | $nC_V\Delta T$ |
| 等压 | $p$ 不变 | $nC_p\Delta T$ | $p\Delta V=nR\Delta T$ | $nC_V\Delta T$ |
| 等温 | $T$ 不变 | $nRT\ln(V_2/V_1)$ | $nRT\ln(V_2/V_1)$ | $0$ |
| 可逆绝热 | $S$ 不变 | $0$ | $nC_V(T_1-T_2)$ | $nC_V\Delta T$ |

### 推导抓手

绝热式从

$$
dS=nC_V\frac{dT}{T}+nR\frac{dV}{V}=0
$$

积分得到

$$
C_V\ln T+R\ln V=\text{const}.
$$

利用 $R=C_p-C_V=(\gamma-1)C_V$：

$$
TV^{\gamma-1}=\text{const}.
$$

结合 $pV=nRT$ 得 $pV^\gamma=\text{const}$。

### 二级结论

- 理想气体自由膨胀：$Q=0,W=0,\Delta U=0,\Delta T=0,\Delta S=nR\ln(V_2/V_1)>0$。
- 理想气体 Joule-Thomson 系数为零：$\mu_{JT}=(\partial T/\partial p)_H=0$。
- 可逆等温膨胀做功最大；不可逆膨胀做功较小。
- 可逆绝热线比等温线更陡：$|(\partial p/\partial V)_S|>|(\partial p/\partial V)_T|$。

## 19. 热机、制冷机与 Carnot 定理

### 核心公式

循环过程：

$$
\Delta U=0,
\qquad
W=Q_{in}-Q_{out}.
$$

热机效率：

$$
\eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h}.
$$

Carnot 热机：

$$
\eta_C=1-\frac{T_c}{T_h}.
$$

制冷机性能系数：

$$
\mathrm{COP}_R=\frac{Q_c}{W},
\qquad
\mathrm{COP}_{R,C}=\frac{T_c}{T_h-T_c}.
$$

热泵性能系数：

$$
\mathrm{COP}_{HP}=\frac{Q_h}{W}
=\frac{T_h}{T_h-T_c}.
$$

Clausius 不等式对循环：

$$
\oint \frac{\delta Q}{T}\le 0.
$$

### 推导抓手

Carnot 循环可逆，因此总熵变为零：

$$
\frac{Q_h}{T_h}-\frac{Q_c}{T_c}=0.
$$

所以

$$
\frac{Q_c}{Q_h}=\frac{T_c}{T_h},
\qquad
\eta=1-\frac{T_c}{T_h}.
$$

### 二级结论

- 在两个热源之间工作的任何热机效率都不超过 Carnot 效率。
- Carnot 效率只取决于两个热源温度，不取决于工质。
- 可逆循环熵变总和为零；不可逆循环满足 $\Delta S_{universe}>0$。
- 若题目给多个热源，直接用 $\sum_i Q_i/T_i\le 0$ 判定是否可能。

## 20. 相平衡、Clapeyron 方程与相图

### 核心公式

两相平衡条件：

$$
T^\alpha=T^\beta,
\qquad
p^\alpha=p^\beta,
\qquad
\mu^\alpha=\mu^\beta.
$$

单组分两相共存线上：

$$
\mu^\alpha(T,p)=\mu^\beta(T,p).
$$

利用

$$
d\mu=-s\,dT+v\,dp,
$$

得到 Clapeyron 方程：

$$
\frac{dp}{dT}
=\frac{s^\beta-s^\alpha}{v^\beta-v^\alpha}
=\frac{L}{T\Delta v}.
$$

其中 $L=T\Delta s$ 是单位粒子或单位摩尔潜热，$\Delta v=v^\beta-v^\alpha$ 是相变体积差。

气液相变若气相比体积远大于液相且气相近似理想气体：

$$
\frac{dp}{dT}\simeq \frac{L}{T v_g}
=\frac{Lp}{RT^2}
\quad(\text{摩尔量}).
$$

若 $L$ 近似常数：

$$
\ln p=-\frac{L}{R}\frac{1}{T}+\text{const}.
$$

Gibbs 相律：

$$
f=C-P+2.
$$

其中 $f$ 是自由度，$C$ 是组分数，$P$ 是相数。单组分体系 $f=3-P$。

### 推导抓手

Clapeyron 方程永远从 $\mu^\alpha=\mu^\beta$ 开始。沿相界移动仍相等：

$$
d\mu^\alpha=d\mu^\beta.
$$

代入 $d\mu=-s\,dT+v\,dp$：

$$
-s^\alpha dT+v^\alpha dp
=
-s^\beta dT+v^\beta dp.
$$

整理：

$$
\frac{dp}{dT}
=
\frac{s^\beta-s^\alpha}{v^\beta-v^\alpha}.
$$

再用 $L=T(s^\beta-s^\alpha)$ 得标准式。

### 二级结论

- 熔化线斜率由 $\Delta v$ 决定。水结冰时固相比液相体积大，熔化线斜率为负。
- 气液相变中 $\Delta v>0$，$L>0$，所以蒸汽压曲线斜率为正。
- 一级相变：$S,V$ 一阶导数不连续，存在潜热或体积突变。
- 二级相变：$S,V$ 连续，但 $C_p,\alpha,\kappa_T$ 等二阶导数不连续或发散。
- 三相点单组分 $P=3$，自由度 $f=0$，温度压强都固定。
- 临界点处气液差别消失，潜热趋于零，等温压缩系数常发散。

## 21. van der Waals 气体与临界点

### 核心公式

van der Waals 状态方程：

$$
\left(p+\frac{a n^2}{V^2}\right)(V-nb)=nRT.
$$

用摩尔体积 $v=V/n$：

$$
\left(p+\frac{a}{v^2}\right)(v-b)=RT.
$$

临界点满足等温线拐点条件：

$$
\left(\frac{\partial p}{\partial v}\right)_T=0,
\qquad
\left(\frac{\partial^2 p}{\partial v^2}\right)_T=0.
$$

对 van der Waals 气体：

$$
v_c=3b,
\qquad
T_c=\frac{8a}{27Rb},
\qquad
p_c=\frac{a}{27b^2}.
$$

临界压缩因子：

$$
Z_c=\frac{p_cv_c}{RT_c}=\frac{3}{8}.
$$

### 推导抓手

先把状态方程写成

$$
p=\frac{RT}{v-b}-\frac{a}{v^2}.
$$

求导：

$$
\left(\frac{\partial p}{\partial v}\right)_T
=-\frac{RT}{(v-b)^2}+\frac{2a}{v^3},
$$

$$
\left(\frac{\partial^2 p}{\partial v^2}\right)_T
=\frac{2RT}{(v-b)^3}-\frac{6a}{v^4}.
$$

令两式为零，解出 $v_c,T_c,p_c$。

### 二级结论

- $a$ 描述吸引作用，降低压强；$b$ 描述排斥体积，减小可用体积。
- 机械不稳定区满足 $(\partial p/\partial V)_T>0$。
- 真实气液共存区用 Maxwell 等面积法替代不稳定等温线。
- 等面积法本质是两相化学势相等：

$$
\int_{v_l}^{v_g}\left[p(v,T)-p_0\right]dv=0.
$$

## 22. 开放体系、混合熵与化学平衡

### 核心公式

多组分体系基本方程：

$$
dU=T\,dS-p\,dV+\sum_i\mu_i\,dN_i.
$$

Gibbs 自由能微分：

$$
dG=-S\,dT+V\,dp+\sum_i\mu_i\,dN_i.
$$

多组分 Euler 关系：

$$
G=\sum_i\mu_iN_i.
$$

Gibbs-Duhem 关系：

$$
S\,dT-V\,dp+\sum_iN_i\,d\mu_i=0.
$$

理想混合熵：

$$
\Delta S_{mix}
=-k_B\sum_i N_i\ln x_i
=-nR\sum_i x_i\ln x_i.
$$

理想混合自由能：

$$
\Delta G_{mix}=RT\sum_i n_i\ln x_i.
$$

化学反应 $\sum_i\nu_i A_i=0$ 的平衡条件为

$$
\sum_i\nu_i\mu_i=0.
$$

### 推导抓手

令反应进度为 $\xi$，则

$$
dN_i=\nu_i\,d\xi.
$$

在恒温恒压下：

$$
dG=\sum_i\mu_i\,dN_i
=\left(\sum_i\nu_i\mu_i\right)d\xi.
$$

平衡时 $G$ 对 $\xi$ 取极小，所以

$$
\sum_i\nu_i\mu_i=0.
$$

### 二级结论

- 理想溶液混合必然增熵：$\Delta S_{mix}>0$。
- 混合自由能通常为负，因为 $\ln x_i<0$。
- 半透膜渗透压稀溶液公式：

$$
\Pi V=n_sRT,
$$

其中 $n_s$ 是溶质物质的量。
- 平衡常数来自化学势标准态：

$$
\Delta G^\circ=-RT\ln K.
$$

反应商 $Q$ 下：

$$
\Delta G=\Delta G^\circ+RT\ln Q.
$$

## 23. Joule-Thomson 过程、节流与实际气体

### 核心公式

节流过程绝热、无外功，稳流近似下焓不变：

$$
\Delta H=0.
$$

Joule-Thomson 系数：

$$
\mu_{JT}=\left(\frac{\partial T}{\partial p}\right)_H.
$$

从 $dH=T\,dS+V\,dp$ 与

$$
dS=\frac{C_p}{T}dT-
\left(\frac{\partial V}{\partial T}\right)_pdp
$$

得到

$$
dH=C_p\,dT+
\left[
V-T\left(\frac{\partial V}{\partial T}\right)_p
\right]dp.
$$

令 $dH=0$：

$$
\mu_{JT}
=\frac{1}{C_p}
\left[
T\left(\frac{\partial V}{\partial T}\right)_p-V
\right].
$$

用 $\alpha$ 写：

$$
\mu_{JT}=\frac{V}{C_p}(T\alpha-1).
$$

反转曲线：

$$
\mu_{JT}=0
\quad\Longleftrightarrow\quad
T\alpha=1.
$$

### 二级结论

- 理想气体 $V=nRT/p$，所以 $T(\partial V/\partial T)_p=V$，故 $\mu_{JT}=0$。
- $\mu_{JT}>0$：降压降温。
- $\mu_{JT}<0$：降压升温。
- 节流不是可逆绝热膨胀；可逆绝热满足 $S$ 不变，节流满足 $H$ 不变且熵增加。

## 24. 热力学相变分类与 Ehrenfest 关系

### 核心公式

以 Gibbs 自由能 $G(T,p)$ 为核心：

$$
dG=-S\,dT+V\,dp.
$$

一阶导数：

$$
S=-\left(\frac{\partial G}{\partial T}\right)_p,
\qquad
V=\left(\frac{\partial G}{\partial p}\right)_T.
$$

二阶响应：

$$
C_p=-T\left(\frac{\partial^2G}{\partial T^2}\right)_p,
\qquad
\alpha=\frac{1}{V}\left(\frac{\partial^2G}{\partial p\partial T}\right),
\qquad
\kappa_T=-\frac{1}{V}\left(\frac{\partial^2G}{\partial p^2}\right)_T.
$$

Ehrenfest 分类：

- 一级相变：$G$ 连续，$S,V$ 不连续。
- 二级相变：$G,S,V$ 连续，$C_p,\alpha,\kappa_T$ 不连续或发散。

二级相变的 Ehrenfest 方程常写：

$$
\left(\frac{dp}{dT}\right)_{tr}
=\frac{\Delta C_p}{T V \Delta \alpha},
\qquad
\left(\frac{dp}{dT}\right)_{tr}
=\frac{\Delta \alpha}{\Delta \kappa_T}.
$$

### 推导抓手

一级相变用 $\Delta S,\Delta V$ 不为零，直接上 Clapeyron：

$$
\frac{dp}{dT}=\frac{\Delta S}{\Delta V}.
$$

二级相变中 $\Delta S=0,\Delta V=0$，Clapeyron 变成 $0/0$，需要对 $\Delta S=0$ 或 $\Delta V=0$ 沿相界求微分，得到 Ehrenfest 方程。

### 二级结论

- 潜热 $L=T\Delta S$，所以二级相变无潜热。
- 一阶导数是否连续看 $S,V$。
- 热容、膨胀系数、压缩系数是 $G$ 的二阶导数。
- 临界现象中 Ehrenfest 分类不够精细，通常改用临界指数描述。

## 25. 常用数学工具：偏导循环、Jacobian 与快速换元

### 核心公式

倒数关系：

$$
\left(\frac{\partial x}{\partial y}\right)_z
=
\frac{1}{(\partial y/\partial x)_z}.
$$

循环关系：

$$
\left(\frac{\partial x}{\partial y}\right)_z
\left(\frac{\partial y}{\partial z}\right)_x
\left(\frac{\partial z}{\partial x}\right)_y
=-1.
$$

Jacobian 写法：

$$
\left(\frac{\partial x}{\partial y}\right)_z
=
\frac{\partial(x,z)}{\partial(y,z)}.
$$

### 二级结论

看到三个变量互相偏导，优先用循环关系。推响应函数恒等式时常用

$$
\left(\frac{\partial p}{\partial T}\right)_V
\left(\frac{\partial T}{\partial V}\right)_p
\left(\frac{\partial V}{\partial p}\right)_T=-1.
$$

配合

$$
\left(\frac{\partial V}{\partial T}\right)_p=\alpha V,
\qquad
\left(\frac{\partial V}{\partial p}\right)_T=-\kappa_T V,
$$

立刻得到

$$
\left(\frac{\partial p}{\partial T}\right)_V=\frac{\alpha}{\kappa_T}.
$$

## 26. 热力学例题模板

### 例题 11：从 $S(U,V,N)$ 推出温度、压强和化学势

若给出基本方程 $S=S(U,V,N)$，直接写

$$
dS=S_U\,dU+S_V\,dV+S_N\,dN.
$$

与

$$
dS=\frac{1}{T}dU+\frac{p}{T}dV-\frac{\mu}{T}dN
$$

对比：

$$
T=\frac{1}{S_U},
\qquad
p=T S_V,
\qquad
\mu=-T S_N.
$$

考试跳步答案：

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial U}\right)_{V,N},
\quad
\frac{p}{T}=\left(\frac{\partial S}{\partial V}\right)_{U,N},
\quad
-\frac{\mu}{T}=\left(\frac{\partial S}{\partial N}\right)_{U,V}.
$$

### 例题 12：由 $F(T,V)$ 推状态方程和熵

给 $F(T,V,N)$，求压强、熵、内能。直接用

$$
dF=-S\,dT-p\,dV+\mu\,dN.
$$

因此

$$
S=-\left(\frac{\partial F}{\partial T}\right)_{V,N},
\qquad
p=-\left(\frac{\partial F}{\partial V}\right)_{T,N}.
$$

内能由 Legendre 反变换：

$$
U=F+TS.
$$

若还要热容：

$$
C_V=T\left(\frac{\partial S}{\partial T}\right)_V
=-T\left(\frac{\partial^2F}{\partial T^2}\right)_V.
$$

### 例题 13：推导 Maxwell 关系

题目要求推

$$
\left(\frac{\partial S}{\partial V}\right)_T
=
\left(\frac{\partial p}{\partial T}\right)_V.
$$

写

$$
dF=-S\,dT-p\,dV.
$$

于是

$$
S=-F_T,
\qquad
p=-F_V.
$$

混合偏导相等：

$$
\frac{\partial}{\partial V}(-F_T)
=
\frac{\partial}{\partial T}(-F_V).
$$

所以

$$
\left(\frac{\partial S}{\partial V}\right)_T
=
\left(\frac{\partial p}{\partial T}\right)_V.
$$

### 例题 14：理想气体绝热膨胀

已知初态 $(T_1,V_1)$，可逆绝热到 $V_2$。求 $T_2,p_2,W$。

可逆绝热：

$$
TV^{\gamma-1}=\text{const}.
$$

所以

$$
T_2=T_1\left(\frac{V_1}{V_2}\right)^{\gamma-1}.
$$

压强：

$$
p_2=p_1\left(\frac{V_1}{V_2}\right)^\gamma.
$$

因为 $Q=0$，体系对外做功为

$$
W=-\Delta U=nC_V(T_1-T_2).
$$

也可写成

$$
W=\frac{p_1V_1-p_2V_2}{\gamma-1}.
$$

### 例题 15：理想气体熵变

从 $(T_1,V_1)$ 到 $(T_2,V_2)$：

$$
\Delta S
=nC_V\ln\frac{T_2}{T_1}
+nR\ln\frac{V_2}{V_1}.
$$

若题目给的是 $(T,p)$：

$$
\Delta S
=nC_p\ln\frac{T_2}{T_1}
-nR\ln\frac{p_2}{p_1}.
$$

自由膨胀且理想气体温度不变：

$$
\Delta S=nR\ln\frac{V_2}{V_1}.
$$

### 例题 16：证明 $C_p-C_V=TV\alpha^2/\kappa_T$

先写

$$
C_p-C_V=
T\left(\frac{\partial p}{\partial T}\right)_V
\left(\frac{\partial V}{\partial T}\right)_p.
$$

代入

$$
\left(\frac{\partial V}{\partial T}\right)_p=\alpha V.
$$

由循环关系得

$$
\left(\frac{\partial p}{\partial T}\right)_V=\frac{\alpha}{\kappa_T}.
$$

所以

$$
C_p-C_V=T\frac{\alpha}{\kappa_T}\alpha V
=\frac{TV\alpha^2}{\kappa_T}.
$$

理想气体中 $\alpha=1/T$，$\kappa_T=1/p$，代入：

$$
C_p-C_V=\frac{TV(1/T^2)}{1/p}=\frac{pV}{T}=nR.
$$

### 例题 17：Carnot 热机效率

热机在 $T_h$ 吸热 $Q_h$，在 $T_c$ 放热 $Q_c$。可逆循环熵变为零：

$$
\frac{Q_h}{T_h}-\frac{Q_c}{T_c}=0.
$$

所以

$$
\frac{Q_c}{Q_h}=\frac{T_c}{T_h}.
$$

效率

$$
\eta=\frac{Q_h-Q_c}{Q_h}
=1-\frac{T_c}{T_h}.
$$

若问“是否可能”，用

$$
\eta\le 1-\frac{T_c}{T_h}
$$

检查。

### 例题 18：Clapeyron 方程算相界斜率

已知相变潜热 $L$，两相摩尔体积差 $\Delta v$，相变温度 $T$。相界斜率：

$$
\frac{dp}{dT}=\frac{L}{T\Delta v}.
$$

若是液-气相变且气体理想：

$$
\Delta v\simeq v_g=\frac{RT}{p}.
$$

于是

$$
\frac{dp}{dT}=\frac{Lp}{RT^2}.
$$

积分：

$$
\ln\frac{p_2}{p_1}
=-\frac{L}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right).
$$

### 例题 19：van der Waals 临界点

状态方程：

$$
p=\frac{RT}{v-b}-\frac{a}{v^2}.
$$

临界条件：

$$
p_v=0,
\qquad
p_{vv}=0.
$$

计算：

$$
-\frac{RT}{(v-b)^2}+\frac{2a}{v^3}=0,
$$

$$
\frac{2RT}{(v-b)^3}-\frac{6a}{v^4}=0.
$$

两式相除得 $v_c=3b$，代回得

$$
T_c=\frac{8a}{27Rb},
\qquad
p_c=\frac{a}{27b^2}.
$$

### 例题 20：Gibbs 相律判断自由度

公式：

$$
f=C-P+2.
$$

单组分一相：

$$
f=1-1+2=2,
$$

可独立改变 $T,p$。

单组分两相共存：

$$
f=1-2+2=1,
$$

只需给定 $T$ 或 $p$，另一个由相界决定。

单组分三相点：

$$
f=1-3+2=0,
$$

$T,p$ 都不能自由选。

### 例题 21：Joule-Thomson 系数判断升温降温

节流过程：

$$
dH=0.
$$

通式：

$$
\mu_{JT}
=\frac{1}{C_p}
\left[
T\left(\frac{\partial V}{\partial T}\right)_p-V
\right].
$$

若给 $\alpha$：

$$
\mu_{JT}=\frac{V}{C_p}(T\alpha-1).
$$

判断：

$$
\mu_{JT}>0 \Rightarrow \text{降压降温},
\qquad
\mu_{JT}<0 \Rightarrow \text{降压升温}.
$$

理想气体 $\alpha=1/T$，所以 $\mu_{JT}=0$。

### 例题 22：化学平衡条件

反应

$$
aA+bB\rightleftharpoons cC+dD.
$$

用计量数写

$$
\nu_A=-a,
\quad
\nu_B=-b,
\quad
\nu_C=c,
\quad
\nu_D=d.
$$

恒温恒压下

$$
dG=\sum_i\mu_i\,dN_i
=\left(\sum_i\nu_i\mu_i\right)d\xi.
$$

平衡：

$$
\sum_i\nu_i\mu_i=0.
$$

即

$$
c\mu_C+d\mu_D-a\mu_A-b\mu_B=0.
$$

若写成反应 Gibbs 自由能：

$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q.
$$

平衡时 $\Delta_rG=0$，所以

$$
\Delta_rG^\circ=-RT\ln K.
$$
