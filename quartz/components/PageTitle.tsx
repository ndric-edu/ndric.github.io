import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img
          src={`${baseDir}/static/ndric_svg_final.svg`}
          alt="ndriç"
          class="page-title-logo"
        />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}

.page-title-logo {
  height: 2.5rem;
  width: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor