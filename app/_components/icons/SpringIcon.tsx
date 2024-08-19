import {ComponentPropsWithoutRef} from "react"

export const SpringIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 256 250"
        version="1.1"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <g>
          <path
            d="M38.9437824,35.879008 C89.5234256,-13.1200214 170.398168,-11.8028432 219.397197,39.0402357 C224.929346,31.6640377 229.671187,23.4975328 233.095851,15.0675923 C249.165425,64.0666217 258.912543,105.162582 255.224444,137.038295 C253.380395,163.90873 242.842969,189.725423 225.456217,210.273403 C180.145286,264.014274 99.53398,270.863601 45.7931091,225.55267 L45.7931091,225.55267 L44.765,224.638 L44.7103323,224.601984 C44.5420247,224.484832 44.376007,224.362668 44.2124952,224.235492 C43.7219599,223.853965 43.2765312,223.438607 42.8762093,222.995252 L42.732,222.831 L41.0512675,221.3377 C39.4121124,219.93271 37.7729573,218.52772 36.3188215,216.93771 L35.7825547,216.332423 C-13.2164747,165.752779 -11.6358609,84.8780374 38.9437824,35.879008 Z M57.9111486,207.375611 C53.169307,203.687512 46.3199803,204.214383 42.6318814,208.956225 C39.3888978,213.125775 39.4048731,218.924805 42.6798072,222.771269 L42.732,222.831 L44.765,224.638 L44.9644841,224.773953 C49.5691585,227.80174 55.7644273,227.175885 59.2982065,222.896387 L59.4917624,222.654878 C63.1798614,217.913037 62.3895545,211.06371 57.9111486,207.375611 Z M231.778672,28.2393744 C218.60689,55.9001168 185.940871,76.9749681 157.753257,83.5608592 C131.146257,89.8833146 107.963921,84.6146018 83.4644059,94.0982849 C27.6160498,115.436572 28.6697923,181.822354 59.2283268,196.838185 L59.2283268,196.838185 L61.0723763,197.891928 C61.0723763,197.891928 83.1456487,193.50309 104.973663,187.707242 L106.843514,187.207079 C115.561826,184.857554 124.138869,182.296538 131.146257,179.714869 C167.500376,166.279651 207.542593,133.08676 220.714375,94.6251562 C213.865049,134.667374 179.35498,173.392413 144.84491,191.042601 C126.404416,200.526284 112.178891,202.633769 81.883792,213.171195 C78.195693,214.488373 75.297901,215.805551 75.297901,215.805551 C75.6675607,215.754564 76.0372203,215.70481 76.4060145,215.65629 L77.1421925,215.560893 L77.1421925,215.560893 L77.8745239,215.468787 C84.5652297,214.639554 90.5771682,214.224938 90.5771682,214.224938 C133.517178,212.117452 200.956702,226.342977 232.305544,184.45671 C264.444692,141.780136 246.531068,72.7599979 231.778672,28.2393744 Z"
            fill="currentColor"
          ></path>
          <path
            d="M57.9111486,207.375611 C62.3895545,211.06371 63.1798614,217.913037 59.4917624,222.654878 C55.8036635,227.39672 48.9543368,227.923591 44.2124952,224.235492 C39.4706537,220.547393 38.9437824,213.698066 42.6318814,208.956225 C46.3199803,204.214383 53.169307,203.687512 57.9111486,207.375611 Z M231.778672,28.2393744 C246.531068,72.7599979 264.444692,141.780136 232.305544,184.45671 C200.956702,226.342977 133.517178,212.117452 90.5771682,214.224938 C90.5771682,214.224938 84.5652297,214.639554 77.8745239,215.468787 L77.1421925,215.560893 C76.5300999,215.63902 75.9140004,215.720572 75.297901,215.805551 C75.297901,215.805551 78.195693,214.488373 81.883792,213.171195 C112.178891,202.633769 126.404416,200.526284 144.84491,191.042601 C179.35498,173.392413 213.865049,134.667374 220.714375,94.6251562 C207.542593,133.08676 167.500376,166.279651 131.146257,179.714869 C106.119871,188.935116 61.0723763,197.891928 61.0723763,197.891928 L59.2283268,196.838185 C28.6697923,181.822354 27.6160498,115.436572 83.4644059,94.0982849 C107.963921,84.6146018 131.146257,89.8833146 157.753257,83.5608592 C185.940871,76.9749681 218.60689,55.9001168 231.778672,28.2393744 Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    );
}