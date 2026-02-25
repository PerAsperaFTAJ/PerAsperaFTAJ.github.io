import type { PortalLinkType } from "../../portal.config";

export function isExternalLink(link: string, linkType?: PortalLinkType): boolean {
  return linkType === "external" || /^https?:\/\//.test(link);
}

export function linkAttrs(link: string, linkType?: PortalLinkType): Record<string, string> {
  if (isExternalLink(link, linkType)) {
    return {
      href: link,
      target: "_blank",
      rel: "noreferrer"
    };
  }

  return { href: link };
}
