export default function Projects() {
  const projects = [
    {
      title: 'Acoustic-Driven Surface Cleaning with Millimeter-Sized Bubbles at Translational Resonance',
      status: 'In Revision',
      venue: 'Droplet',
      year: '2025',
      link: 'https://www.researchgate.net/profile/Yanjun-Lin-7/publication/392521031_Acoustic-Driven_Surface_Cleaning_with_Millimeter-Sized_Bubbles_at_Translational_Resonance/links/6846d7838a76251f22ec6c19/Acoustic-Driven-Surface-Cleaning-with-Millimeter-Sized-Bubbles-at-Translational-Resonance.pdf',
      image: '', // Add image URL here (optional)
      laySummary:
        'We found a sweet spot in how you shake millimeter-sized bubbles so they scrub surfaces much more effectively without needing harsh cavitation.',
      technicalSummary: (
        <>
          <p className="mb-3">
            This work demonstrates a novel low-frequency translational resonance mode of millimetric
            bubbles in water and shows that driving bubbles at this resonance (around 45–50 Hz for
            ~0.65 mm radius bubbles) dramatically boosts surface cleaning compared to off-resonance
            or static conditions.
          </p>
          <p className="mb-3">
            We model the bubble as a forced, damped harmonic oscillator in translation, with the
            restoring force arising from surface tension acting on curvature changes when the bubble
            deforms into an ellipsoid. The effective spring constant k<sub>eff</sub> ≈ σ (surface tension),
            and inertia is dominated by hydrodynamic added mass m<sub>eff</sub> = C<sub>A</sub> ρ<sub>f</sub> (4/3)πR₀³,
            yielding a natural frequency f<sub>peak</sub> ∝ R₀<sup>-3/2</sup>.
          </p>
          <p className="mb-3">
            Experimental validation via PIV shows that only near resonance does the bubble centroid
            move faster than the surrounding fluid. We observe "stop-and-go" sliding dynamics on
            inclined surfaces that create transient high-shear events.
          </p>
          <p className="mb-3">
            <strong>Cleaning Results:</strong> Bubbles driven at 50 Hz remove ~34% of protein-based
            artificial soil from glass slides, compared to ~18–19% at 0 or 130 Hz with bubbles, and
            only ~1.5% for submersion controls. This represents approximately a <strong>90% improvement</strong> in
            cleaning efficacy at resonance compared to non-resonant bubble cleaning.
          </p>
          <p>
            The work offers a low-frequency, non-cavitating alternative for surface cleaning with
            clear oscillator-based scaling laws suitable for rational design.
          </p>
        </>
      ),
    },
    {
      title: 'Return to Sports After Total Hip Arthroplasty: Patterns of Participation and Sport-Specific Outcomes',
      status: 'Published',
      venue: 'The Journal of Arthroplasty',
      year: '2025',
      link: 'https://www.sciencedirect.com/science/article/pii/S0883540325014500',
      image: '', // Add image URL here (optional)
      laySummary:
        'Most people get back to the sports they enjoy after hip replacement, and surgical approach does not dramatically change that.',
      technicalSummary: (
        <>
          <p className="mb-3">
            This retrospective study at a single tertiary academic center analyzed <strong>1,115 patients</strong> who
            underwent primary unilateral total hip arthroplasty (THA) between 2011 and 2022 and
            reported athletic participation at any time point.
          </p>
          <p className="mb-3">
            <strong>Cohort characteristics:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>Posterior approach (PA): n = 519</li>
            <li>Anterior approach (AA): n = 556</li>
            <li>Lateral approach (LA): n = 50</li>
          </ul>
          <p className="mb-3">
            Activity was tracked at four time points: two years pre-op, one year pre-op, one year
            post-op, and time of survey. Sports included cycling, running, jogging, swimming, tennis,
            skiing, and team sports.
          </p>
          <p className="mb-3">
            <strong>Key findings:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>
              Overall, 45.2% of patients were active in at least one sport one year pre-op versus
              43.7% one year post-op.
            </li>
            <li>
              Among pre-op athletes, <strong>73.2% returned to sports</strong> at one year post-op.
            </li>
            <li>
              23.3% of previously inactive patients took up new sports after THA.
            </li>
            <li>
              Return rates by approach: PA 68.1%, AA 77.0%, LA 81.8%. Chi-square test showed no
              significant association after correction.
            </li>
            <li>
              Low-impact sports (cycling, golf, swimming) showed 72.4% return rate vs. high-impact
              sports (running, team sports, skiing) at 50.0% (P &lt; 0.001).
            </li>
            <li>
              Most returners resumed similar or slightly modified duration and exertion; some sports
              (swimming, skiing) saw notable fractions actually increase exertion post-op.
            </li>
            <li>
              About one in five patients report activity restrictions at follow-up, with a mix of
              provider-imposed and self-imposed reasons. Satisfaction with athletic participation is
              generally high.
            </li>
          </ul>
          <p>
            THA patients, including younger and more active individuals, can usually return to sports.
            Surgical approach does not appear to make a major difference in return to sports at one
            year. Low-impact sports show better return rates, but even high-impact sports see
            substantial successful returns. THA can both restore and sometimes initiate sports
            participation.
          </p>
        </>
      ),
    },
    {
      title: 'Harm-Threshold Utilitarianism: Exploring an Ethical Framework for Organ Transplant Allocation',
      status: 'In Review',
      venue: 'Frontiers in Health Services',
      year: '2025',
      link: 'https://osf.io/preprints/socarxiv/h2356',
      image: '', // Add image URL here (optional)
      laySummary:
        'I designed a transplant allocation rule that balances saving the most life-years with never totally abandoning patients at catastrophic risk.',
      technicalSummary: (
        <>
          <p className="mb-3">
            Existing allocation rules like MELD prioritize urgency but may sacrifice total
            post-transplant life-years. Pure utilitarian rules that maximize expected benefit can be
            ethically troubling because they may repeatedly bypass the sickest patients for marginal
            predicted gains.
          </p>
          <p className="mb-3">
            <strong>Harm-Threshold Utilitarianism (HTU)</strong> retains the utilitarian goal of
            maximizing expected benefit but imposes two explicit constraints:
          </p>
          <ol className="list-decimal ml-6 mb-3 space-y-2">
            <li>
              <strong>Epistemic threshold:</strong> Only act on differences in predicted utility that
              are statistically robust. We compute P(U<sub>i</sub> &gt; U<sub>j</sub>) and require
              this probability to exceed 1 − α (e.g., 0.95). Under Gaussian assumptions, this yields
              an uncertainty-adjusted utility μ<sup>adj</sup><sub>i</sub> = μ<sub>i</sub> − z σ<sub>i</sub>,
              where z = Φ<sup>-1</sup>(1 − α).
            </li>
            <li>
              <strong>Catastrophic harm threshold:</strong> Avoid leaving patients with very high
              short-term mortality risk H<sub>i</sub> untransplanted purely for marginal predicted
              gains. Define H<sub>crit</sub> (e.g., 0.30 for 90-day mortality) and for each candidate i,
              compute N<sub>i</sub> = |{'{'}j ≠ i : H<sub>j</sub> ≥ H<sub>crit</sub>{'}'}|, the number of
              other patients who would remain above catastrophic risk if organ goes to i.
            </li>
          </ol>
          <p className="mb-3">
            <strong>Allocation rule:</strong> Lexicographically minimize N<sub>i</sub> first, then
            maximize μ<sup>adj</sup><sub>i</sub> among tied candidates.
          </p>
          <p className="mb-3">
            <strong>Simulation results</strong> using de-identified OPTN/STAR liver transplant registry
            data (2002–2025) show that HTU yields approximately <strong>0.25 additional years</strong> (~3 months)
            of five-year restricted mean survival time (RMST) per transplant compared to MELD-based
            selection, while protecting the worst-off via the harm threshold.
          </p>
          <p>
            Varying H<sub>crit</sub> traces out an urgency-efficiency frontier, making fairness
            trade-offs transparent and auditable. HTU embeds basic deontological constraints inside a
            utilitarian framework, providing a tunable, ethically explicit allocation rule.
          </p>
        </>
      ),
    },
    {
      title: 'Impact Orientation and Knee Bracing Effects on Tibial Stress: A Finite Element Study',
      status: 'In Preparation',
      venue: 'TBD',
      year: '2025',
      image: '', // Add image URL here (optional)
      laySummary:
        'Using computer simulations of the tibia, we show how the angle of impact and whether your knee is braced change where stress concentrates in the bone.',
      technicalSummary: (
        <>
          <p className="mb-3">
            This project uses finite element analysis (FEA) to investigate how <strong>impact orientation</strong>,
            <strong>knee bracing</strong>, and <strong>foot position</strong> modulate stress distributions in the
            tibia and fibula under traumatic loading conditions.
          </p>
          <p className="mb-3">
            <strong>Modeling approach:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>
              Geometry derived from CT-based tibial data sets, meshed into solid elements
            </li>
            <li>
              Proximal boundary conditions approximate knee joint reaction forces
            </li>
            <li>
              Distal conditions represent foot contact or partial bracing scenarios
            </li>
            <li>
              Impulsive or quasi-static loads applied to medial vs. anterior cortical surfaces
            </li>
          </ul>
          <p className="mb-3">
            <strong>Key comparisons:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>Medial-side impact vs. anterior impact</li>
            <li>Both-sides-braced vs. foot-lifted configurations</li>
            <li>Von Mises stress and principal strain distributions along cortical bone</li>
            <li>Peak stress magnitude and "stress volume" metrics</li>
          </ul>
          <p className="mb-3">
            Preliminary results suggest that apparently "safer" impact orientations can paradoxically
            concentrate stress in certain cortical regions, and that bracing patterns significantly
            influence the distribution of load between bone and soft tissue.
          </p>
          <p>
            This work demonstrates a computational framework for reasoning about fracture risk and
            protective equipment design, complementing experimental and clinical orthopaedic research.
          </p>
        </>
      ),
    },
    {
      title: 'Vapor Field and Condensation Patterns around Hygroscopic Sinks: How Fungi Alter Fluid Microenvironments',
      status: 'In Preparation',
      venue: 'TBD',
      year: '2025',
      image: '', // Add image URL here (optional)
      laySummary:
        'We model and measure how moisture collects near surfaces that absorb water vapor, like salt patches or fungal threads, to understand condensation patterns.',
      technicalSummary: (
        <>
          <p className="mb-3">
            This project bridges soft-matter physics and practical moisture control by modeling and
            measuring <strong>vapor concentration fields</strong> around hygroscopic sinks such as salt
            hydrogel patches and fungal hyphal surfaces.
          </p>
          <p className="mb-3">
            <strong>Theoretical framework:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>
              2D diffusion-reaction model: ∇²c − χc = 0 in porous regions, or ∂<sub>t</sub>c = D ∇²c − S(x,y,c)
              for transient cases
            </li>
            <li>
              Sinks characterized by effective sink strength parameters extracted from boundary
              conditions
            </li>
            <li>
              Supersaturation profiles S(r) derived from vapor concentration field solutions
            </li>
          </ul>
          <p className="mb-3">
            <strong>Experimental validation:</strong>
          </p>
          <ul className="list-disc ml-6 mb-3 space-y-1">
            <li>
              Track droplet size distributions and spatial density as functions of distance from
              hygroscopic sinks and time
            </li>
            <li>
              Extract growth rate proxies from droplet radius evolution: dr/dt ∝ S(r)
            </li>
            <li>
              Compare measured supersaturation profiles with model predictions to validate sink
              strength estimates
            </li>
          </ul>
          <p className="mb-3">
            Observables include spatially resolved condensation rates, droplet nucleation density, and
            temporal evolution of droplet size distributions near the vapor sink.
          </p>
          <p>
            The work provides a quantitative link between hygroscopic material properties and
            condensation patterns, with applications ranging from dew harvesting to understanding
            fungal microenvironments and designing moisture-control surfaces.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Elegant Header */}
      <div className="mb-20 text-center">
        <div className="inline-block">
          <h1 className="text-6xl font-extralight text-gray-900 mb-4 tracking-tight">Projects</h1>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
      </div>

      {/* Project Grid with Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300"></div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-12 top-8 w-2 h-2 -ml-px bg-gray-900 rounded-full ring-4 ring-gray-50 transition-all group-hover:ring-gray-100 group-hover:scale-150"></div>

              {/* Project Number */}
              <div className="hidden lg:block absolute left-0 top-6 w-8 text-right">
                <span className="text-xs font-light text-gray-400 tracking-widest">0{index + 1}</span>
              </div>

              {/* Project Content */}
              <div className="lg:ml-28 bg-white border border-gray-200 overflow-hidden transition-all duration-500 group-hover:border-gray-400 group-hover:shadow-2xl">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-10 py-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-light text-gray-900 leading-tight max-w-3xl">
                      {project.title}
                    </h2>
                    <div className="flex gap-3 text-xs tracking-wider">
                      <span className="px-4 py-1.5 bg-white border border-gray-300 text-gray-700 font-light uppercase">
                        {project.status}
                      </span>
                      <span className="px-4 py-1.5 bg-gray-900 text-white font-light">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-light text-gray-500 tracking-wide">{project.venue}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white text-xs font-light tracking-wide uppercase transition-colors duration-300"
                      >
                        View Paper →
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-10 py-8">
                  {/* Image (if provided) */}
                  {project.image && (
                    <div className="mb-8">
                      <div className="relative overflow-hidden rounded-sm aspect-video bg-gradient-to-br from-amber-50 to-stone-100 luxury-card">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Summary Section */}
                  <div className="mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px flex-1 bg-gray-200"></div>
                      <h3 className="text-xs font-normal text-gray-500 uppercase tracking-widest">
                        Summary
                      </h3>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <p className="text-base leading-relaxed text-gray-700 font-light max-w-4xl mx-auto text-center">
                      {project.laySummary}
                    </p>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-gray-200"></div>
                      <h3 className="text-xs font-normal text-gray-500 uppercase tracking-widest">
                        Technical Details
                      </h3>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <div className="text-sm leading-relaxed text-gray-700 font-light space-y-4 max-w-4xl">
                      {project.technicalSummary}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Footer */}
      <div className="mt-32 mb-16">
        <div className="text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
          <p className="text-sm text-gray-500 font-light italic tracking-wide">
            Only projects in which I serve as lead investigator are listed above
          </p>
        </div>
      </div>
    </div>
  )
}
