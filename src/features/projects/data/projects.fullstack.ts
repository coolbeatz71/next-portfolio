import type { ProjectByStack } from "@/features/projects/data/projects.tabs";

export const projectsFullStack: ProjectByStack[] = [
    {
        name: "StorM",
        role: "fullstack_engineer",
        description: "projects_description.storm",
        stack: [
            "C#",
            ".NET",
            "NextJs",
            "Chakra-UI",
            "Typesense",
            "InstantSearchJs"
        ],
        images: [
            { alt: "storm-preview", src: "/projects/storm/storm_preview.jpg" },
            {
                alt: "storm-home",
                src: "/projects/storm/storm_home.png"
            },
            {
                alt: "storm-home-dark",
                src: "/projects/storm/storm_home_dark.png"
            },
            {
                alt: "storm-details",
                src: "/projects/storm/storm_details.png"
            },
            {
                alt: "storm-modal",
                src: "/projects/storm/storm_modal.png"
            },
            {
                alt: "storm-upload",
                src: "/projects/storm/storm_upload.png"
            },
            {
                alt: "storm-tablet-mobile",
                src: "/projects/storm/storm_tablet_mobile.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,UklGRiIFAABXRUJQVlA4WAoAAAAgAAAARAEAwAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggNAMAABAiAJ0BKkUBwQA+7XCuUrOyLiel8kwScB2JaW7gPDpkMerEZDnxtec8A//4c3H9N3XjH0AbYwZVVxb5NHLLb7SLa9EkN+bOATjW+hgpXwr0d9ObX0TSjpuNh7u/xOWPGVMHsKv86KJzq6pUxQMO+70BgCBQz3sAbOKGlEevrgcngBWl4Wc6B2Ose/L2u75JQjhx/ztfelWNwgW25ePK1hRU03VM7N00gLnIvmeQkoaIHQzj6c2bQGJrVredUp20hdPH59LwjqXCjWtAIRk2n5QJ4FNJTzNYQbBk4tPgzhqDPZ5lSkb7nPflVVxec0TprinQsbHcGbBxzfXkGezrqrrkpd3ly/egKnyGyGqyUbZ3sxq5z/EWFo8YAP7puPfCcLYc4Y5ox2BXzbIPJPCPcs1QftiZIIiZ4qGKMwZ2brLrMVoyrgFG7fuVTgq+VQpdJBUF2IY8gF2g922eFGtetDOL/suvQUdZ7FI7l45hVAn5j2WBXQA3I8BK2QBscBRtbM+tUWUAHGw26xcU5uP+36bE6ZDKAPkGhd9wbO3HjvYzNVWzINv2utE//5m+d+QUoF049QE3DXtfTtWDSPg54Crx81Asds93528zML1e6WvbinJbCwF1nneCcxaxB5633cETLyXb8VT+x9rWej646mCxYFx6WGL0nN1tU4kYEyGlH9heAMnSN9riCv2czcoosNRXHSjtyyu7CnJpueU1HS+EOD2eJAYEtEoQE2wjCuSpO2LJBjHIP9LxXsnsAIMtY0bg5C+4e64g3Do7BlblLVZJXsWrY5l0DmGLcAfdIf0oL7KhbfFKKX6D4loQvXxNMqLnyrFxqEt9aWX2zWYOsf5r0WyECV+t1I6vsJ5nGI+MDwvHLLCHWnOalHoOgTmNnio6eH3KYxEJTX1vBxF7+HoEV8xP7p7wXTZttgNqE97ubFFybgvGFTubOTbIp4uyyNY1jZo4DOAlUVYPqdcUbPSCMYQHbV5E65inkeGZ+Qh1yujX33dzBiWEFA0ruvI1HdNab4Tc/wVS1RjXAR6xr5GXe34udQLvWwmpPZP7jjy93gmS8GgdQXdRmYXP5hWVcnLNQAA=",
        liveLink: "https://storm.bestseller.com/",
        hasLiveLink: true,
        hasSourceCode: false,
        hasPreviewImage: true
    },
    {
        name: "ServiceNow",
        role: "servicenow_developer",
        description: "projects_description.servicenow",
        stack: [
            "Business Rules",
            "Scheduled Job",
            "Flow Designer",
            "GlideScript",
            "SMTP"
        ],
        images: [
            {
                alt: "servicenow-preview",
                src: "/projects/servicenow/servicenow_preview.jpg"
            },
            {
                alt: "serviceportal-dashboard",
                src: "/projects/servicenow/serviceportal_dashboard.png"
            },
            {
                alt: "serviceportal-home",
                src: "/projects/servicenow/serviceportal_home.png"
            },
            {
                alt: "serviceportal-main",
                src: "/projects/servicenow/serviceportal_main.png"
            },
            {
                alt: "serviceportal-parental-leave",
                src: "/projects/servicenow/serviceportal_parental_leave.png"
            },
            {
                alt: "serviceportal-tech",
                src: "/projects/servicenow/serviceportal_tech.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,UklGRiIFAABXRUJQVlA4WAoAAAAgAAAARAEAwAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggNAMAABAiAJ0BKkUBwQA+7XCuUrOyLiel8kwScB2JaW7gPDpkMerEZDnxtec8A//4c3H9N3XjH0AbYwZVVxb5NHLLb7SLa9EkN+bOATjW+hgpXwr0d9ObX0TSjpuNh7u/xOWPGVMHsKv86KJzq6pUxQMO+70BgCBQz3sAbOKGlEevrgcngBWl4Wc6B2Ose/L2u75JQjhx/ztfelWNwgW25ePK1hRU03VM7N00gLnIvmeQkoaIHQzj6c2bQGJrVredUp20hdPH59LwjqXCjWtAIRk2n5QJ4FNJTzNYQbBk4tPgzhqDPZ5lSkb7nPflVVxec0TprinQsbHcGbBxzfXkGezrqrrkpd3ly/egKnyGyGqyUbZ3sxq5z/EWFo8YAP7puPfCcLYc4Y5ox2BXzbIPJPCPcs1QftiZIIiZ4qGKMwZ2brLrMVoyrgFG7fuVTgq+VQpdJBUF2IY8gF2g922eFGtetDOL/suvQUdZ7FI7l45hVAn5j2WBXQA3I8BK2QBscBRtbM+tUWUAHGw26xcU5uP+36bE6ZDKAPkGhd9wbO3HjvYzNVWzINv2utE//5m+d+QUoF049QE3DXtfTtWDSPg54Crx81Asds93528zML1e6WvbinJbCwF1nneCcxaxB5633cETLyXb8VT+x9rWej646mCxYFx6WGL0nN1tU4kYEyGlH9heAMnSN9riCv2czcoosNRXHSjtyyu7CnJpueU1HS+EOD2eJAYEtEoQE2wjCuSpO2LJBjHIP9LxXsnsAIMtY0bg5C+4e64g3Do7BlblLVZJXsWrY5l0DmGLcAfdIf0oL7KhbfFKKX6D4loQvXxNMqLnyrFxqEt9aWX2zWYOsf5r0WyECV+t1I6vsJ5nGI+MDwvHLLCHWnOalHoOgTmNnio6eH3KYxEJTX1vBxF7+HoEV8xP7p7wXTZttgNqE97ubFFybgvGFTubOTbIp4uyyNY1jZo4DOAlUVYPqdcUbPSCMYQHbV5E65inkeGZ+Qh1yujX33dzBiWEFA0ruvI1HdNab4Tc/wVS1RjXAR6xr5GXe34udQLvWwmpPZP7jjy93gmS8GgdQXdRmYXP5hWVcnLNQAA=",
        liveLink: "https://bestseller.service-now.com/",
        hasLiveLink: true,
        hasSourceCode: false,
        hasPreviewImage: true
    },
    {
        name: "Code of Africa",
        role: "senior_software_engineer",
        description: "projects_description.codeofafrica",
        stack: [
            "ExpressJs",
            "EJS",
            "Typescript",
            "Bootstrap",
            "Nginx",
            "Modernizr"
        ],
        images: [
            {
                alt: "codeofafrica-preview",
                src: "/projects/codeofafrica/codeofafrica_preview.jpg"
            },
            {
                alt: "codeofafrica-blog",
                src: "/projects/codeofafrica/codeofafrica_blog.png"
            },
            {
                alt: "codeofafrica-header",
                src: "/projects/codeofafrica/codeofafrica_header.png"
            },
            {
                alt: "codeofafrica-home",
                src: "/projects/codeofafrica/codeofafrica_home.png"
            },
            {
                alt: "codeofafrica-tablet-mobile",
                src: "/projects/codeofafrica/codeofafrica_tablet_mobile.png"
            },
            {
                alt: "codeofafrica-team",
                src: "/projects/codeofafrica/codeofafrica_team.png"
            },
            {
                alt: "codeofafrica-transparency",
                src: "/projects/codeofafrica/codeofafrica_transparency.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,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",
        liveLink: "https://www.codeofafrica.com/EN",
        hasLiveLink: true,
        hasSourceCode: false,
        hasPreviewImage: true
    },
    {
        name: "EzyAgric",
        role: "fullstack_engineer_php",
        description: "projects_description.ezyagric",
        stack: [
            "Angular",
            "PHP",
            "Laravel",
            "CouchBase",
            "ChartJS",
            "Eloquent ORM"
        ],
        images: [
            {
                alt: "ezyagric-preview",
                src: "/projects/ezyagric/ezyagric_preview.jpg"
            },
            {
                alt: "ezyagric-catalog",
                src: "/projects/ezyagric/ezyagric_catalog.png"
            },
            {
                alt: "ezyagric-dashboard",
                src: "/projects/ezyagric/ezyagric_dashboard.png"
            },
            {
                alt: "ezyagric-details",
                src: "/projects/ezyagric/ezyagric_details.png"
            },
            {
                alt: "ezyagric-download",
                src: "/projects/ezyagric/ezyagric_download.png"
            },
            {
                alt: "ezyagric-footer",
                src: "/projects/ezyagric/ezyagric_footer.png"
            },
            {
                alt: "ezyagric-login",
                src: "/projects/ezyagric/ezyagric_login.png"
            },
            {
                alt: "ezyagric-tablet-mobile",
                src: "/projects/ezyagric/ezyagric_tablet_mobile.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,UklGRsQFAABXRUJQVlA4WAoAAAAgAAAARAEAwAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg1gMAAHAlAJ0BKkUBwQA+7WyrT7+/tqatEetz8B2JZ27gTGnthFZ0qRry7+s8rd3SEljrTExQaSSDixHGlw3DhixCjx+NIIZmoZU5NcXEH2x70bvyw4ZbHLDiB0qlLbuagQGnvd0bWsrH+FVxf/vuN8YXp0VILkMG50a10/R0dWRe8J6gs8dgZzeW/9O3FAJYLi8dL2tLKZN0z6gFaf0peNEJ++gxeTfk8l4ORWwi3n78Pr/y+POn0jJWsmjt3hAeWWh8IdnQo4X0RakHqStf/5AR0w7WmRYuU+6UwDKK2iRTZFEu6hh8FACtP6UPtaS+LcAumemfgg8o7652a0Ozzw4vo19GRRc/f+874fmpqE6A+so759NwTMz7gHyitZrnb+ZfxN/17S7Pr3f5m9/vzm7ZY1W5hSQAAMmeD5dezz/yi7J/ApmUWJfMFdA5ODpOolF4x9/zlnXWrJY6nsFocJ1EvwRJPQ/4T4+tTzq4BfLzcmFrJXvlThGIrxaMPqlszf/r7lvncB86UUMX7SzmLTTMNk3tUQjvcD+kYzTKSGmsn62WJNuOkuGrbV/tgySIJQNbk1qkCkjgM/D1hbPMhIL5AYR8GVquH5edmFZ4+BdWH24dT/itnGMtxoPgwt04/Il52i00KhS83mrq//yFAgZCzkXx+ZgW/AvW8pwFmpEYcbRpELjHzcBaMEWowH6cpTODTCvsRihAUKydCCZa3TU4q5dbGWuAQx1u7F8zFtqTR6D7BdeTblCP1RzcB2suBW+K4PervhpJer4v+oiCPvSkuDdSguf4Rwuo9Hk8GuNtsZP/E0S/9qp2JgAIztGXGYvCpGafnGGPCzX6cXrW/O6cq29TJZrVYXOXsOHGKEuhAvlm1lQ6yAQZ19Dhe3vohOAHNmIJDLzvGSFA/5iPtuwKJ2Bz7H2M/t3Y/OMliD7jNwx8g3V+Dj7Ou51Oa/0VB9mqMvJICCo3NStv9a8uSvsonRbVVGnYLXkk4bRfr7soY1FrHR+a8XyLbj6EdxHn0i8HnyTHoJN8X83hBURbn9duWFfz6X4I3apnDy4Q3EfWYyHVEOMAu4cHJGAIPnCfpadqr3Yoo0VNQqV+r1DbF4wmlDbMEqdoKAQ1CRZ2HcS5nF99TVk3xo5eTFNepO19MmhkmNqmaWqQu8akol5HZNkcwQGnjrVw/8/eagU7GanLwHOnLPSTQRWQubTR6zo1Q5Sb+XR9KPggamQIBBo4bs9B259+8wABWvHNq0/7aPSvgadDkvDijTY955Cdeg6dt08C7JYEBuvQbxmAaNZi5LvAawtdccpikAA=",
        liveLink: "https://ezyagric.com/",
        hasLiveLink: true,
        hasSourceCode: false,
        hasPreviewImage: true
    },
    {
        name: "Motory",
        role: "lamp_stack_engineer",
        description: "projects_description.motory",
        stack: [
            "PHP",
            "Bootstrap",
            "jQuery",
            "MySQL",
            "ElasticSearch",
            "Doctrine"
        ],
        images: [
            {
                alt: "motory-preview",
                src: "/projects/motory/motory_preview.jpg"
            },
            {
                alt: "motory-dashboard",
                src: "/projects/motory/motory_dashboard.png"
            },
            {
                alt: "motory-home",
                src: "/projects/motory/motory_home.png"
            },
            {
                alt: "motory-details",
                src: "/projects/motory/motory_details.png"
            },
            {
                alt: "motory-grid",
                src: "/projects/motory/motory_grid.png"
            },
            {
                alt: "motory-login",
                src: "/projects/motory/motory_login.png"
            },
            {
                alt: "motory-whitelabel",
                src: "/projects/motory/motory_whitelabel.png"
            },
            {
                alt: "motory-tablet-mobile",
                src: "/projects/motory/motory_tablet_mobile.png"
            }
        ],
        blurURL:
            "data:image/webp;base64,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",
        liveLink: "https://www.motory.de/",
        hasLiveLink: true,
        hasSourceCode: false,
        hasPreviewImage: true
    },
    {
        name: "Tembea",
        role: "fullstack_pean_engineer",
        description: "projects_description.tembea",
        stack: [
            "Angular",
            "NodeJs",
            "ExpressJs",
            "Slack API",
            "PostgreSQL",
            "RxJS"
        ],
        images: [
            {
                alt: "tembea-preview",
                src: "/no_preview.webp"
            }
        ],
        blurURL:
            "data:image/webp;base64,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",
        hasLiveLink: false,
        hasSourceCode: false,
        hasPreviewImage: false
    }
];
