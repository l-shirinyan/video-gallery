trustedFilter.$inject = ['$sce'];

export default function trustedFilter ($sce){
	return function(url) {
		return $sce.trustAsResourceUrl(url);
	};
}