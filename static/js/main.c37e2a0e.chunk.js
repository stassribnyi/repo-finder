(this["webpackJsonprepo-finder"]=this["webpackJsonprepo-finder"]||[]).push([[0],{127:function(e,n,t){e.exports=t(141)},141:function(e,n,t){"use strict";t.r(n);var E,a,r,o,i,c,u,l,T,A,s,R,N,d,O,I,C,D,_,f,S,m,P,v,L,b,M,U,g,p,h,V,B,j,G,F,y,H,w,k,Y,W,q,K,x,Q,z,J,$,X,Z,ee,ne,te,Ee,ae,re,oe,ie,ce,ue,le,Te,Ae,se,Re,Ne,de,Oe,Ie,Ce,De,_e,fe,Se,me,Pe,ve,Le,be,Me,Ue,ge,pe,he,Ve,Be,je,Ge,Fe,ye,He,we,ke,Ye,We,qe,Ke,xe,Qe,ze,Je,$e,Xe,Ze,en,nn,tn,En,an,rn,on,cn,un,ln,Tn,An,sn,Rn,Nn,dn,On,In,Cn,Dn,_n,fn,Sn=t(0),mn=t.n(Sn),Pn=t(17),vn=t.n(Pn),Ln=t(119),bn=t(20),Mn=t(43),Un=t(26),gn=t(51),pn=t(89),hn=t(18);function Vn(){var e=Object(hn.a)(["\n    query searchRepositories($query: String!, $itemsPerPage: Int!, $before: String, $after: String) {\n  search(type: REPOSITORY, query: $query, last: $itemsPerPage, before: $before, after: $after) {\n    pageInfo {\n      endCursor\n      startCursor\n    }\n    repositoryCount\n    edges {\n      node {\n        ... on Repository {\n          id\n          name\n          description\n          forks {\n            totalCount\n          }\n          owner {\n            login\n          }\n          stargazers {\n            totalCount\n          }\n          repositoryTopics(first: 10) {\n            edges {\n              node {\n                topic {\n                  name\n                }\n              }\n            }\n          }\n          watchers {\n            totalCount\n          }\n          url\n        }\n      }\n    }\n  }\n}\n    "]);return Vn=function(){return e},e}!function(e){e.Disabled="DISABLED",e.AllActions="ALL_ACTIONS",e.LocalActionsOnly="LOCAL_ACTIONS_ONLY",e.NoPolicy="NO_POLICY"}(E||(E={})),function(e){e.CreatedAt="CREATED_AT"}(a||(a={})),function(e){e.Outside="OUTSIDE",e.Direct="DIRECT",e.All="ALL"}(r||(r={})),function(e){e.Member="MEMBER",e.Owner="OWNER",e.Collaborator="COLLABORATOR",e.Contributor="CONTRIBUTOR",e.FirstTimeContributor="FIRST_TIME_CONTRIBUTOR",e.FirstTimer="FIRST_TIMER",e.None="NONE"}(o||(o={})),function(e){e.Archived="ARCHIVED",e.InsufficientAccess="INSUFFICIENT_ACCESS",e.Locked="LOCKED",e.LoginRequired="LOGIN_REQUIRED",e.Maintenance="MAINTENANCE",e.VerifiedEmailRequired="VERIFIED_EMAIL_REQUIRED",e.Denied="DENIED"}(i||(i={})),function(e){e.OccurredAt="OCCURRED_AT",e.CommitCount="COMMIT_COUNT"}(c||(c={})),function(e){e.None="NONE",e.Read="READ",e.Write="WRITE",e.Admin="ADMIN"}(u||(u={})),function(e){e.CreatedAt="CREATED_AT"}(l||(l={})),function(e){e.Abandoned="ABANDONED",e.Active="ACTIVE",e.Destroyed="DESTROYED",e.Error="ERROR",e.Failure="FAILURE",e.Inactive="INACTIVE",e.Pending="PENDING",e.Queued="QUEUED",e.InProgress="IN_PROGRESS"}(T||(T={})),function(e){e.Pending="PENDING",e.Success="SUCCESS",e.Failure="FAILURE",e.Inactive="INACTIVE",e.Error="ERROR",e.Queued="QUEUED",e.InProgress="IN_PROGRESS"}(A||(A={})),function(e){e.Left="LEFT",e.Right="RIGHT"}(s||(s={})),function(e){e.CreatedAt="CREATED_AT"}(R||(R={})),function(e){e.Owner="OWNER",e.BillingManager="BILLING_MANAGER"}(N||(N={})),function(e){e.NoPolicy="NO_POLICY",e.Admin="ADMIN",e.Write="WRITE",e.Read="READ",e.None="NONE"}(d||(d={})),function(e){e.Enabled="ENABLED",e.Disabled="DISABLED",e.NoPolicy="NO_POLICY"}(O||(O={})),function(e){e.Enabled="ENABLED",e.NoPolicy="NO_POLICY"}(I||(I={})),function(e){e.Login="LOGIN",e.CreatedAt="CREATED_AT"}(C||(C={})),function(e){e.NoPolicy="NO_POLICY",e.All="ALL",e.Public="PUBLIC",e.Private="PRIVATE",e.Disabled="DISABLED"}(D||(D={})),function(e){e.Enabled="ENABLED",e.Disabled="DISABLED"}(_||(_={})),function(e){e.HostName="HOST_NAME",e.CustomerName="CUSTOMER_NAME",e.CreatedAt="CREATED_AT"}(f||(f={})),function(e){e.Email="EMAIL"}(S||(S={})),function(e){e.Login="LOGIN",e.RemoteCreatedAt="REMOTE_CREATED_AT"}(m||(m={})),function(e){e.CreatedAt="CREATED_AT"}(P||(P={})),function(e){e.Pending="PENDING",e.Success="SUCCESS",e.Failure="FAILURE"}(v||(v={})),function(e){e.Member="MEMBER",e.Owner="OWNER"}(L||(L={})),function(e){e.Cloud="CLOUD",e.Server="SERVER"}(b||(b={})),function(e){e.Github="GITHUB",e.Patreon="PATREON",e.OpenCollective="OPEN_COLLECTIVE",e.KoFi="KO_FI",e.Tidelift="TIDELIFT",e.CommunityBridge="COMMUNITY_BRIDGE",e.Liberapay="LIBERAPAY",e.Issuehunt="ISSUEHUNT",e.Otechie="OTECHIE",e.Custom="CUSTOM"}(M||(M={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.PushedAt="PUSHED_AT"}(U||(U={})),function(e){e.Public="PUBLIC",e.Secret="SECRET",e.All="ALL"}(g||(g={})),function(e){e.Valid="VALID",e.Invalid="INVALID",e.MalformedSig="MALFORMED_SIG",e.UnknownKey="UNKNOWN_KEY",e.BadEmail="BAD_EMAIL",e.UnverifiedEmail="UNVERIFIED_EMAIL",e.NoUser="NO_USER",e.UnknownSigType="UNKNOWN_SIG_TYPE",e.Unsigned="UNSIGNED",e.GpgverifyUnavailable="GPGVERIFY_UNAVAILABLE",e.GpgverifyError="GPGVERIFY_ERROR",e.NotSigningKey="NOT_SIGNING_KEY",e.ExpiredKey="EXPIRED_KEY",e.OcspPending="OCSP_PENDING",e.OcspError="OCSP_ERROR",e.BadCert="BAD_CERT",e.OcspRevoked="OCSP_REVOKED"}(p||(p={})),function(e){e.Enforced="ENFORCED",e.Configured="CONFIGURED",e.Unconfigured="UNCONFIGURED"}(h||(h={})),function(e){e.Enabled="ENABLED",e.Disabled="DISABLED"}(V||(V={})),function(e){e.CreatedAt="CREATED_AT",e.AllowListValue="ALLOW_LIST_VALUE"}(B||(B={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.Comments="COMMENTS"}(j||(j={})),function(e){e.Open="OPEN",e.Closed="CLOSED"}(G||(G={})),function(e){e.IssueComment="ISSUE_COMMENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT"}(F||(F={})),function(e){e.Name="NAME",e.CreatedAt="CREATED_AT"}(y||(y={})),function(e){e.Size="SIZE"}(H||(H={})),function(e){e.OffTopic="OFF_TOPIC",e.TooHeated="TOO_HEATED",e.Resolved="RESOLVED",e.Spam="SPAM"}(w||(w={})),function(e){e.Mergeable="MERGEABLE",e.Conflicting="CONFLICTING",e.Unknown="UNKNOWN"}(k||(k={})),function(e){e.DueDate="DUE_DATE",e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.Number="NUMBER"}(Y||(Y={})),function(e){e.Open="OPEN",e.Closed="CLOSED"}(W||(W={})),function(e){e.Active="ACTIVE",e.Suspended="SUSPENDED",e.PendingDeletion="PENDING_DELETION"}(q||(q={})),function(e){e.Access="ACCESS",e.Authentication="AUTHENTICATION",e.Create="CREATE",e.Modify="MODIFY",e.Remove="REMOVE",e.Restore="RESTORE",e.Transfer="TRANSFER"}(K||(K={})),function(e){e.Asc="ASC",e.Desc="DESC"}(x||(x={})),function(e){e.Read="READ",e.Admin="ADMIN"}(Q||(Q={})),function(e){e.Free="FREE",e.Business="BUSINESS",e.BusinessPlus="BUSINESS_PLUS",e.Unlimited="UNLIMITED",e.TieredPerSeat="TIERED_PER_SEAT"}(z||(z={})),function(e){e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY"}(J||(J={})),function(e){e.DirectMember="DIRECT_MEMBER",e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.Unaffiliated="UNAFFILIATED",e.OutsideCollaborator="OUTSIDE_COLLABORATOR"}($||($={})),function(e){e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING",e.SamlSsoEnforcementRequiresExternalIdentity="SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY",e.UserAccountDeleted="USER_ACCOUNT_DELETED",e.TwoFactorAccountRecovery="TWO_FACTOR_ACCOUNT_RECOVERY"}(X||(X={})),function(e){e.OutsideCollaborator="OUTSIDE_COLLABORATOR",e.Unaffiliated="UNAFFILIATED",e.BillingManager="BILLING_MANAGER"}(Z||(Z={})),function(e){e.TwoFactorRequirementNonCompliance="TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE",e.SamlExternalIdentityMissing="SAML_EXTERNAL_IDENTITY_MISSING"}(ee||(ee={})),function(e){e.Read="READ",e.Write="WRITE",e.Admin="ADMIN",e.None="NONE"}(ne||(ne={})),function(e){e.Read="READ",e.Admin="ADMIN"}(te||(te={})),function(e){e.All="ALL",e.Public="PUBLIC",e.None="NONE",e.Private="PRIVATE",e.Internal="INTERNAL",e.PublicInternal="PUBLIC_INTERNAL",e.PrivateInternal="PRIVATE_INTERNAL",e.PublicPrivate="PUBLIC_PRIVATE"}(Ee||(Ee={})),function(e){e.DirectMember="DIRECT_MEMBER",e.Admin="ADMIN",e.BillingManager="BILLING_MANAGER",e.Reinstate="REINSTATE"}(ae||(ae={})),function(e){e.User="USER",e.Email="EMAIL"}(re||(re={})),function(e){e.Member="MEMBER",e.Admin="ADMIN"}(oe||(oe={})),function(e){e.All="ALL",e.Private="PRIVATE",e.Disabled="DISABLED"}(ie||(ie={})),function(e){e.CreatedAt="CREATED_AT",e.Login="LOGIN"}(ce||(ce={})),function(e){e.CreatedAt="CREATED_AT"}(ue||(ue={})),function(e){e.CreatedAt="CREATED_AT"}(le||(le={})),function(e){e.Npm="NPM",e.Rubygems="RUBYGEMS",e.Maven="MAVEN",e.Docker="DOCKER",e.Debian="DEBIAN",e.Nuget="NUGET",e.Pypi="PYPI"}(Te||(Te={})),function(e){e.CreatedAt="CREATED_AT"}(Ae||(Ae={})),function(e){e.Repository="REPOSITORY",e.Gist="GIST",e.Issue="ISSUE",e.Project="PROJECT",e.PullRequest="PULL_REQUEST",e.User="USER",e.Organization="ORGANIZATION",e.Team="TEAM"}(se||(se={})),function(e){e.Archived="ARCHIVED",e.NotArchived="NOT_ARCHIVED"}(Re||(Re={})),function(e){e.ContentOnly="CONTENT_ONLY",e.NoteOnly="NOTE_ONLY",e.Redacted="REDACTED"}(Ne||(Ne={})),function(e){e.Todo="TODO",e.InProgress="IN_PROGRESS",e.Done="DONE"}(de||(de={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.Name="NAME"}(Oe||(Oe={})),function(e){e.Open="OPEN",e.Closed="CLOSED"}(Ie||(Ie={})),function(e){e.BasicKanban="BASIC_KANBAN",e.AutomatedKanbanV2="AUTOMATED_KANBAN_V2",e.AutomatedReviewsKanban="AUTOMATED_REVIEWS_KANBAN",e.BugTriage="BUG_TRIAGE"}(Ce||(Ce={})),function(e){e.Merge="MERGE",e.Squash="SQUASH",e.Rebase="REBASE"}(De||(De={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT"}(_e||(_e={})),function(e){e.Pending="PENDING",e.Submitted="SUBMITTED"}(fe||(fe={})),function(e){e.ChangesRequested="CHANGES_REQUESTED",e.Approved="APPROVED",e.ReviewRequired="REVIEW_REQUIRED"}(Se||(Se={})),function(e){e.Comment="COMMENT",e.Approve="APPROVE",e.RequestChanges="REQUEST_CHANGES",e.Dismiss="DISMISS"}(me||(me={})),function(e){e.Pending="PENDING",e.Commented="COMMENTED",e.Approved="APPROVED",e.ChangesRequested="CHANGES_REQUESTED",e.Dismissed="DISMISSED"}(Pe||(Pe={})),function(e){e.Open="OPEN",e.Closed="CLOSED",e.Merged="MERGED"}(ve||(ve={})),function(e){e.PullRequestCommit="PULL_REQUEST_COMMIT",e.PullRequestCommitCommentThread="PULL_REQUEST_COMMIT_COMMENT_THREAD",e.PullRequestReview="PULL_REQUEST_REVIEW",e.PullRequestReviewThread="PULL_REQUEST_REVIEW_THREAD",e.PullRequestRevisionMarker="PULL_REQUEST_REVISION_MARKER",e.AutomaticBaseChangeFailedEvent="AUTOMATIC_BASE_CHANGE_FAILED_EVENT",e.AutomaticBaseChangeSucceededEvent="AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT",e.BaseRefChangedEvent="BASE_REF_CHANGED_EVENT",e.BaseRefForcePushedEvent="BASE_REF_FORCE_PUSHED_EVENT",e.DeployedEvent="DEPLOYED_EVENT",e.DeploymentEnvironmentChangedEvent="DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",e.HeadRefDeletedEvent="HEAD_REF_DELETED_EVENT",e.HeadRefForcePushedEvent="HEAD_REF_FORCE_PUSHED_EVENT",e.HeadRefRestoredEvent="HEAD_REF_RESTORED_EVENT",e.MergedEvent="MERGED_EVENT",e.ReviewDismissedEvent="REVIEW_DISMISSED_EVENT",e.ReviewRequestedEvent="REVIEW_REQUESTED_EVENT",e.ReviewRequestRemovedEvent="REVIEW_REQUEST_REMOVED_EVENT",e.ReadyForReviewEvent="READY_FOR_REVIEW_EVENT",e.ConvertToDraftEvent="CONVERT_TO_DRAFT_EVENT",e.IssueComment="ISSUE_COMMENT",e.CrossReferencedEvent="CROSS_REFERENCED_EVENT",e.AddedToProjectEvent="ADDED_TO_PROJECT_EVENT",e.AssignedEvent="ASSIGNED_EVENT",e.ClosedEvent="CLOSED_EVENT",e.CommentDeletedEvent="COMMENT_DELETED_EVENT",e.ConnectedEvent="CONNECTED_EVENT",e.ConvertedNoteToIssueEvent="CONVERTED_NOTE_TO_ISSUE_EVENT",e.DemilestonedEvent="DEMILESTONED_EVENT",e.DisconnectedEvent="DISCONNECTED_EVENT",e.LabeledEvent="LABELED_EVENT",e.LockedEvent="LOCKED_EVENT",e.MarkedAsDuplicateEvent="MARKED_AS_DUPLICATE_EVENT",e.MentionedEvent="MENTIONED_EVENT",e.MilestonedEvent="MILESTONED_EVENT",e.MovedColumnsInProjectEvent="MOVED_COLUMNS_IN_PROJECT_EVENT",e.PinnedEvent="PINNED_EVENT",e.ReferencedEvent="REFERENCED_EVENT",e.RemovedFromProjectEvent="REMOVED_FROM_PROJECT_EVENT",e.RenamedTitleEvent="RENAMED_TITLE_EVENT",e.ReopenedEvent="REOPENED_EVENT",e.SubscribedEvent="SUBSCRIBED_EVENT",e.TransferredEvent="TRANSFERRED_EVENT",e.UnassignedEvent="UNASSIGNED_EVENT",e.UnlabeledEvent="UNLABELED_EVENT",e.UnlockedEvent="UNLOCKED_EVENT",e.UserBlockedEvent="USER_BLOCKED_EVENT",e.UnmarkedAsDuplicateEvent="UNMARKED_AS_DUPLICATE_EVENT",e.UnpinnedEvent="UNPINNED_EVENT",e.UnsubscribedEvent="UNSUBSCRIBED_EVENT"}(Le||(Le={})),function(e){e.Open="OPEN",e.Closed="CLOSED"}(be||(be={})),function(e){e.ThumbsUp="THUMBS_UP",e.ThumbsDown="THUMBS_DOWN",e.Laugh="LAUGH",e.Hooray="HOORAY",e.Confused="CONFUSED",e.Heart="HEART",e.Rocket="ROCKET",e.Eyes="EYES"}(Me||(Me={})),function(e){e.CreatedAt="CREATED_AT"}(Ue||(Ue={})),function(e){e.TagCommitDate="TAG_COMMIT_DATE",e.Alphabetical="ALPHABETICAL"}(ge||(ge={})),function(e){e.CreatedAt="CREATED_AT",e.Name="NAME"}(pe||(pe={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(he||(he={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Ve||(Ve={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Be||(Be={})),function(e){e.Merge="MERGE",e.Rebase="REBASE",e.Squash="SQUASH"}(je||(je={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Ge||(Ge={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(Fe||(Fe={})),function(e){e.Internal="INTERNAL",e.Private="PRIVATE",e.Public="PUBLIC"}(ye||(ye={})),function(e){e.Spam="SPAM",e.Abuse="ABUSE",e.OffTopic="OFF_TOPIC",e.Outdated="OUTDATED",e.Duplicate="DUPLICATE",e.Resolved="RESOLVED"}(He||(He={})),function(e){e.Owner="OWNER",e.Collaborator="COLLABORATOR",e.OrganizationMember="ORGANIZATION_MEMBER"}(we||(we={})),function(e){e.Commit="COMMIT",e.Issue="ISSUE",e.PullRequest="PULL_REQUEST",e.Repository="REPOSITORY",e.PullRequestReview="PULL_REQUEST_REVIEW"}(ke||(ke={})),function(e){e.CreatedAt="CREATED_AT",e.InviteeLogin="INVITEE_LOGIN"}(Ye||(Ye={})),function(e){e.Moving="MOVING",e.Billing="BILLING",e.Rename="RENAME",e.Migrating="MIGRATING"}(We||(We={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.PushedAt="PUSHED_AT",e.Name="NAME",e.Stargazers="STARGAZERS"}(qe||(qe={})),function(e){e.Admin="ADMIN",e.Maintain="MAINTAIN",e.Write="WRITE",e.Triage="TRIAGE",e.Read="READ"}(Ke||(Ke={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(xe||(xe={})),function(e){e.Private="PRIVATE",e.Public="PUBLIC",e.Internal="INTERNAL"}(Qe||(Qe={})),function(e){e.Sha1="SHA1",e.Sha256="SHA256",e.Sha384="SHA384",e.Sha512="SHA512"}(ze||(ze={})),function(e){e.RsaSha1="RSA_SHA1",e.RsaSha256="RSA_SHA256",e.RsaSha384="RSA_SHA384",e.RsaSha512="RSA_SHA512"}(Je||(Je={})),function(e){e.UpdatedAt="UPDATED_AT"}($e||($e={})),function(e){e.Issue="ISSUE",e.Repository="REPOSITORY",e.User="USER"}(Xe||(Xe={})),function(e){e.Rubygems="RUBYGEMS",e.Npm="NPM",e.Pip="PIP",e.Maven="MAVEN",e.Nuget="NUGET",e.Composer="COMPOSER"}(Ze||(Ze={})),function(e){e.Cve="CVE",e.Ghsa="GHSA"}(en||(en={})),function(e){e.PublishedAt="PUBLISHED_AT",e.UpdatedAt="UPDATED_AT"}(nn||(nn={})),function(e){e.Low="LOW",e.Moderate="MODERATE",e.High="HIGH",e.Critical="CRITICAL"}(tn||(tn={})),function(e){e.UpdatedAt="UPDATED_AT"}(En||(En={})),function(e){e.CreatedAt="CREATED_AT",e.MonthlyPriceInCents="MONTHLY_PRICE_IN_CENTS"}(an||(an={})),function(e){e.CreatedAt="CREATED_AT"}(rn||(rn={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(on||(on={})),function(e){e.StarredAt="STARRED_AT"}(cn||(cn={})),function(e){e.Expected="EXPECTED",e.Error="ERROR",e.Failure="FAILURE",e.Pending="PENDING",e.Success="SUCCESS"}(un||(un={})),function(e){e.Unsubscribed="UNSUBSCRIBED",e.Subscribed="SUBSCRIBED",e.Ignored="IGNORED"}(ln||(ln={})),function(e){e.Number="NUMBER"}(Tn||(Tn={})),function(e){e.CreatedAt="CREATED_AT"}(An||(An={})),function(e){e.Login="LOGIN",e.CreatedAt="CREATED_AT"}(sn||(sn={})),function(e){e.Maintainer="MAINTAINER",e.Member="MEMBER"}(Rn||(Rn={})),function(e){e.Immediate="IMMEDIATE",e.ChildTeam="CHILD_TEAM",e.All="ALL"}(Nn||(Nn={})),function(e){e.Name="NAME"}(dn||(dn={})),function(e){e.Secret="SECRET",e.Visible="VISIBLE"}(On||(On={})),function(e){e.CreatedAt="CREATED_AT",e.UpdatedAt="UPDATED_AT",e.PushedAt="PUSHED_AT",e.Name="NAME",e.Permission="PERMISSION",e.Stargazers="STARGAZERS"}(In||(In={})),function(e){e.Admin="ADMIN",e.Member="MEMBER"}(Cn||(Cn={})),function(e){e.NotRelevant="NOT_RELEVANT",e.TooSpecific="TOO_SPECIFIC",e.PersonalPreference="PERSONAL_PREFERENCE",e.TooGeneral="TOO_GENERAL"}(Dn||(Dn={})),function(e){e.OneDay="ONE_DAY",e.ThreeDays="THREE_DAYS",e.OneWeek="ONE_WEEK",e.OneMonth="ONE_MONTH",e.Permanent="PERMANENT"}(_n||(_n={})),function(e){e.UpdatedAt="UPDATED_AT"}(fn||(fn={}));var Bn=Object(Mn.gql)(Vn());var jn=function(){var e,n=(e={notifyOnNetworkStatusChange:!0},Mn.useLazyQuery(Bn,e)),t=Object(gn.a)(n,2),E=t[0],a=t[1],r=a.loading,o=a.data,i=a.fetchMore,c=Object(Sn.useCallback)((function(e){return E({variables:Object(Un.a)({},e)})}),[E]),u=Object(Sn.useCallback)((function(e){return null===i||void 0===i?void 0:i({variables:Object(Un.a)({},e),updateQuery:function(e,n){return n.fetchMoreResult||e}})}),[i]);return{isLoading:r,items:Object(Sn.useMemo)((function(){return function(e){var n;return(null===e||void 0===e||null===(n=e.edges)||void 0===n?void 0:n.length)?e.edges.reduce((function(e,n){var t,E;if(!(null===n||void 0===n?void 0:n.node))return e;var a=n.node,r=a.description||"",o="".concat(a.owner.login,"/").concat(a.name),i=(null===(t=a.repositoryTopics)||void 0===t||null===(E=t.edges)||void 0===E?void 0:E.reduce((function(e,n){var t;return[].concat(Object(pn.a)(e),[(null===n||void 0===n||null===(t=n.node)||void 0===t?void 0:t.topic.name)||""])}),[]))||[];return[].concat(Object(pn.a)(e),[{topics:i,uniqueName:o,description:r,url:a.url,forks:a.forks.totalCount,stars:a.stargazers.totalCount,watchers:a.watchers.totalCount}])}),[]):[]}(null===o||void 0===o?void 0:o.search)}),[o]),itemsCount:(null===o||void 0===o?void 0:o.search.repositoryCount)||0,pageInfo:(null===o||void 0===o?void 0:o.search.pageInfo)||{},searchRepos:c,searchMoreRepos:u}},Gn=[5,10,25],Fn=Object(Sn.createContext)({}),yn=t(193),Hn=t(191),wn=t(192),kn=t(194),Yn=t(19),Wn=t(174);function qn(){var e=Object(hn.a)(["\n  width: 100%;\n  position: relative;\n\n  padding: ","px 0;\n"]);return qn=function(){return e},e}function Kn(){var e=Object(hn.a)(["\n    top: ","px;\n    left: ","px;\n    width: calc(100% - ","px);\n  "]);return Kn=function(){return e},e}function xn(){var e=Object(hn.a)(["\n  position: absolute;\n\n  ","\n"]);return xn=function(){return e},e}var Qn=Object(Yn.c)(Wn.a)(xn(),(function(e){var n=e.theme;return Object(Yn.b)(Kn(),n.spacing(1),n.spacing(1),n.spacing(2))})),zn={Container:Yn.c.div(qn(),(function(e){return e.theme.spacing(1)})),Progress:Qn},Jn=function(e){var n=e.isLoading,t=e.children,E=e.showContent,a=void 0!==E&&E;return mn.a.createElement(zn.Container,null,n?mn.a.createElement(mn.a.Fragment,null,mn.a.createElement(zn.Progress,{color:"secondary"}),a&&t):t)},$n=t(178),Xn=t(180),Zn=t(181),et=t(179),nt=t(182),tt=t(183),Et=t(184),at=t(118),rt=t.n(at),ot=function(e){return rt()(e).format("0a")},it=t(196),ct=t(64),ut=t(197),lt=t(198),Tt=t(177);function At(){var e=Object(hn.a)(["\n    background-color: ",";\n    color: ",";\n    margin-bottom: ","px;\n\n    &:not(:last-child) {\n      margin-right: ","px;\n    }\n  "]);return At=function(){return e},e}function st(){var e=Object(hn.a)(["\n  ",";\n"]);return st=function(){return e},e}function Rt(){var e=Object(hn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: ","px;\n"]);return Rt=function(){return e},e}function Nt(){var e=Object(hn.a)(["\n  border: none;\n  background: transparent;\n"]);return Nt=function(){return e},e}function dt(){var e=Object(hn.a)(["\n  background-color: ",";\n"]);return dt=function(){return e},e}var Ot=function(e){return mn.a.createElement(lt.a,Object.assign({component:"span"},e))},It=Object(Yn.c)((function(e){return mn.a.createElement(it.a,Object.assign({variant:"rounded"},e))}))(dt(),(function(e){return e.theme.palette.secondary.light})),Ct={ChipWithoutBorder:Object(Yn.c)(Ot)(Nt()),Description:function(e){return mn.a.createElement(ct.a,Object.assign({component:"span",variant:"body1",color:"textPrimary"},e))},Divider:function(){return mn.a.createElement(Tt.a,{variant:"inset",component:"li"})},InfoRow:Yn.c.span(Rt(),(function(e){return e.theme.spacing(1)})),ListItem:function(e){return mn.a.createElement(ut.a,Object.assign({alignItems:"flex-start"},e))},RepositoryAvatar:It,TagChip:Object(Yn.c)(Ot)(st(),(function(e){var n=e.theme;return Object(Yn.b)(At(),n.palette.info.light,n.palette.info.contrastText,n.spacing(1),n.spacing(1))}))},Dt=function(e){var n=e.url,t=e.uniqueName,E=e.description,a=e.forks,r=e.stars,o=e.topics,i=e.watchers,c=e.showDivider,u=void 0!==c&&c;return mn.a.createElement(mn.a.Fragment,null,mn.a.createElement(Ct.ListItem,null,mn.a.createElement($n.a,null,mn.a.createElement(Ct.RepositoryAvatar,null,mn.a.createElement(et.a,null))),mn.a.createElement(Xn.a,{primary:mn.a.createElement(Zn.a,{href:n,target:"_blank",rel:"noopener noreferrer"},t),secondary:mn.a.createElement(mn.a.Fragment,null,mn.a.createElement(Ct.InfoRow,null,mn.a.createElement(Ct.Description,null,E)),mn.a.createElement(Ct.InfoRow,null,o.map((function(e,n){return mn.a.createElement(Ct.TagChip,{key:n,label:"#".concat(e)})}))),mn.a.createElement(Ct.InfoRow,null,mn.a.createElement(Ct.ChipWithoutBorder,{icon:mn.a.createElement(nt.a,null),label:ot(r)}),mn.a.createElement(Ct.ChipWithoutBorder,{icon:mn.a.createElement(tt.a,null),label:ot(i)}),mn.a.createElement(Ct.ChipWithoutBorder,{icon:mn.a.createElement(Et.a,null),label:ot(a)})))})),u&&mn.a.createElement(Ct.Divider,null))},_t=t(120),ft=t(185),St=t(10),mt=t(199);function Pt(){var e=Object(hn.a)(["\n  color: inherit;\n  margin-left: ","px;\n"]);return Pt=function(){return e},e}function vt(){var e=Object(hn.a)(["\n  display: flex;\n"]);return vt=function(){return e},e}function Lt(){var e=Object(hn.a)(["\n    padding: 0 ","px;\n    border-radius: ","px;\n\n    background-color: ",";\n    &:hover {\n      background-color: ",";\n    }\n\n    transition-property: background-color;\n    transition-duration: ","ms;\n    transition-timing-function: ",";\n  "]);return Lt=function(){return e},e}function bt(){var e=Object(hn.a)(["\n  margin: 0;\n  width: auto;\n\n  display: flex;\n  align-items: center;\n\n  ",";\n"]);return bt=function(){return e},e}var Mt=Yn.c.div(bt(),(function(e){var n=e.theme;return Object(Yn.b)(Lt(),n.spacing(1),n.shape.borderRadius,Object(St.c)(n.palette.common.white,.15),Object(St.c)(n.palette.common.white,.25),n.transitions.duration.standard,n.transitions.easing.easeOut)})),Ut=Yn.c.div(vt()),gt={Container:Mt,SearchField:Object(Yn.c)(mt.a)(Pt(),(function(e){return e.theme.spacing(1)})),SearchIcon:Ut},pt=t(188),ht=t(189),Vt=t(186),Bt=Object(Vt.a)({breakpoints:{values:{tablet:640,laptop:1024,desktop:1280}},overrides:{MuiCssBaseline:{"@global":{html:{WebkitFontSmoothing:"auto"}}}}}),jt=t(187);function Gt(){var e=Object(hn.a)(["\n    margin: 0 auto;\n    max-width: ","px;\n  "]);return Gt=function(){return e},e}function Ft(){var e=Object(hn.a)(["\n  ",";\n"]);return Ft=function(){return e},e}var yt=function(e){return mn.a.createElement(jt.a,Object.assign({container:!0,direction:"column",alignItems:"center"},e))},Ht={Container:Object(Yn.c)(yt)(Ft(),(function(e){var n=e.theme;return Object(Yn.b)(Gt(),n.breakpoints.values.laptop)})),Content:function(e){return mn.a.createElement(yt,Object.assign({item:!0},e))}},wt=function(e){var n=e.children;return mn.a.createElement(pt.a,{theme:Bt},mn.a.createElement(Yn.a,{theme:Bt},mn.a.createElement(ht.a,null),mn.a.createElement(Ht.Container,null,mn.a.createElement(Ht.Content,null,n))))},kt=t(195),Yt=t(190);function Wt(){var e=Object(hn.a)(["\n  display: flex;\n  justify-content: center;\n\n  .MuiTablePagination-toolbar {\n    padding: 0 ","px;\n  }\n\n  .MuiTablePagination-spacer {\n    display: none;\n  }\n"]);return Wt=function(){return e},e}function qt(){var e=Object(hn.a)(["\n  padding: 0 ","px;\n"]);return qt=function(){return e},e}function Kt(){var e=Object(hn.a)(["\n  margin-left: auto;\n"]);return Kt=function(){return e},e}var xt,Qt=Object(Yn.c)((function(e){e.disabled;var n=e.value,t=e.onSearch,E=e.className,a=Object(_t.a)(e,["disabled","value","onSearch","className"]),r=Object(Sn.useState)(n),o=Object(gn.a)(r,2),i=o[0],c=o[1];Object(Sn.useEffect)((function(){c(n)}),[n]);var u=Object(Sn.useCallback)((function(e){var n=e.target;return c(n.value)}),[c]),l=Object(Sn.useCallback)((function(e){"Enter"===e.key&&t(i||"")}),[t,i]);return mn.a.createElement(gt.Container,{className:E},mn.a.createElement(gt.SearchIcon,null,mn.a.createElement(ft.a,null)),mn.a.createElement(gt.SearchField,Object.assign({},a,{value:i||"",inputProps:{"aria-label":"search"},onKeyPress:l,onChange:u})))}))(Kt()),zt=Yn.c.section(qt(),(function(e){return e.theme.spacing(2)})),Jt={HeaderTitle:function(e){return mn.a.createElement(ct.a,Object.assign({variant:"h6"},e))},IconButton:function(e){return mn.a.createElement(Yt.a,Object.assign({edge:"start",color:"inherit"},e))},InfoTitle:function(e){return mn.a.createElement(ct.a,Object.assign({variant:"h3",align:"center"},e))},Pagination:Object(Yn.c)((function(e){return mn.a.createElement(kt.a,Object.assign({component:"div"},e))}))(Wt(),(function(e){return e.theme.spacing(2)})),SearchField:Qt,SearchResults:zt},$t=function(e){var n=e.from,t=e.to,E=e.count;return"".concat(n,"-").concat(t," of ").concat(ot(E))},Xt=(xt=function(){var e=Object(Sn.useContext)(Fn),n=e.isLoading,t=e.items,E=e.pagination,a=e.searchValue,r=e.searchRepos,o=!!t.length;return Object(Sn.useEffect)((function(){r("vue")}),[r]),mn.a.createElement(wt,null,mn.a.createElement(yn.a,{position:"static"},mn.a.createElement(Hn.a,null,mn.a.createElement(Jt.IconButton,null,mn.a.createElement(kn.a,null)),mn.a.createElement(Jt.HeaderTitle,null,"Repo finder"),mn.a.createElement(Jt.SearchField,{placeholder:"Search\u2026",value:a,disabled:n,onSearch:r}))),mn.a.createElement(Jn,{isLoading:n,showContent:o},mn.a.createElement(Jt.SearchResults,null,mn.a.createElement(wn.a,null,t.map((function(e,n){return mn.a.createElement(Dt,Object.assign({key:n,showDivider:n!==t.length-1},e))}))),o&&mn.a.createElement(Jt.Pagination,Object.assign({},E,{labelRowsPerPage:null,labelDisplayedRows:$t}))),!o&&mn.a.createElement(Jt.InfoTitle,null,"No Results")))},function(){var e=Object(Sn.useState)(""),n=Object(gn.a)(e,2),t=n[0],E=n[1],a=Object(Sn.useState)({count:0,page:0,rowsPerPage:Gn[0],rowsPerPageOptions:Gn,onChangePage:function(){}}),r=Object(gn.a)(a,2),o=r[0],i=r[1],c=jn(),u=c.isLoading,l=c.items,T=c.itemsCount,A=c.pageInfo,s=c.searchRepos,R=c.searchMoreRepos,N=Object(Sn.useCallback)((function(e){E(e),s({query:e,itemsPerPage:o.rowsPerPage}),i((function(e){return Object(Un.a)(Object(Un.a)({},e),{},{page:0})}))}),[o.rowsPerPage,s]),d=Object(Sn.useCallback)((function(e,n){var E=o.page<n?{after:A.endCursor}:{before:A.startCursor};R(Object(Un.a)({query:t,itemsPerPage:o.rowsPerPage},E)),i((function(e){return Object(Un.a)(Object(Un.a)({},e),{},{page:n})}))}),[A.endCursor,A.startCursor,o.page,o.rowsPerPage,R,t]),O=Object(Sn.useCallback)((function(e){var n=e.target,E=parseInt(n.value,10);s({query:t,itemsPerPage:E}),i((function(e){return Object(Un.a)(Object(Un.a)({},e),{},{page:0,rowsPerPage:E})}))}),[s,t]);Object(Sn.useEffect)((function(){i((function(e){return Object(Un.a)(Object(Un.a)({},e),{},{onChangePage:d,onChangeRowsPerPage:O})}))}),[d,O]),Object(Sn.useEffect)((function(){i((function(e){return Object(Un.a)(Object(Un.a)({},e),{},{count:T})}))}),[T]);var I=Object(Sn.useMemo)((function(){return{isLoading:u,items:l,pagination:o,searchValue:t,searchRepos:N}}),[u,l,o,t,N]);return mn.a.createElement(Fn.Provider,{value:I},mn.a.createElement(xt,null))}),Zt=Object.freeze({graphUri:"https://api.github.com/graphql",authToken:"v1.cd0e7426ffa5d9a4dc5d4e3bfab44e41d9bdeda0",isDevelopment:!1}),eE=[{path:"/",component:Xt}],nE=new Mn.ApolloClient({uri:Zt.graphUri,cache:new Mn.InMemoryCache,connectToDevTools:Zt.isDevelopment,headers:{Authorization:"Bearer ".concat(Zt.authToken)}});vn.a.render(mn.a.createElement(mn.a.StrictMode,null,mn.a.createElement(Mn.ApolloProvider,{client:nE},mn.a.createElement(Ln.a,{basename:"/"},mn.a.createElement(bn.c,null,eE.map((function(e,n){return mn.a.createElement(bn.a,Object.assign({key:n},e))})))))),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.c37e2a0e.chunk.js.map